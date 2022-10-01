const Contact = require('../../models')

const listContactsCtrl = async (req, res, next) => {
	try {
		const result = await Contact.find();
		res.json(result);
	} catch (error) {
		next(error);
	}
}

module.exports = listContactsCtrl;