import React from 'react';
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './view/pages/login';
import Register from './view/pages/register';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    {/* Add more routes if needed */}
    </BrowserRouter>
      
   

  );
};

export default App;
