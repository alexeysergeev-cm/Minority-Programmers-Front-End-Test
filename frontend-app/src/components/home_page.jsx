import React from 'react';
import '../reset.css';
import '../styling/homePage.css'

class HomePage extends React.Component {
  constructor(){
    super();

  }

  render(){
    return (
      <div className='home-page-container'>
        <div className='company-name'>
         <div>Minority</div>
         <div>Programmers</div>
         <div>Association</div>
        </div>
      </div>
    )
  }
}

export default HomePage;