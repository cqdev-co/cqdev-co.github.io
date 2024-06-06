import React from 'react';
import FeedbackCarousel from './FeedbackCarousel';

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1" style={{ height: 'calc(100vh - 30vh)' }}>
                <section className="bg-gray-100 flex-1 flex items-center justify-center p-6">
                    {/* Main content here */}
                </section>
                <div className="bg-red-100 w-2/5 lg:w-3/10 flex flex-col items-center justify-center p-6">
                    <ul className="space-y-4 text-lg text-white">
                        <li>
                            <a href="#about" className="hover:underline">About Me</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:underline">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
            <footer className="py-3 w-full p-9" style={{ height: '30vh' }} >
                <div className="h-full w-full bg-custom-gradient">
                    <FeedbackCarousel />
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
