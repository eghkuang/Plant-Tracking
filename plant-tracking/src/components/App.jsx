import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import AllPlants from './AllPlants';
import MyPlants from './MyPlants';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        allPlants: [],
        currentPlant: ''
    };
  }

  componentDidMount () {
      this.allPlants();
      this.onePlant();
  }

  allPlants () {
    axios.get('http://localhost:4000/allPlants')
      .then((res) => {
        // console.log('res?', res);
        var list = [];
        // eslint-disable-next-line array-callback-return
        res.data.map((plant) => {
            list.push({
              name: plant.common[0],
              idealLight: plant.ideallight,
              toleratedLight: plant.toleratedlight,
              watering: plant.watering,
              tempMax: plant.tempmax,
              tempMin: plant.tempmin,
              latin: plant.latin,
              family: plant.family,
              category: plant.category,
              diseases: plant.diseases,
              origin: plant.origin,
              common: plant.common,
              insects: plant.insects
            }
          );
        });
        // console.log('list?', list)
        this.setState({
          allPlants: list
        });
    });
  }

  onePlant() {
    axios.get('http://localhost:4000/onePlant')
      .then((res) => {
        // console.log('res?????', res);
        // console.log('RES 0?', res.data[0].common[0]);
        this.setState({
          currentPlant: res.data[0].common[0]
        });
      });
    }

  render() {
    return (
      <div className="App">
          <Title>watering me softly with this song</Title>
          {/* <Pages>
            <OnePage>All Plants</OnePage>
            <OnePage>My Plants</OnePage>
          </Pages> */}
      <Router>
        <Pages>
          <Link to="/">Home</Link>
          <Link to="/myplants">My Plants</Link>
          <Link to="/allplants">All Plants</Link>
        </Pages>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/myplants" element={<MyPlants />} />
          <Route path="/allplants" element={<AllPlants />} />

        </Routes>
      </Router>
      </div>

    );
  }
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
const OnePage = styled.p`
  margin-left: 15px;
  font-size: 10px
  text-align: center;
  cursor: pointer;
  &: hover {
    color: black;
    border-radius: 3px;
  };
`;

export default App;
