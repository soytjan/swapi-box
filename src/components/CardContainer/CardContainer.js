import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({data, type}) => {
  let renderedCards;
  // why isn't the else block rendering? 
  if(data) {
    renderedCards = data.map((info, index) => {
      return <Card info={info} type={type} key={`${index}${Date.now()}`} />
    })
  } else {
    renderedCards = (
      <div>
       LOADING...
      </div>
    )  
  }
  console.log(data);

  return(
    <section className="card-container">
      I'm a CardContainer
      {renderedCards}
    
    </section>
  )
}

export default CardContainer;