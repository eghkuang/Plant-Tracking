import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
// import Pagination from './Pagination.jsx';
import './AllPlants.css';

// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

const PER_PAGE = 10;

const AllPlants = ({ allPlants }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    // console.log('allPlants?', allPlants)
    fetch('http://localhost:4000/allPlants')
    .then((res) => res.json())
    .then((results) => {
      // console.log('results?', results)
      setData(results);
    })
  }

  function handlePageClick({ selected: selectedPage }) {
    console.log('selected page', selectedPage);
    setCurrentPage(selectedPage);
  }

  function handleAdd(e) {
    e.preventDefault();
    let id = e.target.getAttribute("id");
    // console.log('hello', e.target.getAttribute('id'));
    console.log('plants', allPlants);
    console.log('PLANT', allPlants[id]);
    // console.log('allPlantsS', allPlants);
    axios.post('/dbPlants', allPlants[id])
      .then((response) => {
        console.log('response data:', response);
      })
      .catch((err) => {
        console.log('submit err:', err);
      })
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((plant, i) =>
      <EachPlant key={i}>
        <EachPlantInfo>{ plant.id + 1 }</EachPlantInfo>
        <EachPlantInfo>{ plant.common[0] }</EachPlantInfo>
        <EachPlantInfo>{ plant.common[1] }</EachPlantInfo>
        <IdealLight>{ plant.ideallight }</IdealLight>
        <EachPlantWatering>{ plant.watering }</EachPlantWatering>
        <EachPlantInfo>{ plant.toleratedlight }</EachPlantInfo>
        <Stack direction="row" spacing={2} >
          <Button variant="contained" color="success" id={plant.id} onClick={(e) => handleAdd(e)}style={{margin: '10px', display: "flex"}} >
            Add
          </Button>
        </Stack>
      </EachPlant>
     );

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="plantlist">

      {/* <Pagination platData={plants} ></Pagination> */}
      <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      <Headers>
        <EachPlantInfo>Plant No.</EachPlantInfo>
        <EachPlantInfo>Name</EachPlantInfo>
        <EachPlantInfo>Alternate Name</EachPlantInfo>
        <IdealLight>Ideal Light</IdealLight>
        <EachPlantWatering>Watering</EachPlantWatering>
        <EachPlantInfo>Tolerated Light</EachPlantInfo>
        <EachPlantInfo>Add to Favorites</EachPlantInfo>
      </Headers>
      {currentPageData}
      {/* <PaginateContainer> */}
        {/* <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        /> */}
      {/* </PaginateContainer> */}
{/*
      <div>
        {plants.map((plant, i) => {
          // console.log('hello?');
          return (
            <EachPlant key={i}>
              <EachPlantInfo>{ plant.name }</EachPlantInfo>
              <EachPlantInfo>{ plant.common[1] }</EachPlantInfo>
              <IdealLight>{ plant.idealLight }</IdealLight>
              <EachPlantWatering>{ plant.watering }</EachPlantWatering>
              <EachPlantInfo>{ plant.toleratedLight }</EachPlantInfo>
              <Stack direction="row" spacing={2} >
                <Button variant="contained" color="success" style={{margin: '10px', display: "flex"}} >
                  Add
                </Button>
              </Stack>
            </EachPlant>
          )
        })}
      </div> */}
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
// const PaginateContainer = styled.div`
//   display: flex;
//   cursor: pointer;
// `;

export default AllPlants;