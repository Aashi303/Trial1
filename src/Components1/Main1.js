import React,{useState} from 'react'
import{BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home1 from './Home1';
import About from './About';
const Main1 = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const handlePageChange = (page) => {
      setCurrentPage(page);
    }
  return (
    <div>
    <Router>
    
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => handlePageChange('home')}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => handlePageChange('about')}>About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route exact path="/" element={<Home1/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
        <div>
          <p>Current Page: {currentPage}</p>
        </div>
      
    </Router>
    </div>
  )
};

export default Main1
