import React from 'react';
import Root from '../components/common/Root';
import ContactForm from '../components/checkout/common/ContactForm';
import Footer from '../components/common/Footer';

const CorporateEvents = () => (
  <Root>
    <ContactForm withAccommodation={true} />
    <Footer />
  </Root>
);

export default CorporateEvents;
