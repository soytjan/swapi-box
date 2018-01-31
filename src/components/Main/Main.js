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
        <Route exact path='/' component={Welcome} />
        <Route path='/people' component={People} />
        <Route path='/vehicles' component={Vehicles} />
        <Route path='/planets' component={Planets} />
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </main>
  )
}

export default Main;