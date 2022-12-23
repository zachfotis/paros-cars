import { useEffect } from 'react';

import ContactImage from '../assets/images/contact.jpg';
import SoonAvailable from '../components/SoonAvailable';
import PageLayout from '../components/Layout/PageLayout';

function Cars() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout title={layoutText} image={ContactImage}>
      <SoonAvailable />
    </PageLayout>
  );
}
export default Cars;

const layoutText = {
  EN: 'Our Cars',
  GR: 'Τα Αυτοκίνητα Μας',
};
