import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const subjects = [
    {
      name: 'Mathematics',
      units: ['Algebra', 'Geometry', 'Calculus']
    },
    {
      name: 'Science',
      units: ['Physics', 'Chemistry', 'Biology']
    },
    {
      name: 'History',
      units: ['Ancient', 'Medieval', 'Modern']
    }
  ];
const Ex3 = () => {

  return (
    <div>
       <Router>
      <div>
        <h1>Subject Navigation</h1>
    
          <ul>
            {subjects.map((subject, i) => (
              <li>
                <Link to={`/Subjects/${i}`}>{subject.name}</Link>
              </li>
            ))}
          </ul>
       
        <Routes>
        {subjects.map((subject, i) => (
          <Route path={`/Subjects/${i}`} element={<Unit units={subject.units} />} >
          </Route>
        ))}
        </Routes>
      </div>
    </Router>
    </div>
  )
};
const Unit = ({ units }) => {
    return (
      <div>
        <h2>Unit Names</h2>
        <ul>
          {units.map((unit) => (
            <li>{unit}</li>
          ))}
        </ul>
      </div>
    );
  };
export default Ex3
