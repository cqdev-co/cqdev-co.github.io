import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import backgroundImage from './assets/FXjpTMYaUAAZn5x.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'auto', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Navbar />
      <div className="container mx-auto px-4"> {/* Adjust container width as needed */}
        <HeroSection />
        {/* Other components */}
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
