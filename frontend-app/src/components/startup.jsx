import React from 'react';
import '../styling/startup.css'
import { Link } from 'react-router-dom';
const incData = require('../data/incubator.json');
const upcomingData = require('../data/upcoming.json');

class StartUp extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    let startUp;
    let length = incData.length > upcomingData.length ? incData.length : upcomingData.length;
    for(let i = 0; i < length; i++){
      if (incData[i]){
        if(incData[i].id === this.props.match.params.startUpId) {
          startUp = incData[i];
          break;
        }
      }
      if(upcomingData[i]) {
        if(upcomingData[i].id === this.props.match.params.startUpId) {
          startUp = upcomingData[i];
          break;
        }
      }
    }

    this.setState(startUp)
  }

  render(){
    // debugger
    const {name, brief, about, vision, teamsize, team, founded, website, location, tags} = this.state;
    let teamSection; 
    if (team){
      teamSection = team.map(member => (
            <p>{member}</p>
          )) 
    }
    let tagSection;
    if(tags){
      tagSection = tags.map(tag => (
          <button>{tag}</button>
        ))
    }
    return(
      <div className='startup'>
        <div className='s-container'>
          <div className='s-header'>
            <div>
              <button>Back</button>
              <div>{name}</div>
            </div>
            <div>
              <button>Fund Startup</button>
            </div>
          </div>
          <div className='start-main'>
            <div className='s-sidebar'>
              <div>{founded}</div>
              <hr className="Solid" />
              <div style={{'font-size': '22px'}}>
                <h1>Website</h1>
                <a href="`https://${website}`" style={{'textDecoration': 'none', 'color': 'blue'}}>{website}</a>
              </div>
              <div style={{'font-size': '22px'}}>
                <h1>Location</h1>
                {location}
              </div>
              <div style={{'font-size': '22px'}}>
                <h1>Team Size</h1>
                {teamsize}
              </div>
              <hr className="Solid" />
              <div>
                <h1>Meet the team</h1>
                {/* {team.map(member => (
                  <h1>{member}</h1>
                ))} */}
                {teamSection}
              </div>
              <hr className="Solid" />
              <div>
                <h1>Tags</h1>
                {tagSection}
              </div>
            </div>
            <div style={{'overflow': 'auto'}}>
              <div className='s-about'>
                <div>
                  <h1>About startup</h1>
                  <div>{about}</div>
                </div>
                <hr className="Solid" />
                <div>
                  <h1>Vision</h1>
                  <div>{vision}</div>
                </div>
              </div>
              <div className='s-footer'>
                <h1>Related startups</h1>
                <div className='related-cont'>
                  {incData.map(startUp => {
                    return (
                      <Link key={startUp.id} to={`/incubator/${startUp.id}`}>
                        <div className="related-item">
                          <h1>{startUp.name}</h1>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StartUp;