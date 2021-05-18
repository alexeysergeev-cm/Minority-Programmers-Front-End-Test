import React from 'react';
import { Route} from 'react-router-dom';
import HomePage from './components/home_page';
import IncubatorIndex from './components/incubator';
import NavBar from './components/nav_bar';

const App = () => (
  <div className='app'>
    <NavBar />
    <Route exact path='/' component={HomePage} />
    <Route exact path='/incubator' component={IncubatorIndex} />
  </div>
)

export default App;