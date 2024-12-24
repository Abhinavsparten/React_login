import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>

  );
}

export default App;
