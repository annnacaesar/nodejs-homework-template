const RequestError = require('../../helpers');
const {contactsSchema} = require('../../schemas')
const Contact = require('../../models')

const updateContactCtrl = async (req, res, next) => {
	try {
		const { error } = contactsSchema.validate(req.body);
		if (error) {
			throw RequestError(400, error.message);
		}
		const { contactId } = req.params;
		const result = await Contact.findByIdAndUpdate(contactId, req.body, {new:true});
		if (!result) {
			throw RequestError(404, 'Not found');
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
}

module.exports = updateContactCtrl;