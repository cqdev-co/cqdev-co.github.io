import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="py-32 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mb-8"
        >
          I'm a passionate developer creating <span className="text-yellow-300">awesome</span> digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Explore Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
