import React from 'react';
import { Route} from 'react-router-dom';
import HomePage from './components/home_page';
import IncubatorIndex from './components/incubator';
import NavBar from './components/nav_bar';
import StartUp from './components/start_up';


const App = () => (
  <div className='app'>
    <NavBar />
    <Route exact path='/' component={HomePage} />
    <Route exact path='/incubator' component={IncubatorIndex} />
    <Route exact path='/incubator/:startUpId' component={StartUp} />

  </div>
)

export default App;