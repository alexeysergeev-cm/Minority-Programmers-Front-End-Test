import React from 'react'
import '../styling/incubator.css'

class IncubatorIndex extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className='incubator-container'>
        <div className='preview'>
          <h1>Invest directly into minority innovations</h1>
          <button>View Startups</button>
        </div>
        <div className='incubator-index'>
          <div>Main Index</div>
        </div>
      </div>
    )
  }
}

export default IncubatorIndex;

