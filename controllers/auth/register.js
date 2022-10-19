const { User } = require('../../models');
const { registerSchema } = require('../../schemas');
const { RequestError, sendEmail, createVerifyEmail } = require('../../helpers');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

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
	const verificationToken = uuidv4();
	const newUser = await User.create({
		email,
		password: hashPassword,
		description,
		token,
		verificationToken
	});

	const mail = createVerifyEmail(email, verificationToken)
	await sendEmail(mail);

	res.status(201).json({
		user: {
			email: newUser.email,
			subscription: 'starter',
			verificationToken: newUser.verificationToken,
		},
	});
};

module.exports = register;
