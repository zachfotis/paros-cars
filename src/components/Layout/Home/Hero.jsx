import HeroImage from '../../../assets/images/hero.webp';
import Lookup from './Lookup';
import { AnimatePresence } from 'framer-motion';

function Hero() {
  return (
    <div className="relative w-full h-[50vh]">
      <img src={HeroImage} alt="hero" className="h-full w-full object-cover shadow-lg" />
      <AnimatePresence>
        <Lookup />
      </AnimatePresence>
    </div>
  );
}
export default Hero;
