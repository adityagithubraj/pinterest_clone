// App.jsx
import React from 'react';
import Nav from './components/Nav';
import Signup from './components/Signup'; 
import Signin from './components/Signin';
import Profile from './components/Profile'; 
import Home from './components/Home';
import Createpost from "./components/Createpost";

import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        
        <Nav />

        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<Createpost />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
         
        </Routes>
      </div>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
