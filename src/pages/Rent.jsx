import { useEffect } from 'react';
import HeroImage from '../assets/images/hero.webp';
import ProgressBar from '../components/Rent/ProgressBar';
import SelectDates from '../components/Rent/SelectDates';
import { AnimatePresence } from 'framer-motion';

function Rent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col justify-start items-center">
        <div className="relative w-full h-[80vh] min-h-[650px]">
          <img src={HeroImage} alt="hero" className="h-full w-full object-cover shadow-lg" />
          <SelectDates />
        </div>
        <ProgressBar />
      </div>
    </AnimatePresence>
  );
}
export default Rent;
