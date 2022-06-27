import React, { useEffect } from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

// const MyPlants = () => {
const MyPlants = ({ data, setData }) => {
  console.log('data',data);

  // useEffect(() => {
  //   const fetchData = () => {
  //     // console.log('plants?', plants)
  //     axios.get('/dbPlants')
  //     .then((results) => {
  //       console.log('results.data?', results.data)
  //       console.log('results?', results)
  //       setData(results);
  //     })
  //     .catch((err) => {
  //       console.log('error', err)
  //     })
  //   }
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

  // const data = [
    // {
    //   id: 3,
    //   plantName: plant.common[0],
    //   otherName: plant.common[1],
    //   idealLight: plant.ideallight,
    //   watering: plant.watering,
    //   toleratedLight: plant.toleratedlight,
    //   tempMax: plant.tempmax.fahrenheit,
    //   tempMin: plant.tempmin.fahrenheit,
    //   latin: plant.latin,
    // },
    // {
    //   id: 1,
    //   plantName: plant.common[0],
    //   otherName: plant.common[1],
    //   idealLight: plant.ideallight,
    //   watering: plant.watering,
    //   toleratedLight: plant.toleratedlight,
    //   tempMax: plant.tempmax.fahrenheit,
    //   tempMin: plant.tempmin.fahrenheit,
    //   latin: plant.latin,
    // },
    // {
    //   id: 4,
    //   plantName: plant.common[0],
    //   otherName: plant.common[1],
    //   idealLight: plant.ideallight,
    //   watering: plant.watering,
    //   toleratedLight: plant.toleratedlight,
    //   tempMax: plant.tempmax.fahrenheit,
    //   tempMin: plant.tempmin.fahrenheit,
    //   latin: plant.latin,
    // }
  // ]

  return (
    <div>
      <Headers>
        <EachPlantInfo>Plant No.</EachPlantInfo>
        <EachPlantInfo>Name</EachPlantInfo>
        <EachPlantInfo>Alternate Name</EachPlantInfo>
        <IdealLight>Ideal Light</IdealLight>
        <EachPlantWatering>Watering</EachPlantWatering>
        <EachPlantInfo>Tolerated Light</EachPlantInfo>
        <EachPlantInfo>Add to Favorites</EachPlantInfo>
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
            <Button variant="contained" color="success" style={{margin: '10px', display: "flex"}} >
              Add
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

