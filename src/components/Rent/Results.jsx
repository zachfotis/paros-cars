import { AnimatePresence } from 'framer-motion';
import useRentalContext from '../../context/RentalContext';
import Loader from '../Loader';
import Car from './Car';

function Results() {
  const { isLoading, hasUserSearched, totalDays, availableCars, selectedCar } = useRentalContext();

  const showInitialMessage = !isLoading && !hasUserSearched && availableCars.length === 0;
  const showAvailableCars = !isLoading && hasUserSearched && availableCars.length > 0;
  const showNoResults = !isLoading && hasUserSearched && availableCars.length === 0;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-14 my-10 p-5 tablet:my-5">
      {showInitialMessage && (
        <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold text-center">Select a date range to see available cars</h1>
          <p className="text-center">You can rent a car for as little as 1 day</p>
        </div>
      )}
      <AnimatePresence>
        {showAvailableCars && availableCars.map((car) => <Car key={car.id} car={car} totalDays={totalDays} />)}
      </AnimatePresence>
      {showNoResults && (
        <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold text-center">No cars available</h1>
          <p className="text-center">Please select a different date range</p>
        </div>
      )}
      {isLoading && <Loader isFluid={true} />}
    </div>
  );
}
export default Results;
