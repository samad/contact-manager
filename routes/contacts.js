const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private

router.get('/', (req, res) => {
	res.send('Register a User');
});

// @route  GET api/contacts
// @desc   Add a new contact
// @access Private

router.post('/', (req, res) => {
	res.send('Add contact');
});

// @route  GET api/contacts/:id
// @desc   Update a contact
// @access Private

router.put('/:id', (req, res) => {
	res.send('Update contact');
});

// @route  GET api/contacts/:id
// @desc   Delete a new contact
// @access Private

router.delete('/:id', (req, res) => {
	res.send('Delete contact');
});

module.exports = router;
