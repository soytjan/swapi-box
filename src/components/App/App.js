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
    }
  }

  handleNavClick = async (request) => {
    console.log('clicked');
    console.log(request);
    console.log(this);
    const data = await getApiData(request);

    this.setState({[request]: data});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav onClick={this.handleNavClick}/>
        <Main />
      </div>
    );
  }
}

export default App;
