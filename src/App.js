import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<LoginPage></LoginPage>}></Route>
        <Route path='/signup' element={<SignupPage></SignupPage>}></Route>
        <Route path='/cart' element={<CartPage></CartPage>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/product-details' element={<ProductDetailPage></ProductDetailPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
