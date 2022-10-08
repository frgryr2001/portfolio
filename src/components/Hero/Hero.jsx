import { useInView } from "react-intersection-observer";
const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      className="flex flex-col sm:px-4 sm:flex-row sm:py-4 text-[12px] sm:text-[14px] md:text-[16px]"
      ref={ref}
    >
      <div
        className={`flex flex-col items-center md:items-start justify-center h-screen basis-2/4 ${
          inView ? "opacity-1 " : "opacity-0 "
        } transition-opacity duration-1000 ease-in dark:text-white`}
      >
        <h1 className="text-[30px] md:text-[44px] font-bold ">
          Hi, I'm Hoang Nhan
        </h1>
        <p className="text-[16px] md:text-[24px]">
          I'm a{" "}
          <a className="underline decoration-sky-500 dark:decoration-pink-500">
            Frontend Developer
          </a>{" "}
        </p>
        {/* about */}
        <p className="mb-4 text-center md:text-left">
          a front-end developer focused on creating beautiful and user friendly
          applications while writing clean code.
        </p>
        {/* button download cv */}
        <a
          href="./pdf/CV_LeHoangNhan.pdf"
          download="my_cv"
          className="bg-[#1e1e1e] text-white px-4 py-2 rounded-md  mb-8"
        >
          Download CV
        </a>
      </div>
      {/* image profile */}
      <div
        className={`basis-2/4 overflow-hidden flex flex-col items-center justify-center h-screen  mb-8`}
      >
        <img
          src="/img/me.jpg"
          alt="profile"
          className={` bg-center object-contain rounded-[50%] w-[30%] sm:w-[50%]  ${
            inView ? "translate-x-0 opacity-1" : "translate-x-full opacity-0"
          } transition-all duration-500 ease-linear`}
        />
      </div>
    </section>
  );
};

export default Hero;
