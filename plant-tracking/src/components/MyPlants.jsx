import React, { useEffect } from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

// const MyPlants = () => {
const MyPlants = ({ data }) => {
  console.log('data', data);

  // useEffect(() => {
  //   fetchData();
  // },[]);

  // function fetchData() {
  //   // console.log('plants?', plants)
  //   axios.get('/dbPlants')
  //   .then((results) => {
  //     console.log('results.data?', results.data)
  //     console.log('results?', results)
  //     setData(results);
  //   })
  //   .catch((err) => {
  //   })
  // }

  function removePlant(e) {
    e.preventDefault();
    let id = e.target.getAttribute("id");
    console.log('hello', e.target.getAttribute('id'));
    // console.log('hello', e);
    axios.delete('/dbPlants', {data: {'id': id}})
      .then((res) => {
        console.log('did delete plant work?', res)
      })
      .catch((err) => {
        console.log('delete err!!')
      })
  }

  return (
    <div>
      <Headers>
        <EachPlantInfo>Plant No.</EachPlantInfo>
        <EachPlantInfo>Name</EachPlantInfo>
        <EachPlantInfo>Alternate Name</EachPlantInfo>
        <IdealLight>Ideal Light</IdealLight>
        <EachPlantWatering>Watering</EachPlantWatering>
        <EachPlantInfo>Tolerated Light</EachPlantInfo>
        <EachPlantInfo>Remove Plant?</EachPlantInfo>
      </Headers>
      {!data
      ? <h2>Add some Plants!</h2>
      : (data.map((plant, i) =>
        <EachPlant key={i}>
          <EachPlantInfo>{ plant.id + 1 }</EachPlantInfo>
          <EachPlantInfo>{ plant.plantName }</EachPlantInfo>
          <EachPlantInfo>{ plant.otherName }</EachPlantInfo>
          <IdealLight>{ plant.idealLight }</IdealLight>
          <EachPlantWatering>{ plant.watering }</EachPlantWatering>
          <EachPlantInfo>{ plant.toleratedLight }</EachPlantInfo>
          <Stack direction="row" spacing={2} >
            <Button variant="contained" color="success" style={{margin: '10px', display: "flex"}}
            id={plant.id} onClick={(e) => removePlant(e)} >
              DELETE
            </Button>
          </Stack>
        </EachPlant>
       ))
      }
    </div>
  )
}

const Headers = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-left: 10px;
  text-align: center;
  font-size: 15px;
`;
const EachPlant = styled.div`
  display: flex;
  margin: 20px;
  border-top: 2px solid;
  text-align: center;
`;
const EachPlantInfo = styled.div`
  width: 8%;
  margin: 20px;
`;
const IdealLight = styled.div`
  width: 30%;
  margin: 20px;

`;
const EachPlantWatering = styled.div`
  width: 35%;
  margin: 20px;
`;

export default MyPlants;

