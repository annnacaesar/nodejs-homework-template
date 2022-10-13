const { User } = require('../../models');
const { registerSchema } = require('../../schemas');
const { RequestError } = require('../../helpers');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
	const { error } = registerSchema.validate(req.body);
	if (error) {
		throw RequestError(400, error.message);
	}
	const { email, password, description, token } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		throw RequestError(409, 'Email in use');
	}
	const hashPassword = await bcrypt.hash(password, 10);
	const newUser = await User.create({
		email,
		password: hashPassword,
		description,
		token,
	});
	res.status(201).json({
		user: {
			email: newUser.email,
			subscription: 'starter',
		},
	});
};

module.exports = register;
