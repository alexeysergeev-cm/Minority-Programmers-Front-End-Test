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

    this.setState(course)
  }

  render(){
    return(
      <div className='course-page'>
        <div className='course-side'>

        </div>
        <div className='course-main'>
          <div className='course-head'>

          </div>
          <div className='course-info'>

          </div>
        </div>
      </div>
    )
  }
}

export default Course;