import { NavLink } from 'react-router-dom';

const Routes = [
  { name: 'Home', url: '/' },
  { name: 'Cars', url: '/cars' },
  { name: 'Rent Terms', url: '/terms' },
  { name: 'Contact Us', url: '/contact' },
];

function Navbar() {
  return (
    <nav className="shadow-md bg-blue w-full fixed top-0 left-0 z-10">
      <div className="max-w-[1280px] flex justify-between items-center py-2 mx-auto">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">Logo</div>
        <ul className="space-x-10 md:flex md:items-center">
          {Routes.map((route) => (
            <li key={route.name} className="text-xl cursor-pointer md:ml-11">
              <NavLink
                to={route.url}
                className={({ isActive }) => {
                  return isActive
                    ? 'text-white text-base font-[500] hover:text-yellow'
                    : 'text-white text-base font-[300] hover:text-yellow';
                }}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
