import React from "react";
import { useInView } from "react-intersection-observer";

import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      id="contact"
      ref={ref}
      className={`pt-4 pb-2 px-8 border-t-2 border-gray-400 ${
        inView ? "opacity-1 translate-y-0" : "opacity-0 translate-y-10"
      } transition-opacity duration-700 ease-in text-[12px] sm:text-[14px] md:text-[16px]`}
      data-scroll-section
    >
      <h1 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold text-center">
        Contact Me
      </h1>
      <div className="flex flex-col items-center justify-center mt-3">
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/frgryr2001"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={"24px"} className="mr-4 icon-hover" />
          </a>
          <a
            href="https://www.linkedin.com/in/ho%C3%A0ng-nh%C3%A2n-8105b5243/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={"24px"} className="mr-4 icon-hover" />
          </a>
          <a href="mailto:nhanle.lx@gmail.com" target="_blank" rel="noreferrer">
            <AiOutlineMail size={"24px"} className="mr-4 icon-hover" />
          </a>
          <a
            href="https://twitter.com/Nhn24340777"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter size={"24px"} className="icon-hover" />
          </a>
        </div>
        {/* design  */}
        <p className="mt-6 text-center"> Designed by &#169; Hoang Nhan</p>
      </div>
    </section>
  );
};

export default Contact;
