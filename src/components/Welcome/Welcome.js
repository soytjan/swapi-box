import React from 'react';
import PropTypes from 'prop-types';
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

Welcome.propTypes = {
  onClick: PropTypes.func,
};

Welcome.propTypes = {
  film: PropTypes.object,
};

export default Welcome;