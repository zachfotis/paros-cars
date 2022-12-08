import HeroImage from '../assets/images/hero.webp';
import ProgressBar from '../components/Rent/ProgressBar';
import SelectDates from '../components/Rent/SelectDates';
import { AnimatePresence } from 'framer-motion';

function Rent() {
  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col justify-start items-center">
        <div className="relative w-full h-[80vh]">
          <img src={HeroImage} alt="hero" className="h-full w-full object-cover shadow-lg" />
          <SelectDates />
        </div>
        <ProgressBar />
      </div>
    </AnimatePresence>
  );
}
export default Rent;
