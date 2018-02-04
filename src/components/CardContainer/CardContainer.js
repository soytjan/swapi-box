import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'

const CardContainer = ({data, type, onFavClick, favorites}) => {
  let renderedCards;
  
  if (type === 'favorites' && data.length === 0) {
    renderedCards = (<p>You have no favorites selected!</p>)
  } else if (data.length === 0) {
    renderedCards = (<div>Loading...</div>)
  } else {
    renderedCards = data.map((info, index) => {
      const isFavorited = favorites.includes(info) ? 'favorited' : '';
    
      return <Card info={info} type={type} isFavorited={isFavorited} onFavClick={onFavClick} key={`${index}${Date.now()}`} />
    })
  }

  return(
    <section className="card-container">
      <h2>{type}</h2>
      {renderedCards}
    
    </section>
  )
}

export default CardContainer;