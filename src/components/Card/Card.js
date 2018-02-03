import React from 'react';

const Card = ({info, type}) => {
  const keys = Object.keys(info).filter((key) => key !== 'name');
  const listItems = keys.map((key) => {
    let value = info[key];
    if (typeof value === 'object') {
      value = value.join(', ');
    }

    return <li>{key}: {value}</li>
  });

  return ( 
    <article className="card">
      <h4>{info.name}</h4>
      <ul>
        {listItems}
      </ul>
    </article>
  )
}

export default Card;