import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>SWAPI box</h1>
      <button><NavLink to='/favorites'>Favorites</NavLink></button>
    </div>
  )
}

export default Header;