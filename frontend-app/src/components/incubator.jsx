import React from 'react';
import '../styling/incubator.css';
import { Link } from 'react-router-dom';
import IncubatorItem from './incubator_index_item';
import '../reset.css';

const incData = require('../data/incubator.json');


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
          <div className='featured'>
            <div className='f-desc'>
              <h1>Featured Startups</h1>
              <p>Invest in the next billion dollar company today</p>
            </div>
            <div className='f-index-container'>
                {incData.map(startUp => {
                  return (
                    <Link key={startUp.id} to={`/incubator/${startUp.id}`}>
                      <div>
                        <IncubatorItem 
                          startUp={startUp} 
                        />
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>
          <div className='mid-section'>
            <div className='ele1'>

            </div>
            <div className='ele2'>

            </div>
            <div className='ele3'>

            </div>
          </div>
          <div className='upcoming'>
            <div className='u-desc'>

            </div>
            <div className='u-index-container'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IncubatorIndex;

