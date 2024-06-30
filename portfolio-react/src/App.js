// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import PearAI from './components/PearAI';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/pearai" element={<PearAI />} />
    </Routes>
  </Router>
);

export default App;
