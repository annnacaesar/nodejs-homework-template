const Contact = require('../../models/contact');

const listContactsCtrl = async (req, res, next) => {
	try {
		const { _id: owner } = req.user;
		const { page = 1, limit = 10, favorite } = req.query;
		const skip = (page - 1) * limit;
		if (favorite) {
			const result = await Contact.find({ owner, favorite }, '-__v', {
				skip,
				limit,
			});
			res.json(result);
		} else {
			const result = await Contact.find({ owner }, '-__v', { skip, limit });
		res.json(result);
		}
		
	} catch (error) {
		next(error);
	}
};

module.exports = listContactsCtrl;
