import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({data, type}) => {
  // let renderedCards;
  // why isn't the else block rendering? 
  if(data) {
    let renderedCards = data.map((info, index) => {
      return <Card info={info} type={type} key={`${index}${Date.now()}`} />
    })
    return renderedCards
  } 
 
  return(
    // <section className="card-container">

    // </section>
    <div> LOADING...</div>
  )
}

export default CardContainer;