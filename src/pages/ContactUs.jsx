import { useEffect } from 'react';
import ContactImage from '../assets/images/contact.jpg';
import PageLayout from '../components/Layout/PageLayout';
import SoonAvailable from '../components/SoonAvailable';

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout title={layoutText} image={ContactImage}>
      <SoonAvailable />
    </PageLayout>
  );
}
export default ContactUs;

const layoutText = {
  EN: 'Contact Us',
  GR: 'Επικοινωνήστε Μαζί Μας',
};
