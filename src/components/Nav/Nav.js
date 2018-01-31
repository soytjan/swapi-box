import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <button><NavLink to='/people'>People</NavLink></button>
        <button><NavLink to='/planets'>Planets</NavLink></button>
        <button><NavLink to='/vehicles'>Vehicles</NavLink></button>
      </nav>
    )
  }
}

export default Nav;