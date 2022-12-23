import Item from './Footer/Item';
import SocialIcons from '../SocialIcons';
import LogoFooter from '../../assets/images/LogoFooter.png';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

function Footer() {
  const { language } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue text-white w-full  h-auto py-12 px-5 flex flex-col justify-center items-center gap-14">
      <h1 className="w-full text-center text-3xl flex justify-center items-center gap-2 tablet:flex-col">
        <span className="text-orange">PAROdise</span>
        <span>Rent a Car in Paros</span>
      </h1>
      <div className="w-full max-w-[1280px] mx-auto flex justify-evenly items-stretch gap-5 flex-wrap tablet:flex-col tablet:gap-10">
        <Item data={data[language].pages} title="Pages" />
        <Item data={data[language].contact} title="Contact Us" />
        <Item data={data[language].workingHours} title="Working Hours" />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 p-5">
        <SocialIcons />
        <img src={LogoFooter} alt="logo" className="h-[50px]" />
        <div className="flex justify-center items-center flex-wrap gap-2 text-white text-sm font-[300]">
          <p>© {currentYear} PAROdise a Rent Car.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const data = {
  EN: {
    pages: [
      { field1: 'Home', url: '/', type: 'link' },
      { field1: 'Cars', url: '/cars', type: 'link' },
      { field1: 'Rent Terms', url: '/terms', type: 'link' },
      { field1: 'Contact Us', url: '/contact', type: 'link' },
      { field1: 'Reservation', url: '/reservation', type: 'link' },
    ],
    contact: [
      { field1: 'Phone:', field2: '+30 6947133643', url: 'tel:00306947133643', type: '' },
      { field1: 'e-mail:', field2: 'Parodiserentacar@gmail.com', url: 'mailto:Parodiserentacar@gmail.com', type: '' },
      { field1: 'Address:', field2: 'Fira, Paros, Greece', url: '#', type: '' },
    ],
    workingHours: [
      { field1: 'Monday:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Tuesday:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Wednesday:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Thursday:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Friday:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Saturday:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Sunday:', field2: '10:00 - 22:00', type: '' },
    ],
  },
  GR: {
    pages: [
      { field1: 'Αρχική', url: '/', type: 'link' },
      { field1: 'Ο Στόλος Μας', url: '/cars', type: 'link' },
      { field1: 'Όροι Ενοικίασης', url: '/terms', type: 'link' },
      { field1: 'Επικοινωνία', url: '/contact', type: 'link' },
      { field1: 'Κράτηση', url: '/reservation', type: 'link' },
    ],
    contact: [
      { field1: 'Τηλέφωνο:', field2: '+30 6947133643', url: 'tel:00306947133643', type: '' },
      { field1: 'e-mail:', field2: 'Parodiserentacar@gmail.com', url: 'mailto:Parodiserentacar@gmail.com', type: '' },
      { field1: 'Διεύθυνση:', field2: 'Φηρά, Πάρος', url: '#', type: '' },
    ],
    workingHours: [
      { field1: 'Δευτέρα:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Τρίτη:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Τετάρτη:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Πέμπτη:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Παρασκευή:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Σάββατο:', field2: '09:00 - 22:00', type: '' },
      { field1: 'Κυριακή:', field2: '10:00 - 22:00', type: '' },
    ],
  },
};
