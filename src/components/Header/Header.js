import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Header>
      <h1>SWAPI box</h1>
      <button><NavLink to='/favorites'>Favorites</NavLink></button>
    </Header>
  )
}

export default Header;