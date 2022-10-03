const RequestError = require('../../helpers');
const {contactsSchema} = require('../../schemas')
const Contact = require('../../models')


const addContactCtrl = async (req, res, next) => {
	try {
    console.log(req.body);
		const { error } = contactsSchema.validate(req.body);
		if (error) {
			throw RequestError(400, error.message);
		}
		const result = await Contact.create(req.body);
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
}

module.exports = addContactCtrl;