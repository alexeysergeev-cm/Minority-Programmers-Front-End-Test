import React from 'react';
import '../styling/startup.css'
const incData = require('../data/incubator.json');

class StartUp extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    let startUp;
    for(let i = 0; i < incData.length; i++){
      if(incData[i].id === this.props.match.params.startUpId) {
        startUp = incData[i];
        break;
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
            <h1>{member}</h1>
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
            </div>
            <div>{name}</div>
            <div>
              <button>Fund Startup</button>
            </div>
          </div>
          <div className='s-sidebar'>
            <div>{founded}</div>
            <hr className="Solid" />
            <div>
              <h1>Website</h1>
              {website}
            </div>
            <div>
              <h1>Location</h1>
              {location}
            </div>
            <div>
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
          <div className='s-main'>

          </div>
          <div className='s-footer'>

          </div>
        </div>
      </div>
    )
  }
}

export default StartUp;