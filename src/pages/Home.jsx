import Hero from '../components/Layout/Home/Hero';
import Offers from '../components/Layout/Home/Offers';
import AboutUs from '../components/Layout/Home/AboutUs';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start">
      <Hero />
      <AboutUs />
      <Offers />
    </div>
  );
}
export default Home;
