import React from 'react';
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
    const {name, brief, about, vision} = this.state;
    return(
      <div className='startup'>
        <div className='s-header'>
          <button>Back</button>
          <div>{name}</div>
        </div>
        <div className='s-sidebar'>

        </div>
        <div className='s-main'>

        </div>
        <div className='s-footer'>

        </div>
      </div>
    )
  }
}

export default StartUp;