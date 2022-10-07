const {RequestError} = require('../../helpers');
const Contact = require('../../models/contact');

const getContactByIdCtrl = async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const result = await Contact.findById(contactId);
		if (!result) {
			throw RequestError(404, 'Not found');
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
}

module.exports = getContactByIdCtrl;