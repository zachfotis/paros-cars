import { BsSpeedometer2, BsAward, BsFillPeopleFill } from 'react-icons/bs';
import { Ri24HoursFill } from 'react-icons/ri';
import { GiCarKey } from 'react-icons/gi';
import { AiOutlineCar } from 'react-icons/ai';
import { CiCreditCardOff } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

function Offers() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="w-full max-w-[1280px] mt-[150px] px-5 mx-auto tablet:pb-5">
      <div className="w-full flex flex-col justify-start items-start gap-14">
        <h1 className="w-full text-center text-4xl font-[500] text-darkBlue">
          {language === 'EN' ? 'What We Offer' : 'Τι σας προσφέρουμε'}
        </h1>
        <div className="w-full min-w-[320px] flex justify-center items-start gap-10 flex-wrap mt-5">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="w-[200px] min-w-[200px] text-center flex flex-col justify-center items-center gap-2"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="border-solid border-2 border-orange rounded-full p-3">
                {offer.image}
              </motion.div>
              <h1 className="text-lg font-[500] text-black">{offer[language].title}</h1>
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
    EN: { title: 'Unlimited Kilometers' },
    GR: { title: 'Απεριόριστα Χιλιόμετρα' },
    image: <BsSpeedometer2 className={itemClasses} />,
  },
  {
    id: 2,
    EN: { title: 'Road Assistance 24/7' },
    GR: { title: 'Υποστήριξη Οδικής Ασφάλειας 24/7' },
    image: <Ri24HoursFill className={itemClasses} />,
  },
  {
    id: 3,
    EN: { title: 'Free Pick Up & Drop Off' },
    GR: { title: 'Δωρεάν Πραλαβή & Παράδοση' },
    image: <GiCarKey className={itemClasses} />,
  },
  {
    id: 4,
    EN: { title: 'Free Add-on Drivers' },
    GR: { title: 'Δωρεάν Πρόσθετος Οδηγός' },
    image: <BsFillPeopleFill className={itemClasses} />,
  },
  {
    id: 5,
    EN: { title: 'Professional Services' },
    GR: { title: 'Επαγγελματικές Υπηρεσίες' },
    image: <BsAward className={itemClasses} />,
  },
  {
    id: 6,
    EN: { title: 'Excellent Cars' },
    GR: { title: 'Εξαιρετικά Αυτοκίνητα' },
    image: <AiOutlineCar className={itemClasses} />,
  },
  {
    id: 7,
    EN: { title: 'No Extra Fees' },
    GR: { title: 'Κανένα Επιπλέον Κόστος' },
    image: <CiCreditCardOff className={itemClasses} />,
  },
];

export default Offers;
