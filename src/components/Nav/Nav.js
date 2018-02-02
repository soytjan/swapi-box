import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({onClick}) => {
  return (
    <nav>
      <div className='btn-box'>
      <button onClick={() => onClick('people')} className='btn-1'><NavLink to='/people'>People</NavLink></button>
      <button onClick={() => onClick('planets')} className='btn-2'><NavLink to='/planets'>Planets</NavLink></button>
      <button onClick={() => onClick('vehicles')} className='btn-3'><NavLink to='/vehicles'>Vehicles</NavLink></button>
      </div>  
    </nav>
  )
}

export default Nav;