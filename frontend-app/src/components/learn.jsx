import React from 'react';
import '../styling/learn.css';
import { Link } from 'react-router-dom';

const Courses = require("../data/courses.json");

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
          <div className='learn-search'>
            <div>
              <input type="text" />
              <button>Filter Search</button>
            </div>
          </div>
          {/* <hr className='Solid'/>
          <p>My Courses</p> */}
          <div className='break'>
            <span>My Courses</span>
            <h2></h2>
            <img src="https://img.icons8.com/carbon-copy/48/ffffff/left.png"/>
            <img src="https://img.icons8.com/carbon-copy/48/ffffff/right.png"/>
          </div>
          <div className='my-courses'>
            {Courses.map(course => {
              return(
                <Link key={course.id} to={`/learn/${course.id}`}>
                  <div>
                    {course.name}
                  </div>
                  <div>
                    {course.brief}
                  </div>
                </Link>
              )
            })}
          </div>
          <div className='break'>
            <span>Featured Courses</span>
            <h2></h2>
            <img src="https://img.icons8.com/carbon-copy/48/ffffff/left.png"/>
            <img src="https://img.icons8.com/carbon-copy/48/ffffff/right.png"/>
          </div>
          <div className='featured-courses'>
            {Courses.map(course => {
              return(
                <Link key={course.id} to={`/learn/${course.id}`}>
                  <div>
                    {course.name}
                  </div>
                  <div>
                    {course.brief}
                  </div>
                </Link>
              )
            })}
          </div>
          <div className='learn-load'>
            <button>Load More</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Learn;