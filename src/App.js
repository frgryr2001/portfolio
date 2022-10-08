import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Project/Projects";
import Skill from "./components/Skill/Skill";

function App() {
  const [theme, setTheme] = useState("");
  const toggleTheme = () => {
    if (theme === "") {
      setTheme("dark");
    } else {
      setTheme("");
    }
  };
  return (
    <div className={`${theme}`}>
      <div className=" dark:bg-black dark:w-full">
        <div
          className={`max-w-7xl m-auto bg-white dark:bg-black text-neutral-600 dark:text-white font-normal  `}
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
  );
}

export default App;
