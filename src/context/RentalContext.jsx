import { createContext, useContext, useEffect, useState } from 'react';
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

  // ON SELECTED DATES CHANGE
  useEffect(() => {
    setHasUserSearched(false);
    setAvailableCars([]);
    // TODO: Reset all other states

    if (selectedDates[0].endDate !== 0 && selectedDates[0].startDate !== 0) {
      const endDay = selectedDates[0].endDate.getDate();
      const startDay = selectedDates[0].startDate.getDate();
      const days = endDay - startDay + 1;
      setTotalDays(days);
    } else {
      setTotalDays(0);
    }
  }, [selectedDates]);

  // GET AVAILABLE CARS
  const getAvailableCars = async () => {
    // Check if user has selected an past date
    const today = new Date();
    today.setDate(today.getDate() - +1);

    if (selectedDates[0].startDate < today || selectedDates[0].endDate < today) {
      toast.error('Please select a date in the future');
      setAvailableCars([]);
      return;
    }

    setIsLoading(true);

    const handler = () => {
      const availableCarsTemp = [];

      cars.forEach((car) => {
        const isCarAvailableInSelectedDateRange = car.bookedDates.every((bookedDate) => {
          const isPending = bookedDate.status === 'pending';
          const selectedStartDate = selectedDates[0].startDate;
          const selectedEndDate = selectedDates[0].endDate;
          const bookedStartDate = bookedDate.startDate;
          const bookedEndDate = bookedDate.endDate;
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
          availableCarsTemp.push(car);
        }
      });
      setHasUserSearched(true);
      setAvailableCars(availableCarsTemp);
      setIsLoading(false);
    };

    setTimeout(handler, 2000);
  };

  return (
    <RentalContext.Provider
      value={{
        selectedDates,
        setSelectedDates,
        selectedCar,
        setSelectedCar,
        availableCars,
        setAvailableCars,
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

const cars = [
  {
    id: 1,
    name: 'Chevrolet Spark',
    year: '2019',
    passengers: '4-5',
    doors: '5',
    bags: '1-2',
    transmission: 'M',
    airCondition: true,
    mileage: 'Unlimited',
    price: '25.00',
    bookedDates: [
      {
        startDate: new Date(2022, 11, 1),
        endDate: new Date(2022, 11, 3),
        status: 'booked',
      },
      {
        startDate: new Date(2022, 11, 10),
        endDate: new Date(2022, 11, 12),
        status: 'booked',
      },
      {
        startDate: new Date(2022, 11, 16),
        endDate: new Date(2022, 11, 19),
        status: 'pending',
      },
    ],
  },
  {
    id: 2,
    name: 'Ford Escort',
    year: '2005',
    passengers: '4-5',
    doors: '5',
    bags: '1-2',
    transmission: 'M',
    airCondition: true,
    mileage: 'Unlimited',
    price: '15.00',
    bookedDates: [
      {
        startDate: new Date(2022, 11, 3),
        endDate: new Date(2022, 11, 6),
        status: 'booked',
      },
      {
        startDate: new Date(2022, 11, 7),
        endDate: new Date(2022, 11, 8),
        status: 'booked',
      },
      {
        startDate: new Date(2022, 11, 18),
        endDate: new Date(2022, 11, 21),
        status: 'booked',
      },
    ],
  },
];
