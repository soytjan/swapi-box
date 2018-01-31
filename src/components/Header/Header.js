import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1>SWAPI box</h1>
      <button><NavLink to='/favorites'>Favorites</NavLink></button>
    </div>
  )
}

export default Header;