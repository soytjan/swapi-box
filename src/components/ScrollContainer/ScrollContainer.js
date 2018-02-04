import React from 'react';
import PropTypes from 'prop-types';
import './ScrollContainer.css';

const ScrollContainer = ({title, crawl, releaseDate }) => {
  return (
    <div>
    <div className="fade"></div>
    <div className='scroll-container'>
      <div className='scroll-text'> 
        <p>
          {crawl}
        </p>
        <h3>{title}</h3>
        <h4>{releaseDate}</h4>
      </div>
    </div>
    </div>
  )
}

ScrollContainer.propTypes = {
  title: PropTypes.string,
  crawl: PropTypes.string,
  releaseDate: PropTypes.string,
};

export default ScrollContainer;