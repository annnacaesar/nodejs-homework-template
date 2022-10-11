const { User } = require('../../models');
const { registerSchema } = require('../../schemas');
const { RequestError } = require('../../helpers');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar')

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
const avatarURL = gravatar.url(email)
	// const tmpDir = path.join(__dirname, '..', '..', 'tmp')
	// const {path: tempUpload, filename} = req.file;
	// resultUpload = path.join(tmpDir, filename)
	// await fs.rename(tempUpload, resultUpload)
	// const avatarURL = path.join( "avatars", filename);
	const hashPassword = await bcrypt.hash(password, 10);
	const newUser = await User.create({
		email,
		password: hashPassword,
		description,
		avatarURL,
		token,
	
	});
	res.status(201).json({
		user: {
			email: newUser.email,
			subscription: 'starter',
		},
	});
	// catch(error){ await fs.unlink(req.path);}
};

module.exports = register;
