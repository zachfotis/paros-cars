function Navbar() {
  const page = 'Contact';

  return (
    <nav>
      <div className="logo">logo</div>
      <ul>
        <li className="">Home</li>
        <li>About</li>
        <li>{page}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
