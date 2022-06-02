import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Pages/Home';
import React, {useState, useEffect} from 'react';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import LogOut from './Components/Pages/LogOut';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/logout' element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
