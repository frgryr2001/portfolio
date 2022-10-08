import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <section
      id="about"
      className={`py-8 px-8 mb-10 border-t-2 border-gray-400 ${
        inView ? "opacity-1 translate-y-0" : "opacity-0 translate-y-10"
      } transition-opacity duration-700 ease-in text-[12px] sm:text-[14px] md:text-[16px]`}
      ref={ref}
    >
      <h1 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold text-center">
        About Me
      </h1>
      {/* about me */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <img
          src="/img/me.jpg"
          alt="profile"
          className={`bg-center object-contain rounded-[50%] w-[25%] lg:w-[15%] mt-3 lg:mt-0 ${
            inView ? "translate-x-0 opacity-1" : "translate-x-[-100%] opacity-0"
          } border-2 border-slate-500`}
        />
        <ul
          className={`${
            inView ? "opacity-1" : "opacity-0"
          } transition-opacity duration-700 ease-in text-center lg:text-left`}
        >
          <li className="mb-6 ">
            I'm a fourth-year student at Ton Duc Thang University. My major is
            computer science and I started programming back in 2019.
          </li>
          <li className="mb-6">
            I gradually became interested in website programming from exercise
            at school and self-learning.
          </li>
          <li className="">
            My experience is mostly about full-stack development. Besides from
            programming, I have other hobbies like playing soccer, games,
            swimming, listening to music
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
