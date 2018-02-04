import React from 'react';
import './Card.css';

const Card = ({info, type, onFavClick, isFavorited}) => {
  const keys = Object.keys(info).filter((key) => key !== 'name');
  const klass = `card ${type} ${isFavorited}`
  const listItems = keys.map((key) => {
    let value = info[key];
    if (typeof value === 'object') {
      value = value.join(', ');
    }

    return <li>{key}: <span className='attr'>{value}</span></li>
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