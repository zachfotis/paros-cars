import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start">
      <Navbar />
      <Hero />
    </div>
  );
}
export default Home;
