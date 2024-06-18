import React, { useEffect, useState } from 'react';
import FeedbackCarousel from './FeedbackCarousel';

const texts = [
    { text: "Hello", font: "font-sans" },
    { text: "Bonjour", font: "font-mono" },
    { text: "Hola", font: "font-mono" },
    { text: "Hallo", font: "font-sans" },
    { text: "Ciao", font: "font-serif" },
    { text: "こんにちは", font: "font-mono" },
    { text: "안녕하세요", font: "font-sans" }
  ];

const LandingPage = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 4000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1" style={{ height: 'calc(100vh - 30vh)' }}>
                {/** Changing Hello Text / Who I am **/}
                <section className="flex-1 flex p-12">
                    <div className="text-left m-24">
                        <p className={`text-7xl p-2 transition-all duration-500 gradient-text ${texts[index].font}`}>
                            {texts[index].text}
                        </p>
                        <p className="text-3xl p-2 transition-all duration-500 font-mono">
                            Welcome to my <span className="gradient-text">Portfolio</span>
                        </p>
                    </div>
                </section>
                    {/** Navigation **/}
                    <div className="bg-white w-2/6 lg:w-4/10 flex h-65 items-center justify-center fade-in rounded-lg shadow-lg p-10 mt-20" style={{ height: '40vh' }}>
                    <ul className="space-y-6 text-3xl text-gray-800 font-quicksand italic">
                        <li className="pb-4"> <a href="#about" className="hover:text-blue-500 transition duration-300">About Me</a> </li>
                        <li className="pb-4 relative group"> <a href="#projects" className="hover:text-blue-500 transition duration-300 gradient-text">Projects</a>
                            <ul className="absolute left-[-100%] top-0 bg-white border border-gray-200 p-2 
                            rounded-lg shadow-lg hidden group-hover:block space-y-2 text-xl text-gray-600">
                                <li className="text-2xl"> <a href="#portfolio" className="hover:text-blue-500 transition duration-300">Portfolio</a> </li>
                                <li className="text-2xl"> <a href="#tbd" className="hover:text-blue-500 transition duration-300">TBD</a> </li>
                            </ul>
                        </li>
                        <li className="pb-4"> <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact Me</a> </li>
                    </ul>
                    </div>
                </div>
            <footer className="py-3 w-full p-9 fade-in" style={{ height: '30vh' }}>
                <div className="flex items-center justify-center h-full w-full bg-custom-gradient">
                    <FeedbackCarousel />
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
