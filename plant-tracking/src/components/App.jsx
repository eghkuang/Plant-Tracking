import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import AllPlants from './AllPlants.jsx'
import MyPlants from './MyPlants.jsx'

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
    axios.get('/allPlants')
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

  onePlant () {
    axios.get('/onePlant')
      .then((res) => {
        // console.log('res?', res);
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
        <Title>plant stuuuuff</Title>
        <Pages>
          <OnePage>All Plants</OnePage>
          <OnePage>My Plants</OnePage>
        </Pages>

        {/* <p>{this.state.currentPlant}</p> */}
        <MyPlants></MyPlants>
        <AllPlants plants={this.state.allPlants}></AllPlants>
      </div>
    );
  }
}

const Title = styled.h1`
  margin-left: 20px;
  color: green;
  text-align: center;
`;
const Pages = styled.h1`
  display: flex;
  margin-left: 15px;
  color: green;
  text-align: center;
`;
const OnePage = styled.p`
  margin-left: 15px;
  font-size: 10px
  text-align: center;
  cursor: pointer;
  &: hover {
    color: black;
    box-shadow: green 0px 0px 10px;
    border-radius: 3px;
  };
`;

export default App;
