import useRentalContext from '../../context/RentalContext';
import { Button } from '@mui/material';
import CarImage from '../../assets/images/test_car.jpg';
import PassengersIcon from '../../assets/icons/services/passengers.svg';
import CarDoorIcon from '../../assets/icons/services/car-door.svg';
import BagsIcon from '../../assets/icons/services/bags.svg';
import TransmissionIcon from '../../assets/icons/services/manual-transmission.svg';
import AirConditionIcon from '../../assets/icons/services/snowflake.svg';
import { TfiDashboard } from 'react-icons/tfi';
import { motion } from 'framer-motion';

function Car({ car, totalDays = 1 }) {
  const { setSelectedCar } = useRentalContext();
  const passengers = car?.passengers > 1 ? `${car.passengers - 1} - ${car.passengers}` : car.passengers;
  const bags = car?.bags > 1 ? `${car.bags - 1} - ${car.bags}` : car.bags;

  const handleSelect = () => {
    setSelectedCar(car);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: '-100%' }}
      className="w-full max-w-[1280px] flex justify-center items-stretch gap-5 shadow-lg rounded-lg overflow-hidden p-5 border border-1 border-slate-300 bg-white
    tablet:flex-wrap laptop:gap-2 tablet:py-5 tablet:px-2 mobile:flex-col mobile:items-center 
    "
    >
      {/* car image */}
      <div className="w-[300px] p-2 laptop:w-[200px]">
        <img src={CarImage} alt="car" className="w-full h-auto" />
      </div>
      {/* car info */}
      <div className="flex-1 flex flex-col justify-evenly items-stretch gap-5 py-2 px-4 laptop:px-5">
        <div className="flex flex-col justify-center items-start">
          <h1 className="w-full text-left text-xl font-[500] text-darkBlue mobile:text-center">{car?.name}</h1>
          <p className="w-full text-left text-sm font-[400] text-gray-500 mobile:text-center">{car?.year}</p>
        </div>
        <div className="w-full flex justify-start items-start flex-wrap gap-10 laptop:gap-5 tablet:justify-center">
          <div className="flex justify-center items-center gap-2">
            <img src={PassengersIcon} alt="car door" className="w-[25px]" />
            <p className="text-sm">{passengers}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={CarDoorIcon} alt="car door" className="w-[25px]" />
            <p className="text-sm">{car?.doors}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={BagsIcon} alt="car door" className="w-[25px]" />
            <p className="text-sm">{bags}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={TransmissionIcon} alt="car door" className="w-[25px]" />
            <p className="text-sm">{car?.transmission}</p>
          </div>
          {car?.airCondition && (
            <div className="flex justify-center items-center gap-2">
              <img src={AirConditionIcon} alt="car door" className="w-[25px]" />
            </div>
          )}
        </div>
        <div className="flex justify-start items-center gap-2 mobile:justify-center">
          <TfiDashboard className="text-2xl" />
          <p className="text-left text-sm font-[400] text-gray-500">Mileage: {car?.mileage}</p>
        </div>
      </div>
      {/* price info */}
      <div className="w-fit flex flex-col justify-center items-center gap-5 py-5 px-10 laptop:px-5 tablet:w-full">
        <div className="flex justify-center items-stretch gap-3">
          <div className="flex flex-col justify-evenly items-center">
            <p className="text-xl font-[400] text-gray-500">€ {car.price.toFixed(2)}</p>
            <p className="text-xs font-[400] text-gray-500">Daily Rate</p>
          </div>
          <span className="w-[1px] h-[50px] bg-gray-200"></span>
          <div className="flex flex-col justify-evenly items-center">
            <p className="text-2xl font-[500] text-gray-500">€ {(totalDays * car.price).toFixed(2)}</p>
            <p className="text-xs font-[400] text-gray-500">Total Amount</p>
          </div>
        </div>
        <Button variant="contained" color="primary" className="w-full" onClick={handleSelect}>
          Select Vehicle
        </Button>
      </div>
    </motion.div>
  );
}
export default Car;
