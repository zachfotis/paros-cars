import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navText } from '../../assets/data/texts';
import { RxHamburgerMenu as Menu } from 'react-icons/rx';
import LanguageContext from '../../context/LanguageContext';
import iconEN from '../../assets/icons/english_flag.png';
import iconGR from '../../assets/icons/greek_flag.png';
import Logo from '../../assets/images/Logo.png';

function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1050) {
      setIsLaptop(true);
    } else {
      setIsLaptop(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Routes = [
    { name: navText[language].home, url: '/' },
    { name: navText[language].cars, url: '/cars' },
    { name: navText[language].rentalTerms, url: '/terms' },
    { name: navText[language].contact, url: '/contact' },
    { name: navText[language].reservation, url: '/reservation' },
  ];

  return (
    <nav className="shadow-md bg-blue w-full fixed top-0 left-0 z-40 px-5 py-1">
      <div className="max-w-[1280px] flex justify-between items-center py-2 mx-auto">
        <img src={Logo} alt="logo" className="h-[40px]" />
        <div className="flex justify-start items-center gap-10">
          {((isLaptop && isMenuOpen) || !isLaptop) && (
            <ul
              className="flex justify-center items-start gap-10 laptop:flex-col laptop:absolute laptop:top-[55px] 
          laptop:left-0 laptop:w-full laptop:bg-blue laptop:space-x-0 laptop:px-4 laptop:py-2 laptop:gap-4
          laptop:border-t-[1px] laptop:border-sky-900 laptop:shadow-md laptop:rounded-b-md laptop:z-20"
            >
              {Routes.map((route) => (
                <li
                  key={route.name}
                  className={`cursor-pointer flex laptop:w-full laptop:rounded-md overflow-hidden py-1 ${
                    (route.name === 'Κράτηση' || route.name === 'Reservation') && 'px-2 border border-1 rounded-lg'
                  }`}
                >
                  <NavLink
                    to={route.url}
                    className={({ isActive }) => {
                      return isActive
                        ? 'text-white text-base font-[500] hover:text-yellow laptop:flex-1 laptop:px-2 laptop:py-1 laptop:hover:bg-orange'
                        : 'text-white text-base font-[300] hover:text-yellow laptop:flex-1 laptop:px-2 laptop:py-1 laptop:hover:bg-orange';
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
              className="text-3xl text-white cursor-pointer ml-4 hidden laptop:block laptop:hover:text-orange"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
