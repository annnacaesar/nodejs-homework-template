const RequestError = require('../../helpers');
const { updateFavoriteSchema } = require('../../schemas');
const Contact = require('../../models');

const updateContactFavoriteCtrl = async (req, res, next) => {
	try {
		const { error } = updateFavoriteSchema.validate(req.body);
		if (error) {
			throw RequestError(400, "Missing field favorite");
		}
		const { contactId } = req.params;
		const result = await Contact.findByIdAndUpdate(contactId, req.body, {
			new: true,
		});
		if (!result) {
			throw RequestError(404, 'Not found');
		}
		res.json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = updateContactFavoriteCtrl;
