import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<LoginPage></LoginPage>}></Route>
        <Route path='/signup' element={<SignupPage></SignupPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
