import React from 'react';
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

export default ScrollContainer;