import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/signup/Register';
import Home from './components/Home/Home';

function App() {

  return (
      <div style={{margin: "3rem"}}>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </div>
  );
}

export default App;
