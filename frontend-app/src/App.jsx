import React from 'react';
import { Route} from 'react-router-dom';
import HomePage from './components/home_page';
import IncubatorIndex from './components/incubator';
import Learn from './components/learn';
import NavBar from './components/nav_bar';
import StartUp from './components/startup';
import Course from './components/course';

const App = () => (
  <div className='app'>
    <NavBar />
    <Route exact path='/' component={HomePage} />
    <Route exact path='/incubator' component={IncubatorIndex} />
    <Route exact path='/incubator/:startUpId' component={StartUp} />
    <Route exact path='/learn' component={Learn} />
    <Route exact path='/learn/:courseId' component={Course} />

  </div>
)

export default App;