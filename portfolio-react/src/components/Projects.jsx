import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="min-h-screen bg- flex flex-col items-center">
      <h1 className="text-4xl font-sans font-bold mt-20 gradient-text"> Projects </h1>
      <p className="text-center text-gray-600"> Coding Projects Showcase </p>
      {/* Project Cards */}
      <div className="flex overflow-x-auto space-x-4 ml-24 w-full mt-6">
        <Link 
            to="/pearai"
            className="flex-shrink-0 rounded-lg shadow-sm w-80 h-[28rem] bg-white
                      p-4 flex flex-col justify-end relative border border-gray-200
                      transform transition-transform duration-300 hover:scale-95 hover:border-blue-500 hover:shadow-xl"
          >
          <div className="absolute inset-0 flex items-center justify-center rounded-lg overflow-hidden bottom-40">
              <img src='./images/trypearai_logo.jpeg' alt='PearAI Logo' className="max-w-full max-h-full object-contain" />
          </div>
          {/* Title / Description */}
          <h2 className="relative text-2xl font-bold gradient-text">PearAI</h2>
          <p className="relative mt-2 text-black">The Open Source AI‑Powered Code Editor</p>
          <div className="flex space-x-2 mt-4 text-white">
            {/* Tags */}
            <span className="bg-gray-700 rounded-full px-3 py-1">CI/CD</span>
            <span className="bg-gray-700 rounded-full px-3 py-1">Backend</span>
            <span className="bg-gray-700 rounded-full px-3 py-1">Python</span>
          </div>
          </Link>
        </div>
        {/* Add more project cards as needed */}
      </div>
  );
};

export default Projects;
