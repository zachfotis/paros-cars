import Item from './Footer/Item';
import Map from './Footer/Map';
import SocialIcons from '../SocialIcons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue text-white w-full h-auto py-7 px-5 flex flex-col justify-center items-center gap-12">
      <h1 className="w-full text-center text-3xl flex justify-center items-center gap-2 tablet:flex-col">
        <span className="text-orange">PAROdise</span>
        <span>Rent a Car in Paros</span>
      </h1>
      <div className="w-full max-w-[1280px] mx-auto flex justify-evenly items-stretch gap-5 flex-wrap tablet:flex-col tablet:gap-10">
        <Item data={data.pages} title="Pages" />
        <Item data={data.contact} title="Contact Us" />
        <Item data={data.workingHours} title="Working Hours" />
        <Map />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-5">
        <SocialIcons />
        <div className="flex justify-center items-center flex-wrap gap-2 text-white text-sm font-[300]">
          <p>© {currentYear} PAROdise Rent Car.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const data = {
  pages: [
    { field1: 'Home', url: '#' },
    { field1: 'Cars', url: '#' },
    { field1: 'Rent Terms', url: '#' },
    { field1: 'Contact Us', url: '#' },
  ],
  contact: [
    { field1: 'Phone:', field2: '+30 6938 745 624', url: '#' },
    { field1: 'e-mail:', field2: 'a@a.gr', url: '#' },
    { field1: 'Address:', field2: '28th October 25, 55610, Paros, Greece', url: '#' },
  ],
  workingHours: [
    { field1: 'Mon-Thu:', field2: '08:00 - 20:00' },
    { field1: 'Fri-Sat:', field2: '08:00 - 20:00' },
    { field1: 'Sun:', field2: '10:00 - 17:00' },
  ],
};
