import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        allPlants: [],
        currentPlant: {}
    };
  }

  componentDidMount () {
      this.onePlant();
  }

  allPlants () {
    axios.get('/api/allPlants')
      .then((res) => {
        console.log('res?', res);
        var list = [];
        // eslint-disable-next-line array-callback-return
        res.data.map((plant) => {
            list.push(plant.common[0]);
        });
        this.setState({
            plants: list
        });
        console.log('list?', list)
    });
  }

  onePlant () {
    axios.get('/api/onePlant')
      .then((res) => {
        console.log('res?', res);
        this.setState({
            currentPlant: res.data
        });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>AHHHHH</h1>
        <Title>plant stuuuuff</Title>
        <div>{this.state.allPlants}</div>
      </div>
    );
  }
}

const Title = styled.h1`
  margin-left: 20px;
  color: #D8315B;
`;

export default App;
