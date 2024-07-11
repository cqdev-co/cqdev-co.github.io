"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 min-h-screen md:my-8">
      <div className="flex flex-col justify-start items-center md:items-start md:pl-20 mt-5 md:mt-10 md:ml-20 leading-tight">
        <h5 className="text-xl font-bold gradient-text mb-2 text-center md:text-left">Let's Connect</h5>
        <p className="mb-4 max-w-md text-center md:text-left text-md">
          I'm currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 mb-6">
            <motion.a whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/conorgquinlan/" 
                        target="_blank" rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-blue-700">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3 }} 
            href="https://github.com/cqdev-co" 
            target="_blank" rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </motion.a>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2"> Email sent successfully! </p>
        ) : (
          <form className="flex flex-col max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Name</label>
              <input name="email" type="email" id="email" required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] 
                text-sm rounded-lg block w-full p-2 text-gray-300"
                placeholder="John Smith"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <input name="email" type="email" id="email" required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] 
                text-sm rounded-lg block w-full p-2 text-gray-300"
                placeholder="example@google.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm mb-1 font-medium font-sans">Subject</label>
              <input name="subject" type="text" id="subject" required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                 text-sm rounded-lg block w-full p-2 text-gray-300"
                placeholder="The main topic"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm mb-1 font-medium font-sans">Message</label>
              <textarea name="message" id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] 
                text-sm rounded-lg block w-full p-2 h-32 text-gray-300"
                placeholder="Let's talk...!"
              />
            </div>
            <button type="submit"
              className="bg-gradient-to-r from-cyan-200 to-purple-300 py-2 px-5 
              rounded-lg w-full hover:opacity-90 transition-opacity duration-300 shadow-md"
            > Send Message </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;