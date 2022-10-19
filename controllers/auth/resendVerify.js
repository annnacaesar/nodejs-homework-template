const { RequestError, createVerifyEmail, sendEmail } = require("../../helpers");
const { User } = require("../../models");
const { verifyEmailSchema } = require("../../schemas");

const resendVerify = async(req,res) => {
	const { error } = verifyEmailSchema.validate(req.body);
	if (error) {
		throw RequestError(400, error.message);
	}
	const {email} = req.body;
	const user = await User.findOne({email})

	if(!user) {
		throw RequestError(400, "Email not found")
	}

	const mail = await createVerifyEmail(email, user.verificationToken);
	await sendEmail(mail);

	res.json({
		message: "Verify email resend"
	})
}

module.exports = resendVerify;