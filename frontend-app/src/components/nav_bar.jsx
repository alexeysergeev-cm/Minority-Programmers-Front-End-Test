import React from 'react';
import '../styling/navbar.css';

const NavBar = () => (
  <div className='nav-bar'>
    <div className='left-nav'>
      <div className='logo'>
        <a href="https://minorityprogrammers.com/">
          <img style={{'width': '128px'}} src="https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg" />
        </a>
      </div>
      <div className='social'>
        <a href="https://alexeysergeev-cm.github.io/">
          <img style={{'height': '35px'}} src="https://img.icons8.com/fluent-systems-filled/48/000000/portfolio.png"/>
        </a>
        <a href="https://github.com/alexeysergeev-cm">
          <img style={{'height': '40px'}} src="https://img.icons8.com/windows/32/000000/github-squared.png"/>
        </a>
        <a href="https://www.linkedin.com/in/alexey-sergeev-cm/">
          <img src="https://img.icons8.com/metro/26/000000/linkedin.png"/>
        </a>
      </div>
    </div>
    <div className='right-nav'>
      <div className='links'>
        <div >
          <a href="/incubator">Incubator</a>
        </div>
        <div>
          <a href="/learn">Learn</a>
        </div>
        <div>
          <a href="/">Join</a>
        </div>
      </div>
    </div>
  </div>
)

export default NavBar;