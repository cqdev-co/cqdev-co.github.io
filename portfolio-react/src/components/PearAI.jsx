import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const PearAI = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen dark:bg-gray-800 text-black dark:text-white">
    <motion.div 
      {...fadeIn}
      className="container mx-auto flex flex-col items-start p-8 md:p-24 "
    >
      <motion.div 
        {...fadeIn}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between w-full mb-6"
      >
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="flex items-center">
            <img src='./images/trypearai_logo.jpeg' alt="PearAI Logo" className="w-16 h-16" />
            <span className="ml-4 text-2xl font-bold">PearAI</span>
          </div>
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex space-x-2 ml-20"
          >
            <motion.a whileHover={{ scale: 1.3 }} href="https://github.com/trypear" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/company/trypearai/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </motion.a>
          </motion.div>
        </div>
        <div className="flex flex-col items-end mr-6">
          <span className="font-sans">Company: PearAI</span>
          <span className="font-sans">contributed by Conor Quinlan</span>
        </div>
      </motion.div>
      <motion.div 
        {...fadeIn}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col md:flex-row w-full justify-between mt-10"
      >
        <div className="w-full lg:w-3/5 p-4 flex justify-center items-center">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src='./images/pearai_server.jpg' 
            alt="Sample" 
            className="w-full h-auto object-cover rounded-lg" 
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-base leading-relaxed text-justify">
            PearAI is an open-source, AI-powered code editor designed to enhance the development 
            process by integrating AI seamlessly into the workflow. Built as a fork of VSCode, 
            it retains all the familiar features, making it easy for developers to adopt. 
            PearAI allows users to directly interact with their codebase, make inline changes, 
            and handle syntax and edge cases efficiently. It also supports referencing other files 
            and content within the chat. PearAI is community-driven, with options for developers to 
            contribute and discuss improvements on their GitHub and Discord platforms.
          </p>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default PearAI;