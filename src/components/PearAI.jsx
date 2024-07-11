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
          <div className="flex items-center mt-12 md:mt-0">
            <img src='../images/trypearai_logo.jpeg' alt="PearAI Logo" className="w-16 h-16" />
            <span className="ml-4 text-2xl font-bold">PearAI</span>
          </div>
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex space-x-2 ml-20"
          >
            <motion.a whileHover={{ scale: 1.3 }} 
            href="https://github.com/trypear" 
            target="_blank" rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/company/trypearai/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </motion.a>
          </motion.div>
        </div>
        <div className="flex flex-col items-end ml-6 md:mr-6 mt-2 text-sm md:text-base">
          <span className="font-sans">Company: PearAI</span>
          <span className="font-sans">by Conor Quinlan</span>
        </div>
      </motion.div>
      <motion.div 
        {...fadeIn}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col md:flex-row items-start mt-2 text-sm md:text-base"
      >
        <div className="w-full md:w-1/2 p-4 flex justify-center items-start">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src='../images/pearai_server.jpg' 
            alt="Sample" 
            className="w-full h-auto object-cover rounded-lg" 
          />
        </div>
        <div className="w-full md:w-1/2 p-2 flex-col">
          <h2 className="text-lg md:text-xl font-bold mb-2 mt-8">Introduction</h2>
          <p className="text-sm md:text-base leading-snug text-justify">
            PearAI is an open-source, AI-powered code editor designed to enhance the development 
            process by integrating AI seamlessly into the workflow. Built as a fork of VSCode, 
            it retains all the familiar features, making it easy for developers to adopt. 
            PearAI allows users to directly interact with their codebase, make inline changes, 
            and handle syntax and edge cases efficiently. It also supports referencing other files 
            and content within the chat. PearAI is community-driven, with options for developers to 
            contribute and discuss improvements on their GitHub and Discord platforms.
          </p>
          <h2 className="text-lg md:text-xl font-bold mb-2 mt-10">CI/CD</h2>
          <p className="text-sm md:text-base leading-snug text-justify">
          I've been developing a CI/CD pipeline for an open-source application to ensure builds are 
          tested across Linux, Mac, and Windows platforms. This process has proven invaluable, as it 
          helps catch unbuildable pull requests early in the development cycle, maintaining the integrity
          and stability of the project. This system is still actively in use today, consistently enhancing
          the efficiency and reliability of our build process and facilitating smoother contributions from the community.
          </p>
          <h2 className="text-lg md:text-xl font-bold mb-2 mt-10">Backend</h2>
          <p className="text-sm md:text-base leading-snug text-justify">
          I have also contributed to PearAI's Server and Submodule, integrating key features such as Anthropic support,
          which allows users to utilize the platform through a Free Trial or by providing their own API key. Additionally,
          I have applied Secure Software Engineering practices, ensuring robust and secure coding standards are maintained.
          This comprehensive approach not only enhances the functionality and user experience but also reinforces the security
          and reliability of the software.
          </p>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default PearAI;