import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardContainer.css'

const CardContainer = ({data, type, onFavClick, favorites}) => {
  let renderedCards;
  
  if (type === 'favorites' && data.length === 0) {
    renderedCards = (<p className='loading'>You have no favorites selected!</p>)
  } else if (data.length === 0) {
    renderedCards = (<div className='loading'>Loading...</div>)
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

CardContainer.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
  onFavClick: PropTypes.func,
  favorites: PropTypes.object,
};

export default CardContainer;