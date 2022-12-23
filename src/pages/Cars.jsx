import { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

import CarsImage from '../assets/images/CarsImage.jpg';
import SoonAvailable from '../components/SoonAvailable';
import PageLayout from '../components/Layout/PageLayout';
import { RentalProvider } from '../context/RentalContext';
import { motion, AnimatePresence } from 'framer-motion';
import Results from '../components/Rent/Results';
import Car from '../components/Rent/Car';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

function Cars() {
  const [availableCars, setAvailableCars] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getCars = async () => {
      try {
        const db = getFirestore();
        const collectionRef = collection(db, 'cars');
        const querySnap = await getDocs(collectionRef);
        const cars = querySnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setAvailableCars(cars);
      } catch (error) {
        toast.error('Παρουσιάστηκε κάποιο πρόβλημα');
      }
    };

    getCars();
  }, []);

  // const handleUpload = () => {
  //   const uploadCars = async () => {
  //     try {
  //       const db = getFirestore();
  //       const collectionRef = collection(db, 'cars');
  //       cars.forEach(async (car) => {
  //         await addDoc(collectionRef, car);
  //       });
  //       console.log('Cars uploaded');
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   uploadCars();
  // };

  return availableCars.length === 0 ? (
    <Loader />
  ) : (
    <PageLayout title={layoutText} image={CarsImage}>
      <AnimatePresence>
        <div className="w-full max-w-[1280px] flex justify-center items-stretch flex-wrap gap-10">
          {availableCars.map((car) => (
            <motion.div className="w-[40%] laptopLG:w-[90%]" whileHover={{ scale: 1.05 }}>
              <Car key={car.id} car={car} showPrice={false} showAllOptions={false} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </PageLayout>
  );
}
export default Cars;

const layoutText = {
  EN: 'Our Cars',
  GR: 'Τα Αυτοκίνητα Μας',
};

const cars = [
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Ford Fiesta',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2015,
    color: 'Silver',
    url: 'gs://parodise-cars.appspot.com/cars/ford-fiesta.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Renault Clio',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2016,
    color: 'Red',
    url: 'gs://parodise-cars.appspot.com/cars/renault-clio.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Toyota Aygo',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2016,
    color: 'White',
    url: 'gs://parodise-cars.appspot.com/cars/toyota-aygo.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Kia Piccanto',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2016,
    color: 'Gold',
    url: 'gs://parodise-cars.appspot.com/cars/kia-piccanto.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Chevrolet Aveo',
    passengers: 5,
    price: 30,
    transmission: 'A',
    year: 2015,
    color: 'Black',
    url: 'gs://parodise-cars.appspot.com/cars/chevrolet-aveo.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Citroen C1',
    passengers: 5,
    price: 30,
    transmission: 'A',
    year: 2014,
    color: 'Grafiti',
    url: 'gs://parodise-cars.appspot.com/cars/citroen-c1.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Renault Scenic',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2012,
    color: 'Brown',
    url: 'gs://parodise-cars.appspot.com/cars/renault-scenic.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Hundai i10',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2014,
    color: 'Red',
    url: 'gs://parodise-cars.appspot.com/cars/hundai-i10.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Fiat Panda',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2014,
    color: 'Red',
    url: 'gs://parodise-cars.appspot.com/cars/fiat-panda.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Fiat Grande Punto',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2013,
    color: 'Black',
    url: 'gs://parodise-cars.appspot.com/cars/fiat-grande-punto.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Toyota Yaris',
    passengers: 5,
    price: 30,
    transmission: 'A',
    year: 2018,
    color: 'Blue electric',
    url: 'gs://parodise-cars.appspot.com/cars/toyota-yaris.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Citroen C3',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2016,
    color: 'Black',
    url: 'gs://parodise-cars.appspot.com/cars/citroen-c3.png',
  },
  {
    airCondition: true,
    bags: 5,
    bookedDates: [],
    doors: 5,
    mileage: 'Unlimited',
    name: 'Toyota Yaris',
    passengers: 5,
    price: 30,
    transmission: 'M',
    year: 2018,
    color: 'Brown',
    url: 'gs://parodise-cars.appspot.com/cars/toyota-yaris.png',
  },
];

const bookedDates = [
  {
    endDate: 'December 6, 2022 at 12:00:00 AM UTC+2',
    startDate: 'December 3, 2022 at 12:00:00 AM UTC+2',
    status: 'booked',
  },
];
