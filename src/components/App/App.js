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
      films: [],
    }
  }

  componentDidMount() {
    // call getApiData(request);

    // run a random function on it

    // set state
  }

  chooseRandFilmCrawl(films) {
    // gen rand number between 0-6
    // return random film crawl
  }

  handleNavClick = async (request) => {
    console.log('request', request);
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
