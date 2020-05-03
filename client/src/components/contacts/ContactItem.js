import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

function ContactItem({ contact }) {
	const contactContext = useContext(ContactContext);
	const { deleteContact, setCurrent, clearCurrent } = contactContext;
	const { _id, name, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(_id);
		clearCurrent();
	};

	return (
		<div className='card bg-light mb-2 shadow-sm'>
			<h5 className='card-body'>
				{name}{' '}
				{type === 'professional' ? (
					<span className='badge float-right badge-success badge-pill'>
						<i className='fas fa-user-tie'></i> {type.charAt(0).toUpperCase() + type.slice(1)}
					</span>
				) : (
					<span className='badge float-right badge-primary badge-pill'>
						<i className='fas fa-id-card-alt'></i> {type.charAt(0).toUpperCase() + type.slice(1)}
					</span>
				)}
			</h5>
			<ul className='list-group'>
				{email && (
					<li className='list-group-item'>
						<i className='fas fa-envelope-open'></i> {email}
					</li>
				)}
				{phone && (
					<li className='list-group-item'>
						<i className='fas fa-phone'></i> {phone}
					</li>
				)}
			</ul>
			<p className='p-3 mb-0'>
				<button className='btn btn-dark btn-sm' onClick={() => setCurrent(contact)}>
					Edit
				</button>
				&nbsp;
				<button className='btn btn-danger btn-sm' onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
}

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
