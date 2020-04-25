import React, { useReducer } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTEXT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACT,
	CLEAR_FILTER,
} from '../types';

function ContactState(props) {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Jill Johnson',
				email: 'jill@gmail.com',
				phone: '111-111-1111',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Billy White',
				email: 'billy@gmail.com',
				phone: '222-222-2222',
				type: 'personal',
			},
			{
				id: 3,
				name: 'John Doe',
				email: 'jdoe@gmail.com',
				phone: '444-222-1111',
				type: 'professional',
			},
			{
				id: 4,
				name: 'Harry White',
				email: 'harry@yahoo.com',
				phone: '888-111-9999',
				type: 'personal',
			},
			{
				id: 5,
				name: 'Will Phelps',
				email: 'will@gmail.com',
				phone: '555-555-8888',
				type: 'professional',
			},
		],
		current: null,
		filtered: null,
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	// Add Contact
	const addContact = (contact) => {
		contact.id = uuid_v4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	// Delete Contact
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTEXT, payload: id });
	};

	// Set Current Contact
	const setCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	// Update Contact
	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};

	// Filter Contacts
	const filterContact = (text) => {
		dispatch({ type: FILTER_CONTACT, payload: text });
	};

	// Clear Filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<ContactContext.Provider
			value={{
				current: state.current,
				contacts: state.contacts,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContact,
				clearFilter,
			}}>
			{props.children}
		</ContactContext.Provider>
	);
}

export default ContactState;
