import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navText } from '../assets/data/texts';
import { RxHamburgerMenu as Menu } from 'react-icons/rx';
import LanguageContext from '../context/LanguageContext';
import iconEN from '../assets/icons/english_flag.png';
import iconGR from '../assets/icons/greek_flag.png';

function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Routes = [
    { name: navText[language].home, url: '/' },
    { name: navText[language].rent, url: '/rent' },
    { name: navText[language].cars, url: '/cars' },
    { name: navText[language].rentalTerms, url: '/terms' },
    { name: navText[language].contact, url: '/contact' },
  ];

  return (
    <nav className="shadow-md bg-blue w-full fixed top-0 left-0 z-40 px-5 py-1">
      <div className="max-w-[1280px] flex justify-between items-center py-2 mx-auto">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">Logo</div>
        <div className="flex justify-start items-center gap-10">
          {((isTablet && isMenuOpen) || !isTablet) && (
            <ul
              className="flex justify-center items-start gap-10 tablet:flex-col tablet:absolute tablet:top-[55px] 
          tablet:left-0 tablet:w-full tablet:bg-blue tablet:space-x-0 tablet:px-4 tablet:py-2 tablet:gap-4
          tablet:border-t-[1px] tablet:border-sky-900 tablet:shadow-md tablet:rounded-b-md tablet:z-20"
            >
              {Routes.map((route) => (
                <li key={route.name} className="cursor-pointer flex tablet:w-full tablet:rounded-md overflow-hidden">
                  <NavLink
                    to={route.url}
                    className={({ isActive }) => {
                      return isActive
                        ? 'text-white text-base font-[500] hover:text-yellow tablet:flex-1 tablet:px-2 tablet:py-1 tablet:hover:bg-orange'
                        : 'text-white text-base font-[300] hover:text-yellow tablet:flex-1 tablet:px-2 tablet:py-1 tablet:hover:bg-orange';
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-center items-center gap-3">
            <img
              src={iconGR}
              className="w-[25px] cursor-pointer"
              alt="greek language"
              onClick={() => setLanguage('GR')}
            />
            <img
              src={iconEN}
              className="w-[25px] cursor-pointer"
              alt="english language"
              onClick={() => setLanguage('EN')}
            />
            <Menu
              className="text-3xl text-white cursor-pointer ml-4 hidden tablet:block tablet:hover:text-orange"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
