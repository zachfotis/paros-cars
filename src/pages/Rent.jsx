import { useEffect, useRef } from 'react';
import HeroImage from '../assets/images/hero.webp';
import ProgressBar from '../components/Rent/ProgressBar';
import SelectDates from '../components/Rent/SelectDates';
import { AnimatePresence } from 'framer-motion';
import Results from '../components/Rent/Results';
import { RentalProvider } from '../context/RentalContext';
import { useLocation } from 'react-router-dom';

function Rent() {
  const resultsComponent = useRef(null);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToResults = () => {
    if (resultsComponent && resultsComponent.current) {
      window.scrollTo({
        top: -50 + resultsComponent.current.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <RentalProvider>
      <AnimatePresence>
        <div className="min-h-screen flex flex-col justify-start items-center">
          <div className="relative w-full h-[80vh] min-h-[650px]">
            <img src={HeroImage} alt="hero" className="h-full w-full object-cover shadow-lg" />
            <SelectDates
              scrollToResults={scrollToResults}
              initialDates={location.state && location.state?.initialDates ? location.state.initialDates : null}
            />
          </div>
          <ProgressBar reference={resultsComponent} />
          <Results />
        </div>
      </AnimatePresence>
    </RentalProvider>
  );
}
export default Rent;
