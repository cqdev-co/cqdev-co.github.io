import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-sm text-gray-600">Full-stack Developer</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae magna vel lacus pretium posuere.
          </p>
        </motion.div>

        {/* Skill Set Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <SkillItem name="React.js" level={80} />
            <SkillItem name="Node.js" level={75} />
            {/* Add more skill items */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillItem = ({ name, level }) => (
  <div className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-800">
    {name} ({level}%)
  </div>
);

export default AboutMe;
