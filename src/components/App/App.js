import React, { Component } from 'react';
import './App.css';
import { getApiData } from '../../helper';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      favorites: [],
      films: {},
    }
  }

  componentDidMount() {
    // call getApiData(request);

    // run a random function on it

    // set state
  }

  // handleFilmRoute = async () => {
  //   const films = await getFilmData();
  //   const randNum = Math.floor(Math.random() * 7 + 1);

  //   this.setState({films: films[randNum]});
  // }

  // handlePeopleRoute = async () => {
  //   const people = await getPeopleData();

  //   this.setState({ people });
  // }

  // handleVehiclesRoute = async () => {
  //   const vehicles = await getVehiclesData();

  //   this.setState({ vehicles });
  // }

  // handlePlanetsRoute = async () => {
  //   const planets = await getPlanetsData();

  //   this.setState({ planets });
  // }

  handleNavClick = async (request) => {
    console.log('request', request);
    const data = await getApiData(request);

    this.setState({[request]: data});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav 
          onClick={this.handleNavClick} />
        <Main 
          people={this.state.people}
          vehicles={this.state.vehicles}
          planets={this.state.planets} />
      </div>
    );
  }
}

export default App;
