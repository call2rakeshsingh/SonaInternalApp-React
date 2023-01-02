import React from 'react';
import Footer from '../components/Footer';
import FAQ from './ContactUs/index';
import ContactUsSlides from './ContactUs/ContactUsSlides';

const ContactUs = () => {
return (
	<>
	<div id='contactUsSection' className='ui container'>
	<ContactUsSlides />
	<FAQ />
	</div>
	<Footer />

	</>
	
);
};

export default ContactUs;
