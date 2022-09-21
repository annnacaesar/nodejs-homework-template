const RequestError = require('../../helpers');
const contactsSchema = require('../../schemas')
const contacts = require('../../models/contacts');

const updateContactCtrl = async (req, res, next) => {
	try {
		const { error } = contactsSchema.validate(req.body);
		if (error) {
			throw RequestError(400, error.message);
		}
		const { contactId } = req.params;
		const result = await contacts.updateContact(contactId, req.body);
		if (!result) {
			throw RequestError(404, 'Not found');
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
}

module.exports = updateContactCtrl;