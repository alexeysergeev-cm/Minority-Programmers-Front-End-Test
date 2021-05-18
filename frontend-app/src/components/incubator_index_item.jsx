import React from 'react';

class IncubatorItem extends React.Component {

  render(){
    const {name, brief, about, vision} = this.props.startUp
    return (
      <div className='startup'>
        <div style={{'font-size': '22px'}}>{name}</div>
        <div>{brief}</div>
        <div className='s-btns'>
          <button>Fund Me</button>
          <button>Learn More</button>
        </div>
      </div>
    )
  }
}

export default IncubatorItem;