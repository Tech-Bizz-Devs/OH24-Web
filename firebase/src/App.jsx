// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import Routes
import Register from './Register';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap your Routes with the Routes element */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
