import { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import useRentalContext from '../../context/RentalContext';
import FirebaseContext from '../../context/FirebaseContext';
import LanguageContext from '../../context/LanguageContext';
import { selectDates } from '../../assets/data/texts';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { motion } from 'framer-motion';
import { BsCalendar2Date } from 'react-icons/bs';

function SelectDates({ initialDates }) {
  const { setSelectedDates, getAvailableCars, hasUserSearched, totalDays } = useRentalContext();
  const { language } = useContext(LanguageContext);
  const { user } = useContext(FirebaseContext);
  const [localSelectedDates, setLocalSelectedDates] = useState([
    {
      startDate: initialDates && initialDates?.startDate ? initialDates.startDate : new Date(),
      endDate: initialDates && initialDates?.endDate ? initialDates.endDate : new Date(),
      key: 'selection',
    },
  ]);

  // Remove part of the date picker that we don't need
  // and set the initial dates if they are passed from the location state
  useEffect(() => {
    const deleteNode = (className) => {
      const node = document.querySelector(`.${className}`);
      if (node) {
        node.parentNode.removeChild(node);
      }
    };

    deleteNode('rdrDefinedRangesWrapper');

    // Get the initial dates from location state
    if (initialDates && initialDates?.startDate && initialDates?.endDate) {
      setSelectedDates([
        {
          startDate: initialDates.startDate,
          endDate: initialDates.endDate,
          key: 'selection',
        },
      ]);
    }
  }, []);

  // Set the selected dates in the context and in the local state
  const handleSelect = (ranges) => {
    setLocalSelectedDates([ranges.selection]);
    setSelectedDates([ranges.selection]);
  };

  // Get the available cars when user clicks on the button
  const handleClick = () => {
    getAvailableCars();
  };

  return (
    <motion.div
      initial={{ opacity: 0, right: '100%' }}
      animate={{ opacity: 1, right: '50%' }}
      transition={{ duration: 0.5 }}
      className="absolute top-[55%] right-[50%] transform translate-x-1/2 -translate-y-1/2 
      border border-slate-400 p-7 shadow-sm rounded-lg bg-white flex flex-col justify-start
      items-center gap-7 max-w-full overflow-auto mobile:px-3"
    >
      <div className="flex justify-center items-center gap-2">
        <BsCalendar2Date className="text-2xl" />
        <h1 className="text-xl">{selectDates[language].title}</h1>
      </div>
      <DateRangePicker ranges={localSelectedDates} onChange={handleSelect} staticRanges={[]} inputRanges={[]} />
      <Button
        variant="contained"
        color="primary"
        className="w-full"
        onClick={handleClick}
        disabled={!user || hasUserSearched || totalDays === 0}
      >
        {selectDates[language].button}
      </Button>
    </motion.div>
  );
}
export default SelectDates;
