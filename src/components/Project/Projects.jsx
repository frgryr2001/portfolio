import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <section
      id="projects"
      className={`py-8 mb-10 border-t-2 border-gray-400 ${
        inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-opacity duration-700 ease-in text-[12px] sm:text-[14px] md:text-[16px]`}
      ref={ref}
      data-scroll-section
    >
      <h1 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold text-center mb-6">
        My Projects
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-3 place-items-center sm:place-items-stretch ">
        <div className="m-4 w-[70%] sm:w-[90%]   shadow-lg dark:shadow-white dark:shadow-sm  rounded-lg overflow-hidden hover:scale-105 transition-all">
          <a
            href="https://omnifood-hnhan2k1.netlify.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className="flex flex-col items-start justify-center ">
              <img
                src="/project/omnifood.png"
                alt="omnifood"
                border="0"
                className="w-[100%] cover h-full"
              />
              <div className="px-4 py-8 ">
                <h1 className="text-[20px] font-bold mb-4">Omnifood</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #Html5
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #Css3
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #JavaScript
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #Sass
                  </span>
                </div>
                <p className="">
                  A food delivery website Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Alias magnam at cumque sapiente
                  quibusdam quis! Dolore possimus, labore qui rem excepturi
                  libero delectus laborum voluptate ullam accusamus, ipsa nulla.
                  Laborum?
                </p>

                {/* <div className="flex flex-row justify-center">
                  <div className="flex flex-row items-center"></div>
                </div> */}
              </div>
            </div>
          </a>
        </div>
        <div className="m-4 w-[70%] sm:w-[90%]  shadow-lg dark:shadow-white dark:shadow-sm  rounded-lg overflow-hidden hover:scale-105 transition-all">
          <a
            href="https://hn2001-tours.netlify.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className="flex flex-col items-start justify-center">
              <img
                src="/project/bookTours.png"
                alt="tours"
                border="0"
                className="w-full h-full cover"
              />
              <div className="px-4 py-8 ">
                <h1 className="text-[20px] font-bold mb-4">Booking Tours</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #Html5
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #Css3
                  </span>

                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #Sass
                  </span>
                </div>
                <p className="">
                  A food delivery website Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Alias magnam at cumque sapiente
                  quibusdam quis! Dolore possimus, labore qui rem excepturi
                  libero delectus laborum voluptate ullam accusamus, ipsa nulla.
                  Laborum?
                </p>

                {/* <div className="flex flex-row justify-center">
                  <div className="flex flex-row items-center"></div>
                </div> */}
              </div>
            </div>
          </a>
        </div>

        <div className="m-4  w-[70%] sm:w-[90%] shadow-lg  dark:shadow-white dark:shadow-sm rounded-lg overflow-hidden hover:scale-105 transition-all">
          <a
            href="https://github.com/frgryr2001/Natours"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className="flex flex-col items-start justify-center">
              <img
                src="/project/natours.png"
                alt="clothes"
                border="0"
                className="w-full h-full cover "
              />
              <div className="px-4 py-8 ">
                <h1 className="text-[20px] font-bold mb-4">Natours</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #NodeJs
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #ExpressJs
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #MongoDB
                  </span>
                </div>
                <p className="">
                  A food delivery website Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Alias magnam at cumque sapiente
                </p>

                {/* <div className="flex flex-row justify-center">
                  <div className="flex flex-row items-center"></div>
                </div> */}
              </div>
            </div>
          </a>
        </div>

        <div className="m-4 w-[70%] sm:w-[90%]  shadow-lg dark:shadow-white dark:shadow-sm rounded-lg overflow-hidden hover:scale-105 transition-all">
          <a
            href="https://crwn-app-hn2k1.netlify.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className="flex flex-col items-start justify-center">
              <img
                src="/project/clothes.png"
                alt="clothes"
                // border="0"
                className="w-full h-full cover "
              />
              <div className="px-4 py-8 ">
                <h1 className="text-[20px] font-bold mb-4">Clothing app</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #Firebase
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #Sass
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #ReactJS
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #Redux
                  </span>
                </div>
                <p className="">
                  A food delivery website Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Alias magnam at cumque sapiente
                  quibusdam quis! Dolore possimus, labore qui rem excepturi
                  libero delectus laborum voluptate ullam accusamus, ipsa nulla.
                  Laborum?
                </p>

                {/* <div className="flex flex-row justify-center">
                  <div className="flex flex-row items-center"></div>
                </div> */}
              </div>
            </div>
          </a>
        </div>
        <div className="m-4 w-[70%] sm:w-[90%]  shadow-lg dark:shadow-white dark:shadow-sm  rounded-lg overflow-hidden hover:scale-105 transition-all">
          <a
            href="https://github.com/frgryr2001/web-advanced-final"
            target={'_blank'}
            rel="noreferrer"
          >
            <div className="flex flex-col items-start justify-center">
              <img
                src="/project/web-advanced.png"
                alt="clothes"
                // border="0"
                className="w-full h-full cover "
              />
              <div className="px-4 py-8 ">
                <h1 className="text-[20px] font-bold mb-4">
                  Transaction applications
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #JavaScript
                  </span>

                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #NodeJS
                  </span>
                  <span className="p-1 font-bold bg-blue-300 rounded-md">
                    #MongoDB
                  </span>
                </div>
                <p className="">
                  A food delivery website Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Alias magnam at cumque sapiente
                </p>

                {/* <div className="flex flex-row justify-center">
                  <div className="flex flex-row items-center"></div>
                </div> */}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
