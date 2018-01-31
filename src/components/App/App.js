import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
