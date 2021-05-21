import React from 'react';
import '../styling/course.css';
const courses = require('../data/courses.json');

class Course extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    let course;

    for(let i = 0; i < courses.length; i++){
      if (courses[i]){
        if(courses[i].id === this.props.match.params.courseId) {
          course = courses[i];
          break;
        }
      }
    }
    // debugger
    this.setState(course)
  }

  render(){
    const { name, weeks } = this.state;
    // debugger

    let w;
    if(weeks){
      w = weeks.map((week, i) => {
        return( 
          <div>
            <div>Week {i+1}</div>
              {week.map((wModule,i) => {
                if(i === week.length - 1){
                  return (<p><img src="https://img.icons8.com/fluent/20/000000/checked-radio-button.png"/>{wModule}</p>)
                }
                return (<p><img src="https://img.icons8.com/flat-round/18/000000/checkmark.png"/>{wModule}</p>)
              })}
          </div>
        )
      })
    }

    return(
      <div className='course-page'>
        <div className='course-side'>
          <img src="https://img.icons8.com/carbon-copy/48/ffffff/left.png"/>
          <h2>{name}</h2>
          {w}
        </div>
        <div className='course-main'>
          <div className='course-head'>
            <div>
              <img src="https://img.icons8.com/emoji/144/000000/slightly-smiling-face.png"/>
            </div>
            <div>
              <p>Welcome Back, Helen</p>
              <button>Resume</button>
            </div>
          </div>
          <div className='course-info'>
            <div className='course-tags'>
              <div className='modules'>
                <h2>Modules</h2>
              </div>
              <div className='calendar'>
                <h2>Calendar</h2>
              </div>
              <div className='messages'>
                <h2>Messages</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Course;