import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({info, type, onFavClick, isFavorited}) => {
  const attributes = Object.keys(info).filter((attr) => attr !== 'name');
  const klass = `card ${type} ${isFavorited}`
  const listItems = attributes.map((attr, index) => {
    let value = info[attr];
    if (typeof value === 'object') {
      value = value.join(', ');
    }

    return <li key={index}><div className='attr'>{attr}:</div> <div className='value'> {value}</div></li>
  });

  return ( 
    <article className={klass}>
      <div className='card-header'>
        <h4>{info.name}</h4>
        <button onClick={() => onFavClick(info, isFavorited)} className='star-btn'></button>
      </div>
      <ul>
        {listItems}
      </ul>
    </article>
  )
}

Card.propTypes = {
  info: PropTypes.object,
  type: PropTypes.string,
  onFavClick: PropTypes.func,
  isFavorited: PropTypes.bool
};

export default Card;