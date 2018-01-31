import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAPIbox</h1>
        </header>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
