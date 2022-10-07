const {RequestError} = require('../../helpers');
const {contactSchema} = require('../../schemas')
const Contact = require('../../models/contact')


const addContactCtrl = async (req, res, next) => {
	try {
		const { error } = contactSchema.validate(req.body);
		if (error) {
			throw RequestError(400, error.message);
		}
		const {_id: owner} = req.user;
		const result = await Contact.create({...req.body, owner});
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
}

module.exports = addContactCtrl;