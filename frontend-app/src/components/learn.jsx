import React from 'react';
import '../styling/learn.css';

class Learn extends React.Component{

  render(){
    return(
      <div className='learn-page'>
        <div className='learn-intro'>
          <div className='learn-left'>
            <img src="https://img.icons8.com/dusk/300/000000/globe-earth.png"/>
          </div>
          <div className='learn-right'>
              <p>Learn high in demand IT Skills & Get Crypto</p>
              <p>powered by <font color='black'>KoinStreet</font></p>
          </div>
        </div>
        <div className='learn-main'>

        </div>
      </div>
    )
  }
}

export default Learn;