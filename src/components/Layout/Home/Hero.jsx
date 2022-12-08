import HeroImage from '../../../assets/images/hero.webp';
import Lookup from './Lookup';

function Hero() {
  return (
    <div className="relative w-full h-[50vh]">
      <img src={HeroImage} alt="hero" className="h-full w-full object-cover shadow-lg" />
      <Lookup />
    </div>
  );
}
export default Hero;
