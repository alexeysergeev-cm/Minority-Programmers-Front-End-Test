import React from 'react';
import { Link } from "react-router-dom";
import '../styling/navbar.css';

const NavBar = () => (
  <div className='nav-bar'>
    <div className='left-nav'>
      <div className='logo'>
        <a href="https://minorityprogrammers.com/" target="_blank">
          <img style={{'width': '128px'}} src="https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg" />
        </a>
      </div>
      <div className='social'>
        <a href="https://alexeysergeev-cm.github.io/" target="_blank">
          <img src="https://img.icons8.com/ios/28/000000/resume-website.png"/>
        </a>
        <a href="https://github.com/alexeysergeev-cm" target="_blank">
          <img src="https://img.icons8.com/material-sharp/28/000000/github.png"/>
        </a>
        <a href="https://www.linkedin.com/in/alexey-sergeev-cm/" target="_blank">
          <img src="https://img.icons8.com/metro/26/000000/linkedin.png"/>
        </a>
      </div>
    </div>
    <div className='right-nav'>
      <div className='links'>
        <div >
          <Link to="/incubator">Incubator</Link>
        </div>
        <div>
          <Link to="/learn">Learn</Link>
        </div>
        <div>
          <Link to="/">Join</Link>
        </div>
      </div>
    </div>
  </div>
)

export default NavBar;