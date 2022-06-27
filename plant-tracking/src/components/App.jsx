import axios from 'axios';
import React, { useState, useEffect } from 'react';
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


export default function App() {
  const [data, setData] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  // const [currentPlant, setCurrentPlant] = useState('');

  const getAllPlants = () => {
    axios.get('http://localhost:4000/allPlants')
      .then((res) => {
        // console.log('res?', res);
        var list = [];
        // eslint-disable-next-line array-callback-return
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
        // console.log('list?', list)
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
//  const onePlant = () => {
//     axios.get('http://localhost:4000/onePlant')
//       .then((res) => {
//         // console.log('res?????', res);
//         // console.log('RES 0?', res.data[0].common[0]);
//         this.setState({
//           currentPlant: res.data[0].common[0]
//         });
//       });
//     }


  useEffect(() => {
    getAllPlants();
    getMyPlants();
  }, [])

    return (
      <div className="App">
          <Title>watering me softly with these plants</Title>
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
          <Route path="/myplants" element={<MyPlants data={data} setData={setData} />} />
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

// class App extends React.Component {

//   constructor (props) {
//     super(props);
//     this.state = {
//         allPlants: [],
//         data: [],
//     };
//   }

//   allPlants () {
//     axios.get('http://localhost:4000/allPlants')
//       .then((res) => {
//         // console.log('res?', res);
//         var list = [];
//         // eslint-disable-next-line array-callback-return
//         res.data.map((plant) => {
//             list.push({
//               id: plant.id,
//               plantName: plant.common[0],
//               otherName: plant.common[1],
//               idealLight: plant.ideallight,
//               watering: plant.watering,
//               toleratedLight: plant.toleratedlight,
//               tempMax: plant.tempmax.fahrenheit,
//               tempMin: plant.tempmin.fahrenheit,
//               latin: plant.latin,
//               // family: plant.family,
//               // category: plant.category,
//               // diseases: plant.diseases,
//               // origin: plant.origin,
//               // common: plant.common,
//               // insects: plant.insects
//             }
//           );
//         });
//         // console.log('list?', list)
//         this.setState({
//           allPlants: list
//         });
//     });
//   }

//   onePlant() {
//     axios.get('http://localhost:4000/onePlant')
//       .then((res) => {
//         // console.log('res?????', res);
//         // console.log('RES 0?', res.data[0].common[0]);
//         this.setState({
//           currentPlant: res.data[0].common[0]
//         });
//       });
//     }

//   render() {
//     return (
//       <div className="App">
//           <Title>watering me softly with these plants</Title>
//           {/* <Pages>
//             <OnePage>All Plants</OnePage>
//             <OnePage>My Plants</OnePage>
//           </Pages> */}
//       <Router>
//         <Pages>
//           <Link to="/">Home</Link>
//           <Link to="/myplants">My Plants</Link>
//           <Link to="/allplants">All Plants</Link>
//         </Pages>

//         <Routes>
//           <Route path="/" exact element={<Home />} />
//           <Route path="/myplants" element={<MyPlants myPlants={this.state.data} />} />
//           <Route path="/allplants" element={<AllPlants plants={this.state.allPlants}/>} />

//         </Routes>
//       </Router>
//       </div>

//     );
//   }
// }

// const Title = styled.h1`
//   color: green;
//   text-align: center;
//   margin-top: 60px;
// `;
// const Pages = styled.h2`
//   display: flex;
//   margin-top: 60px;
//   color: green;
//   text-align: center;
//   max-width: auto;
//   justify-content: space-around;
//   align-items: center;
// `;
// const OnePage = styled.p`
//   margin-left: 15px;
//   font-size: 10px
//   text-align: center;
//   cursor: pointer;
//   &: hover {
//     color: black;
//     border-radius: 3px;
//   };
// `;

// export default App;
