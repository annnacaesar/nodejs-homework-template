const RequestError = require('../../helpers');
const contacts = require('../../models/contacts');

const removeContactCtrl = async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const result = await contacts.removeContact(contactId);
		if (!result) {
			throw RequestError(404, 'Not found');
		}
		res.json({ message: 'Book remove' });
	} catch (error) {
		next(error);
	}
}

module.exports = removeContactCtrl;