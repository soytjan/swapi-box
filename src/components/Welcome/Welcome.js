import React from 'react';
import PropTypes from 'prop-types';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import './Welcome.css';

const Welcome = ({film}) => {
  return (
    <div className='welcome'>
      <ScrollContainer {...film} />
    </div>
  );
};

Welcome.propTypes = {
  film: PropTypes.object
};

export default Welcome;