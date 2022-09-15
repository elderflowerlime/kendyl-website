import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home.js'
import Footer from './components/Footer';

function App() {
  return (
 <> 
      <Router>
        <Navbar />
        <Routes>
         <Route path='/' exact element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
