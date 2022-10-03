const RequestError = require('../../helpers');
const Contact = require('../../models')

const removeContactCtrl = async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const result = await Contact.findByIdAndRemove(contactId);
		if (!result) {
			throw RequestError(404, 'Not found');
		}
		res.json({ message: 'Book remove' });
	} catch (error) {
		next(error);
	}
}

module.exports = removeContactCtrl;