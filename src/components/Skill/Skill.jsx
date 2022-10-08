import React from "react";
import { ReactComponent as HtmlIcon } from "../../assets/skills/cart.svg";
import { ReactComponent as CssIcon } from "../../assets/skills/css3.svg";
import { ReactComponent as JsIcon } from "../../assets/skills/javascript.svg";
import { ReactComponent as ReactIcon } from "../../assets/skills/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/skills/redux.svg";
import { ReactComponent as SassIcon } from "../../assets/skills/sass.svg";
import { ReactComponent as VSIcon } from "../../assets/skills/vs-code.svg";
import { ReactComponent as GitIcon } from "../../assets/skills/git.svg";
import { ReactComponent as NodeIcon } from "../../assets/skills/node.svg";
import { ReactComponent as MongoIcon } from "../../assets/skills/mongodb.svg";
import { ReactComponent as PhpIcon } from "../../assets/skills/php.svg";
// php
import { useInView } from "react-intersection-observer";

const Skill = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      id="skill"
      className={`py-40 border-t-2 border-gray-400 ${
        inView ? "opacity-1" : "opacity-0"
      } transition-all duration-1000 ease-in text-[12px] sm:text-[14px] md:text-[16px]`}
      ref={ref}
    >
      <h1 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold text-center">
        My Skills
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center justify-center m-6">
          <HtmlIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-orange-600 dark:fill-orange-600"
          />
          <p>HTML5</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <CssIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-blue-600 dark:fill-blue-600"
          />
          <p>CSS3</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <JsIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-yellow-600 dark:fill-yellow-600"
          />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <ReactIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-blue-600 dark:fill-blue-600"
          />

          <p>ReactJS</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <ReduxIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-purple-600 dark:fill-purple-600"
          />
          <p>Redux</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <SassIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-pink-600 dark:fill-pink-600"
          />
          <p>Sass</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <VSIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-blue-600 dark:fill-blue-600"
          />
          <p>VS Code</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <GitIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-orange-600 dark:fill-orange-600"
          />
          <p>Git</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <NodeIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-green-600 dark:fill-green-600"
          />
          <p>NodeJS</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <MongoIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-green-600 dark:fill-green-600"
          />
          <p>MongoDB</p>
        </div>
        <div className="flex flex-col items-center justify-center m-6">
          <PhpIcon
            width={"48px"}
            height={"48px"}
            className="hover:fill-blue-600 dark:fill-blue-600"
          />
          <p>PHP</p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
