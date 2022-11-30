import HeroImage from '../assets/images/hero.webp';
import Lookup from './Lookup';

function Hero() {
  return (
    <>
      <img src={HeroImage} alt="hero" className="relative h-screen w-auto object-cover brightness-75 contrast-75" />
      <Lookup />
    </>
  );
}
export default Hero;
