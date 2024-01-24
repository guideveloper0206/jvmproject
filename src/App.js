import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Services from './pages/services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contato' element={<Contact/>}/>
        <Route path='/servicos' element={<Services/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App;
