import { BsSpeedometer2, BsAward, BsFillPeopleFill } from 'react-icons/bs';
import { Ri24HoursFill } from 'react-icons/ri';
import { GiMechanicGarage, GiCarKey } from 'react-icons/gi';
import { AiOutlineCar } from 'react-icons/ai';
import { CiCreditCardOff } from 'react-icons/ci';
import { motion } from 'framer-motion';

function Offers() {
  return (
    <section className="w-full max-w-[1280px] py-14 pt-7 pb-20 px-5 mx-auto">
      <div className="w-full flex flex-col justify-start items-start gap-10">
        <h1 className="w-full text-center text-2xl font-[500] text-darkBlue">What We Offer</h1>
        <div className="w-full min-w-[320px] flex justify-center items-center gap-10 flex-wrap">
          {offers.map((offer) => (
            <div key={offer.id} className="min-w-[200px] flex flex-col justify-center items-center gap-2">
              <motion.div whileHover={{ scale: 1.1 }} className="border-solid border-2 border-orange rounded-full p-3">
                {offer.image}
              </motion.div>
              <h1 className="text-lg font-[500] text-black">{offer.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const itemClasses = 'text-6xl p-3 bg-blue text-white rounded-full flex items-center justify-center';

const offers = [
  {
    id: 1,
    title: 'Unlimited Kilometers',
    image: <BsSpeedometer2 className={itemClasses} />,
  },
  {
    id: 2,
    title: 'Road Assistance 24/7',
    image: <Ri24HoursFill className={itemClasses} />,
  },
  {
    id: 3,
    title: 'Road Assistance 24/7',
    image: <GiMechanicGarage className={itemClasses} />,
  },
  {
    id: 4,
    title: 'Free Drop Off',
    image: <GiCarKey className={itemClasses} />,
  },
  {
    id: 5,
    title: 'Free Add-on Drivers',
    image: <BsFillPeopleFill className={itemClasses} />,
  },
  {
    id: 6,
    title: 'Professional Services',
    image: <BsAward className={itemClasses} />,
  },
  {
    id: 7,
    title: 'Excellent Cars',
    image: <AiOutlineCar className={itemClasses} />,
  },
  {
    id: 8,
    title: 'No Fees',
    image: <CiCreditCardOff className={itemClasses} />,
  },
];

export default Offers;
