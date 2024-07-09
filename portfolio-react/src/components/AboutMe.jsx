// AboutMe.js

import React from 'react';

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-4 md:py-0">
      <div className="w-full max-w-6xl flex flex-col md:flex-row p-4">
        <div className="md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
          <img 
            src="./images/main.jpg" 
            alt="Conor Quinlan" 
            className="rounded-lg shadow-md w-72 h-128 object-cover md:w-auto md:h-auto"
          />
        </div>
        <div className="md:w-2/3 flex flex-col font-sans p-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center md:text-right">About <span className="gradient-text">Me</span></h2>
          <p className="text-sm md:text-base mb-4 leading-relaxed md:leading-tight text-justify ml-0 md:ml-40 max-w-none md:max-w-full">
            At <span className="gradient-text">Netskope</span>, I developed a strong foundation in automating Cloud Infrastructure deployments and implementing robust security measures.
            My experience includes utilizing Ansible and Terraform for AWS infrastructure deployment, and managing GitHub Actions for seamless CI/CD pipelines. 
            Additionally, I led the creation of a Security Stack monitoring dashboard using Python scripts and Looker Studio.
          </p>
          <p className="text-sm md:text-base mb-4 leading-relaxed md:leading-tight text-justify ml-0 md:ml-40 max-w-none md:max-w-full">
            My technical skills span a variety of programming languages and tools such as HTML, CSS, 
            JavaScript, <span className="gradient-text">Python</span>, and <span className="gradient-text">Java</span>. 
            I am proficient in frameworks and technologies such as <span className="gradient-text">React</span>, <span className="gradient-text">Docker</span>, <span className="gradient-text">Ansible</span>, and <span className="gradient-text">Terraform</span>. 
            My ability to design scalable, reliable, and secure cloud infrastructures has been enhanced 
            through hands-on experience and continuous learning.
          </p>
          <p className="text-sm md:text-base mb-4 leading-relaxed md:leading-tight text-justify ml-0 md:ml-40 max-w-none md:max-w-full">
            During my academic journey at the University of Denver, I pursued a 
            B.S. in Computer Science with a minor in Mathematics and Business Analytics.
            I graduated with a <span className="gradient-text">3.45</span> Major GPA and a <span className="gradient-text">3.3</span> Overall GPA. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;