import { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import Offers from '../components/Home/Offers';
import AboutUs from '../components/Home/AboutUs';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-start items-start">
      <Hero />
      <AboutUs />
      <Offers />
    </div>
  );
}
export default Home;
