import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MyPlants = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    // console.log('plants?', plants)
    fetch('/dbPlants')
    .then((res) => res.json())
    .then((results) => {
      // console.log('results?', results)
      setData(results);
    })
  }

  return (
    <div>
      <div>my plants!!!</div>
      {!data
      ? <h2>Add some Plants!</h2>
      : data.map((plant, i) =>
        <EachPlant key={i}>
          <EachPlantInfo>{ plant.common[0] }</EachPlantInfo>
          <EachPlantInfo>{ plant.common[1] }</EachPlantInfo>
          <IdealLight>{ plant.ideallight }</IdealLight>
          <EachPlantWatering>{ plant.watering }</EachPlantWatering>
          <EachPlantInfo>{ plant.toleratedlight }</EachPlantInfo>
          <Stack direction="row" spacing={2} >
            <Button variant="contained" color="success" style={{margin: '10px', display: "flex"}} >
              Add
            </Button>
          </Stack>
        </EachPlant>
       )
      }
    </div>
  )
}

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

