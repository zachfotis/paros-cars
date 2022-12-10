import { useEffect, useRef } from 'react';
import HeroImage from '../assets/images/hero.webp';
import ProgressBar from '../components/Rent/ProgressBar';
import SelectDates from '../components/Rent/SelectDates';
import { AnimatePresence } from 'framer-motion';
import Results from '../components/Rent/Results';
import { RentalProvider } from '../context/RentalContext';
import { useLocation } from 'react-router-dom';

function Rent() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <RentalProvider>
      <AnimatePresence>
        <div className="min-h-screen flex flex-col justify-start items-center overflow-hidden">
          <div className="rent__hero relative w-full h-[80vh] min-h-[650px]">
            <img src={HeroImage} alt="hero" className="h-full w-full object-cover shadow-lg" />
            <SelectDates
              initialDates={location.state && location.state?.initialDates ? location.state.initialDates : null}
            />
          </div>
          <ProgressBar />
          <Results />
        </div>
      </AnimatePresence>
    </RentalProvider>
  );
}
export default Rent;
