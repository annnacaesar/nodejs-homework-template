const RequestError = require('../../helpers');
const contacts = require('../../models/contacts');

const getContactByIdCtrl = async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const result = await contacts.getContactById(contactId);
		if (!result) {
			throw RequestError(404, 'Not found');
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
}

module.exports = getContactByIdCtrl;