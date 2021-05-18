import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './components/home_page';

const App = () => (
  <div className='app'>
    <Route exact path='/' component={HomePage} />

  </div>
)

export default App;