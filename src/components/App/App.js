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
      film: {}
    };
  }

  componentDidMount = async () => {
    const films = await getApiData('films');

    this.setState({ films });
    this.getRandomFilm();
  }

  // pass down this function so that you can click SWAPI box and go back to the home page
  getRandomFilm = async () => {
    const films = this.state.films;
    const randNum = Math.floor(Math.random() * 7);
    const film = films[randNum];

    this.setState({ film });
  }

  handleNavClick = async (request) => {
    if(this.state[request].length === 0) {
      const swData = await getApiData(request);

      this.setState({[request]: swData});
    }
  }

  handleFavClick = (card, isFavorited) => {
    if (isFavorited) {
      this.removeFavs(card);
    } else {
      this.addFavs(card);
    }
  }

  addFavs(card) {
    const favorites = [...this.state.favorites, card];

    this.setState({ favorites });
  }

  removeFavs(card) {
    const favorites = this.state.favorites.filter(favThing => 
      (favThing.name !== card.name));

    this.setState({ favorites });
  }

  render() {
    return (
      <div className="App">
        <Header 
          favCount={this.state.favorites.length}
        />
        <Nav 
          onClick={this.handleNavClick} />
        <Main
          film={this.state.film} 
          people={this.state.people}
          vehicles={this.state.vehicles}
          planets={this.state.planets}
          onFavClick={this.handleFavClick}
          favorites={this.state.favorites}
        />
      </div>
    );
  }
}

export default App;
