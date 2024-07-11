import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ to, imageSrc, title, description, tags }) => (
  <Link 
    to={to}
    className="flex-shrink-0 rounded-lg shadow-sm w-72 md:w-80 h-[24rem] md:h-[28rem] bg-white
              p-4 flex flex-col justify-end relative border border-gray-200
              transform transition-transform duration-300 hover:scale-95 hover:border-blue-500 hover:shadow-xl
              mb-8 md:mb-0"
  >
    <div className="absolute inset-0 flex items-center justify-center rounded-lg overflow-hidden bottom-32 md:bottom-40">
      <img src={imageSrc} alt={`${title} Logo`} className="max-w-full max-h-full object-contain" />
    </div>
    <h2 className="relative text-xl md:text-2xl font-bold gradient-text">{title}</h2>
    <p className="relative mt-2 text-black text-sm md:text-base">{description}</p>
    <div className="flex flex-wrap gap-2 mt-4 text-white">
      {tags.map((tag, index) => (
        <span key={index} className="bg-gray-700 rounded-full px-2 py-1 text-xs md:text-sm">{tag}</span>
      ))}
    </div>
  </Link>
);

const Projects = () => {
  const projectsData = [
    {
      to: "./pearai",
      imageSrc: './images/trypearai_logo.jpeg',
      title: "PearAI",
      description: "The Open Source AI‑Powered Code Editor",
      tags: ["CI/CD", "Backend", "Python"]
    },
    // Add more projects here
    {
      to: "/",
      imageSrc: './logo512.png',
      title: "Portfolio Project",
      description: "Wrote and developed personal Portfolio",
      tags: ["React", "Frontend", "JavaScript"]
    },
  ];

  return (
    <div className="min-h-screen bg- flex flex-col items-center px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-sans font-bold mt-5 md:mt-10 gradient-text"> Projects </h1>
      <p className="text-center text-gray-600 text-sm md:text-base mb-6"> Coding Projects Showcase </p>
      {/* Project Cards */}
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-start w-full md:ml-24 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;