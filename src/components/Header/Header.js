import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({favCount}) => {
  return (
    <div className='header'>
      <h1>SWAPI box</h1>
      <div className='fav-box'>
        <button className='fav-btn'><NavLink to='/favorites'>Favorites</NavLink></button>
        <p>{favCount}</p>
      </div>
    </div>
  )
}

Header.propTypes = {
  favCount: PropTypes.number,
};

export default Header;