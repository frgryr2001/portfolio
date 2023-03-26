import { useCallback, useState, useEffect } from 'react';
import gsap from 'gsap';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Project/Projects';
import Skill from './components/Skill/Skill';

function App() {
  const [theme, setTheme] = useState('');
  const [loading, setLoading] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading((prev) => prev - 1);
    }, 1000);
    if (loading === 0) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  const toggleTheme = useCallback(() => {
    if (theme === '') {
      setTheme('dark');
    } else {
      setTheme('');
    }
  }, [theme]);
  return (
    <>
      {loading > 0 && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-white dark:bg-black">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary">
                <svg
                  className="w-8 h-8 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white animate">
                Loading...
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className={`${theme}`}>
        <div className=" dark:bg-black dark:w-full bg-primary">
          <div
            className={`max-w-7xl m-auto  dark:bg-black text-black dark:text-white font-normal  `}
          >
            <Header toggleTheme={toggleTheme} theme={theme} />
            <Hero />
            <Skill />
            <Projects />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
