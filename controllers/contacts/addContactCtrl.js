const RequestError = require('../../helpers');
const contactsSchema = require('../../schemas')
const contacts = require('../../models/contacts');

const addContactCtrl = async (req, res, next) => {
	try {
    console.log(req.body);
		const { error } = contactsSchema.validate(req.body);
		if (error) {
			throw RequestError(400, error.message);
		}
		const result = await contacts.addContact(req.body);
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
}

module.exports = addContactCtrl;