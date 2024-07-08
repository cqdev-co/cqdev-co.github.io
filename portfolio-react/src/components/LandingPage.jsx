import { useState, useEffect } from 'react';
import FeedbackCarousel from './FeedbackCarousel';
import AboutMe from './AboutMe';
import Projects from './Projects';

const LandingPage = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (prevCount < 100 ? prevCount + 1 : prevCount));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const stats = [
        { label: 'Projects Completed', value: 15 },
        { label: 'Years Experience', value: 5 },
        { label: 'Happy Clients', value: 30 },
        { label: 'Code Lines Written', value: '100K+' },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1" style={{ height: 'calc(100vh - 30vh)' }}>
                <section className="flex-1 flex p-12">
                    <div className="text-left m-24">
                        <p className="text-7xl p-2 transition-all duration-500 gradient-text font-sans">
                            Hello
                        </p>
                        <p className="text-3xl p-2 transition-all duration-500 font-sans">
                            Welcome to my <span className="gradient-text">Portfolio</span>
                        </p>
                    </div>
                </section>
                <section className="flex-1 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl font-bold gradient-text">
                                    {typeof stat.value === 'number' && stat.value <= 100
                                        ? Math.min(count, stat.value)
                                        : stat.value}
                                </p>
                                <p className="text-xl mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <footer className="py-24 w-full p-24 fade-in" style={{ height: '50vh' }}>
                <div className="flex items-center justify-center h-full w-full bg-custom-gradient">
                    <FeedbackCarousel />
                </div>
            </footer>
            <section id="about" className="pt-8">
                <AboutMe />
            </section>
            <section id="projects">
                <Projects />
            </section>
        </div>
    );
};

export default LandingPage;