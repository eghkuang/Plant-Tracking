import React from 'react';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const AllPlants = ({ data }) => {
  return (
    <div className="plantlist">
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        searchplants="true"
        id="searchbar-for-plants"
        disableClearable
        options={data.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
      <Headers>
        <EachPlantInfo>Name</EachPlantInfo>
        <EachPlantInfo>Alternate Name</EachPlantInfo>
        <IdealLight>Ideal Light</IdealLight>
        <EachPlantWatering>Watering</EachPlantWatering>
        <EachPlantInfo>Tolerated Light</EachPlantInfo>
      </Headers>
          {/* {console.log('aaaghhhh',this.state.allPlants)} */}
      <div>
        {data.map((plant, i) => {
          // console.log('hello?');
          return (
            <EachPlant key={i}>
              <EachPlantInfo>{ plant.name }</EachPlantInfo>
              <EachPlantInfo>{ plant.common[1] }</EachPlantInfo>
              <IdealLight>{ plant.idealLight }</IdealLight>
              <EachPlantWatering>{ plant.watering }</EachPlantWatering>
              <EachPlantInfo>{ plant.toleratedLight }</EachPlantInfo>
            </EachPlant>
          )
        })}
      </div>
    </div>
  )
}


const Headers = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  flex: 0 0 auto;
  text-align: center;
  font-size: 15px;
`;
const EachPlant = styled.div`
  display: flex;
  margin-left: 20px;
  border-top: 2px solid;
  margin-bottom: 20px;
  text-align: center;
`;
const EachPlantInfo = styled.div`
  width: 15%;
`;
const IdealLight = styled.div`
  width: 25%;
`;
const EachPlantWatering = styled.div`
  width: 40%;
`;


export default AllPlants;