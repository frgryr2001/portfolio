import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
const Header = ({ toggleTheme, theme }) => {
  const handleProjectClick = (e) => {
    e.preventDefault();
    document
      .getElementById(e.target.href.split('#')[1])
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <nav
        className="flex text-[12px] sm:text-[14px] md:text-[16px] items-center justify-between dark:bg-black dark:text-white py-4 px-4 sm:px-4 md:px-2 lg:px-1"
        data-scroll-section
      >
        <a href="#home" className="text-[24px] sm:text-[26px]">
          HN.DEV
        </a>
        <ul className="flex items-center">
          <li className="mr-6 icon-hover">
            <a href="#about" onClick={handleProjectClick}>
              About
            </a>
          </li>
          <li className="mr-6 icon-hover">
            <a href="#projects" onClick={handleProjectClick}>
              Projects
            </a>
          </li>
          <li className="mr-6 icon-hover">
            <a href="#contact" onClick={handleProjectClick}>
              Contact
            </a>
          </li>
          {!theme && (
            <MdDarkMode
              size={'24px'}
              className="mr-4 icon-hover"
              onClick={toggleTheme}
            />
          )}
          {theme && (
            <BsSun
              size={'24px'}
              className="mr-4 icon-hover"
              onClick={toggleTheme}
            />
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
