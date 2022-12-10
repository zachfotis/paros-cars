import { createContext, useContext, useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';

const RentalContext = createContext({});

const useRentalContext = () => {
  return useContext(RentalContext);
};

export default useRentalContext;

const RentalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: 0,
      endDate: 0,
      key: 'selection',
    },
  ]);
  const [totalDays, setTotalDays] = useState(0);
  const [hasUserSearched, setHasUserSearched] = useState(false);
  const [availableCars, setAvailableCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  // ==================== ON SELECTED DATES CHANGE -> RESET ALL STATES and CALCULATE TOTAL DAYS ====================
  useEffect(() => {
    // Reset all states
    setHasUserSearched(false);
    setAvailableCars([]);
    setSelectedCar(null);
    // TODO: Reset all other states

    // Calculate total days
    if (selectedDates[0].endDate !== 0 && selectedDates[0].startDate !== 0) {
      const endDay = selectedDates[0].endDate.getDate();
      const startDay = selectedDates[0].startDate.getDate();
      const days = endDay - startDay + 1;
      setTotalDays(days);
    } else {
      setTotalDays(0);
    }
  }, [selectedDates]);

  // ==================== SCROLL TO RESULTS WHEN USER HAS SEARCHED ====================
  useEffect(() => {
    if (hasUserSearched) {
      const parentHeight = document.querySelector('.rent__hero').offsetHeight;
      const offset = window.pageYOffset;
      window.scrollBy({
        top: parentHeight - offset - 50,
        behavior: 'smooth',
      });
    }
  }, [hasUserSearched]);

  // ==================== GET AVAILABLE CARS ====================
  const getAvailableCars = async () => {
    // Check if user has selected an past date
    const today = new Date();
    today.setDate(today.getDate() - 1);

    if (selectedDates[0].startDate < today || selectedDates[0].endDate < today) {
      toast.error('Please select a date in the future');
      setAvailableCars([]);
      return;
    }

    // Get available cars from Firestore
    setIsLoading(true);
    setHasUserSearched(true);

    try {
      const db = getFirestore();
      const collectionRef = collection(db, 'cars');
      const querySnap = await getDocs(collectionRef);
      const cars = querySnap.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      // Filter out cars that are not available in selected date range
      const filteredCars = [];
      cars.forEach((car) => {
        const isCarAvailableInSelectedDateRange = car.bookedDates.every((bookedDate) => {
          const isPending = bookedDate.status === 'pending';
          // selected date timestamp at 00:00:00
          const selectedStartDate = new Date(selectedDates[0].startDate).setHours(0, 0, 0, 0);
          const selectedEndDate = new Date(selectedDates[0].endDate).setHours(0, 0, 0, 0);
          const bookedStartDate = new Date(bookedDate.startDate.toDate()).setHours(0, 0, 0, 0);
          const bookedEndDate = new Date(bookedDate.endDate.toDate()).setHours(0, 0, 0, 0);
          if (isPending) {
            return true;
          } else {
            return (
              (selectedStartDate < bookedStartDate && selectedEndDate < bookedStartDate) ||
              (selectedStartDate > bookedEndDate && selectedEndDate > bookedEndDate)
            );
          }
        });

        if (isCarAvailableInSelectedDateRange) {
          filteredCars.push(car);
        }
      });

      const sortedCars = filteredCars.sort((a, b) => a.price - b.price);
      setAvailableCars(sortedCars);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RentalContext.Provider
      value={{
        selectedDates,
        setSelectedDates,
        selectedCar,
        setSelectedCar,
        availableCars,
        getAvailableCars,
        totalDays,
        hasUserSearched,
        isLoading,
      }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export { RentalProvider };
