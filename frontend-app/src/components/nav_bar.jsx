import React from 'react';
import '../styling/navbar.css';
import { Route } from 'react-router';

const NavBar = () => (
  <div className='nav-bar'>
    <div className='logo'>
      <a href="https://minorityprogrammers.com/">
        <img style={{'width': '128px'}} src="https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg" />
      </a>
    </div>
    <div className='social'>
      <a href="https://alexeysergeev-cm.github.io/">
        <img src="https://img.icons8.com/fluent-systems-filled/48/000000/portfolio.png"/>
      </a>
      <a href="https://github.com/alexeysergeev-cm">
        <img src="https://img.icons8.com/windows/32/000000/github-squared.png"/>
      </a>
      <a href="https://www.linkedin.com/in/alexey-sergeev-cm/">
        <img src="https://img.icons8.com/metro/26/000000/linkedin.png"/>
      </a>
    </div>
    <div className='links'>
      <a href="/incubator">Incubator</a>
      <a href="/learn">Learn</a>
      <a href="/">Join</a>
    </div>
  </div>
)

export default NavBar;