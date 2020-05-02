import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

function ContactForm() {
	const contactContext = useContext(ContactContext);

	const { addContact, updateContact, current, clearCurrent } = contactContext;

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	}, [contactContext, current]);

	const { name, email, phone, type } = contact;

	const onChange = (ev) => setContact({ ...contact, [ev.target.name]: ev.target.value });

	const onSubmit = (ev) => {
		ev.preventDefault();
		if (current === null) {
			addContact(contact);
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		} else {
			updateContact(contact);
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form className='my-2' onSubmit={onSubmit}>
			<h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
			<input
				type='text'
				placeholder='Name'
				className='form-control my-3'
				name='name'
				value={name}
				onChange={onChange}
				required
			/>
			<input
				type='email'
				placeholder='Email'
				className='form-control my-3'
				name='email'
				value={email}
				onChange={onChange}
			/>
			<input
				type='tel'
				placeholder='Phone'
				className='form-control my-3'
				name='phone'
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<div className='custom-control custom-radio custom-control-inline my-3'>
				<input
					type='radio'
					name='type'
					value='personal'
					id='personal'
					className='custom-control-input'
					checked={type === 'personal'}
					onChange={onChange}
				/>
				<label className='custom-control-label' htmlFor='personal'>
					Personal
				</label>
			</div>
			<div className='custom-control custom-radio custom-control-inline'>
				<input
					type='radio'
					name='type'
					value='professional'
					className='custom-control-input'
					id='professional'
					checked={type === 'professional'}
					onChange={onChange}
				/>
				<label className='custom-control-label' htmlFor='professional'>
					Professional
				</label>
			</div>
			<div>
				<input
					type='submit'
					value={current ? 'Update Contact' : 'Add Contact'}
					className='btn btn-primary btn-block'
				/>
				{current && (
					<button className='btn btn-secondary btn-block' onClick={clearAll}>
						Cancel
					</button>
				)}
			</div>
		</form>
	);
}

export default ContactForm;
