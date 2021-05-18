import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './components/home_page';
import NavBar from './components/nav_bar';

const App = () => (
  <div className='app'>
    <NavBar />
    <Route exact path='/' component={HomePage} />

  </div>
)

export default App;