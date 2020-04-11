const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../model/User');
const Contact = require('../model/Contact');
// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private

router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
		res.json(contacts);
	} catch (err) {
		console.error(err);
		res.status(500).send('Server Error');
	}
});

// @route  GET api/contacts
// @desc   Add a new contact
// @access Private

router.post('/', [auth, [check('name', 'name is required').notEmpty()]], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { name, email, phone, type } = req.body;
	try {
		const newContact = new Contact({
			name,
			email,
			phone,
			type,
		});

		const contact = await newContact.save();

		res.json(contact);
	} catch (err) {
		console.error(err.message);
		res.status(500), send('Server Error');
	}
});

// @route  GET api/contacts/:id
// @desc   Update a contact
// @access Private

router.put('/:id', async (req, res) => {
	const { name, email, phone, type } = req.body;

	// Build contact object
	const contactFields = {};
	if (name) contactFields.name = name;
	if (email) contactFields.email = email;
	if (phone) contactFields.phone = phone;
	if (type) contactFields.type = type;

	try {
		let contact = await Contact.findById(req.params.id);

		if (!contact) res.status(404).json({ msg: 'Contact Not Found' });

		// Make sure user owns contact
		if (contact.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		contact = await Contact.findByIdAndUpdate(
			req.params.id,
			{ $set: contactFields },
			{ new: true },
		);

		res.json(contact);
	} catch (err) {
		console.error(err.message);
		res.status(500), send('Server Error');
	}
});

// @route  GET api/contacts/:id
// @desc   Delete a new contact
// @access Private

router.delete('/:id', async (req, res) => {
	try {
		let contact = await Contact.findById(req.params.id);

		if (!contact) res.status(404).json({ msg: 'Contact Not Found' });

		// Make sure user owns contact
		if (contact.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		await Contact.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Contact removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500), send('Server Error');
	}
});

module.exports = router;
