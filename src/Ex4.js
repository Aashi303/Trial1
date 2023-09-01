import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Batch1 from './Components/Batch1';
import Batch2 from './Components/Batch2';
import Batch3 from './Components/Batch3';

const Ex4 = () => {
  return (
    <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Components/Batch1">Batch 1</Link>
            </li>
            <li>
              <Link to="/Components/Batch2">Batch 2</Link>
            </li>
            <li>
              <Link to="/Components/Batch3">Batch 3</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
        <Route path="/Components/Batch1" element={<Batch1/>} />
        <Route path="/Components/Batch2" element={<Batch2/>} />
        <Route path="/Components/Batch3" element={<Batch3/>} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default Ex4
