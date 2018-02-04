import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import CardContainer from '../CardContainer/CardContainer';
import './Main.css';

const Main = ({film, people, vehicles, planets, onFavClick, favorites}) => {
  return (
    <main>
      <div className='card-box'>
      <Switch>
        <Route exact path='/' render={() => (<Welcome film={film} />)} />
        <Route path='/people' render={() => (<CardContainer data={people} type='people' onFavClick={onFavClick} favorites={favorites} />)} />
        <Route path='/vehicles' render={() => (<CardContainer data={vehicles} type='vehicles' onFavClick={onFavClick} favorites={favorites}/>)} />
        <Route path='/planets' render={() => (<CardContainer data={planets} type='planets' onFavClick={onFavClick} favorites={favorites} />)} />
        <Route path='/favorites' render={() => (<CardContainer data={favorites} type='favorites' onFavClick={onFavClick} favorites={favorites} />)} />
      </Switch>
      </div>
    </main>
  )
}

export default Main;