import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Pages/Home';
import React from 'react';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import LogOut from './Components/Pages/LogOut';
import BlogDetails from './Components/BlogDetails';
import CreateBlog from './Components/CreateBlog';
import CreatePost from './Components/CreatePost';
import EditPost from './Components/EditPost';

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
          <Route exact path='/blogs/:id' element={<BlogDetails />} />
          <Route exact path='/blogs/create' element={<CreateBlog />} />
          <Route exact path='/posts/create' element={<CreatePost />} />
          <Route exact path='/posts/edit' element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
