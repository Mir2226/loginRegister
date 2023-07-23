import React from 'react';
import Login from './view/pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './view/pages/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;