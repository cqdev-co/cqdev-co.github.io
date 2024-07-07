import FeedbackCarousel from './FeedbackCarousel';
import AboutMe from './AboutMe';
import Projects from './Projects';

const LandingPage = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1" style={{ height: 'calc(100vh - 30vh)' }}>
                {/** Changing Hello Text / Who I am **/}
                <section className="flex-1 flex p-12">
                    <div className="text-left m-24">
                        <p className={`text-7xl p-2 transition-all duration-500 gradient-text font-sans`}>
                            Hello
                        </p>
                        <p className="text-3xl p-2 transition-all duration-500 font-sans">
                            Welcome to my <span className="gradient-text">Portfolio</span>
                        </p>
                    </div>
                </section>
                    {/** Navigation **/}
                    <div className="bg-white w-2/6 lg:w-4/10 flex h-65 items-center justify-center fade-in rounded-lg shadow-lg p-10 mt-20" style={{ height: '40vh' }}>
                    <ul className="space-y-6 text-3xl text-gray-800 font-sans">
                        <li className="pb-4"> <a href="#about" className="hover:text-blue-500 transition duration-300">About Me</a> </li>
                        <li className="pb-4 relative group"> <a href="#projects" className="hover:text-blue-500 transition duration-300 gradient-text">Projects</a>

                        </li>
                        <li className="pb-4"> <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact Me</a> </li>
                    </ul>
                    </div>
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
