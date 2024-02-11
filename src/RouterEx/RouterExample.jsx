
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';

function ReactExample() {
  return (
    <Router>
      <div>
     
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        

        {/* Route Configuration */}
        <Routes>
          {/* Route for the Home component */}
          <Route path="/" exact component={Home} />

          {/* Route for the About component */}
          <Route path="/about" exact component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default ReactExample;
