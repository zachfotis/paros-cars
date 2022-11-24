function Navbar() {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Cars', link: '/' },
    { name: 'Rent Terms', link: '/' },
    { name: 'Contact Us', link: '/' },
  ];
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-blue py-4 md:px-10 p-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>Logo</div>

        <ul className='md:flex md:items-center text-white space-x-20'>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-11 text-xl cursor-pointer'>
              <a hrfe={link.link} className='hover:text-yellow'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
