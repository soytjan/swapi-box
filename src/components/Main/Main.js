import React from 'react';
import { Switch, Route } from 'react-router-dom';
import People from '../People/People';
import Welcome from '../Welcome/Welcome';
import Vehicles from '../Vehicles/Vehicles';
import Planets from '../Planets/Planets';
import Favorites from '../Favorites/Favorites';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' render={() => (<Welcome />)} />
        <Route path='/people' render={() => (<People />)} />
        <Route path='/vehicles' render={() => (<Vehicles />)} />
        <Route path='/planets' render={() => (<Planets />)} />
        <Route path='/favorites' render={() => (<Favorites />)} />
      </Switch>
    </main>
  )
}

export default Main;