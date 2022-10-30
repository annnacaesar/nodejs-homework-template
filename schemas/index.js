const {contactSchema} = require('./contactSchema');
const {updateFavoriteSchema} = require('./contactSchema');
const {registerSchema} = require('./registerSchema');
const {loginSchema} = require('./loginSchema');
const {verifyEmailSchema} = require('./verifyEmailSchema');


module.exports = {
	contactSchema,
	updateFavoriteSchema,
	registerSchema,
	loginSchema,
	verifyEmailSchema,
};
