const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { loginSchema } = require('../../schemas');
const { RequestError } = require('../../helpers');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
	const { error } = loginSchema.validate(req.body);
	if (error) {
		throw RequestError(400, error.message);
	}
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		throw RequestError(401, 'Email not found');
	}

	if(!user.verify){
		throw RequestError(401, "Email not verify")
	}

	const passwordCompare = await bcrypt.compare(password, user.password);
	if (!passwordCompare) {
		throw RequestError(401, 'Email or password is wrong');
	}

	

	const payload = {
		id: user._id,
	};
	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '10h' });
	await User.findByIdAndUpdate(user._id, { token });
	res.json({
		token,
		user: {
			email: user.email,
			subscription: user.subscription,
		},
	});
};

module.exports = login;

/*
відповідь повина мати статус-код 200
у відповіді повинен повертатися токен
у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String
*/