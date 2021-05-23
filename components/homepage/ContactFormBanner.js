import React from 'react';
import Link from 'next/link';
import ContactForm from '../checkout/common/ContactForm';
import {LinkButton} from '../common/atoms/Button';

export default function ContactFormBanner() {
  return (
    <div className="contact-form-banner">
      <ContactForm />
    </div>
  );
}
