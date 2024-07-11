// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import PearAI from './components/PearAI';

function App () {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="portfolio/" element={<LandingPage />} />
          <Route path="portfolio/about" element={<AboutMe />} />
          <Route path="portfolio/projects" element={<Projects />} />
          <Route path="portfolio/pearai" element={<PearAI />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
