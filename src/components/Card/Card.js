import React from 'react';
import './Card.css';

const Card = ({info, type, onFavClick, isFavorited}) => {
  const attributes = Object.keys(info).filter((attr) => attr !== 'name');
  const klass = `card ${type} ${isFavorited}`
  const listItems = attributes.map((attr, index) => {
    let value = info[attr];
    if (typeof value === 'object') {
      value = value.join(', ');
    }

    return <li key={index}>{attr}: <span className='attr'>{value}</span></li>
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

export default Card;