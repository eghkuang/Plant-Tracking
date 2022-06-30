import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AllPlants from './AllPlants';
import MyPlants from './MyPlants';
import Home from './Home';
import background from './background.jpg'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  const [data, setData] = useState([]);
  const [allPlants, setAllPlants] = useState([]);

  const getAllPlants = () => {
    axios.get('http://localhost:4000/allPlants')
      .then((res) => {
        var list = [];
        res.data.map((plant) => {
            list.push({
              id: plant.id,
              plantName: plant.common[0],
              otherName: plant.common[1],
              idealLight: plant.ideallight,
              watering: plant.watering,
              toleratedLight: plant.toleratedlight,
              tempMax: plant.tempmax.fahrenheit,
              tempMin: plant.tempmin.fahrenheit,
              latin: plant.latin,
            }
          );
        });
        setAllPlants(list);
    });
  }

  const getMyPlants = () => {
    axios.get('/dbPlants')
      .then((res) => {
        console.log('get my plants? res?', res.data)
        setData(res.data);
      })
      .catch((err) => {
        console.log('err!!', err)
      })
  }

  useEffect(() => {
    getAllPlants();
    getMyPlants();
  }, [])


    return (
      <div className="App">
      <div style={{
        backgroundImage: `url(${background})`
      }}>
        </div>
      <Title>howdy I'm thirsty</Title>
      <Router>
        <Pages>
          <Link to="/">Home</Link>
          <Link to="/myplants">My Plants</Link>
          <Link to="/allplants">All Plants</Link>
        </Pages>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/myplants" element={<MyPlants data={data} />} />
          <Route path="/allplants" element={<AllPlants allPlants={allPlants}/>} />

        </Routes>
      </Router>
      </div>

    );

}

const Title = styled.h1`
  color: green;
  text-align: center;
  margin-top: 60px;
`;
const Pages = styled.h2`
  display: flex;
  margin-top: 60px;
  color: green;
  text-align: center;
  max-width: auto;
  justify-content: space-around;
  align-items: center;
`;