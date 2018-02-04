import React from 'react';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import './Welcome.css';

const Welcome = ({film}) => {
  return (
    <div className='welcome'>
      I'm Welcome
      <ScrollContainer {...film} />
    </div>
  )
}

export default Welcome;