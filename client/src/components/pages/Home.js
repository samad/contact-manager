import React from 'react';
import Contact from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

function Home() {
	return (
		<div className='row'>
			<div className='col-lg-6'>
				<ContactForm />
			</div>
			<div className='col-lg-6'>
				<ContactFilter />
				<Contact />
			</div>
		</div>
	);
}

export default Home;
