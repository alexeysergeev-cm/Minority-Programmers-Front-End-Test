import React from 'react';
import '../styling/incubator.css';
import { Link } from 'react-router-dom';
import IncubatorItem from './incubator_index_item';

const upcomingData = require('../data/upcoming.json');
const incData = require('../data/incubator.json');


class IncubatorIndex extends React.Component{
  constructor(){
    super();
  }

  render(){
    let str = "<Code/>"
    return(
      <div className='incubator-container'>
        <div className='preview'>
          <div></div>
          <span>
            <h1>Invest directly into minority innovations.</h1>
            <button>View Startups</button>
          </span>
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
                <p>Advice a startup</p>
            </div>
            <div className='ele2'>
                <p>Join Minority Ventures Cohort</p>
            </div>
            <div className='ele3'>
                <p>Help {str}</p>
            </div>
          </div>
          <div className='upcoming'>
            <div className='u-index-container'>
            <div className='u-desc'>
              <h1>Upcoming Startups</h1>
              <p>These visionary companies and disruptors are on their journey to change the world</p>
            </div>
                {upcomingData.map(startUp => {
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
        </div>
      </div>
    )
  }
}

export default IncubatorIndex;

