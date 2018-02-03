import React from 'react';
import { Switch, Route } from 'react-router-dom';
import People from '../People/People';
import Welcome from '../Welcome/Welcome';
import CardContainer from '../CardContainer/CardContainer';
import './Main.css';

const Main = ({people, vehicles, planets}) => {
  return (
    <main>
      <div className='card-box'>
      <Switch>
        <Route exact path='/' render={() => (<Welcome />)} />
        <Route path='/people' render={() => (<CardContainer data={people}/>)} />
        <Route path='/vehicles' render={() => (<CardContainer data={vehicles} />)} />
        <Route path='/planets' render={() => (<CardContainer data={planets} />)} />
        <Route path='/favorites' render={() => (<CardContainer />)} />
      </Switch>
      </div>
    </main>
  )
}

export default Main;