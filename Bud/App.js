import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Addincome from './Addincome';
import Addexpense from './Addexpense';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for the Welcome page */}
          <Route path="/" element={<Welcome />} />
          
          {/* Route for the Add Income page */}
          <Route path="/Addincome" element={<Addincome />} />
          
          {/* Route for the Add Expense page */}
          <Route path="/Addexpense" element={<Addexpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
