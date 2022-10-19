const {BASE_URL} = process.allowedNodeEnvironmentFlags

const createVerifyEmail = (email, verificationToken) => {
	const mail = {
		to: email,
		subject:'Підтвердити мило',
		html: `<a target="_blank" href="http://${BASE_URL}/api/auth/verify/${verificationToken}"`
	}
	return mail;
}

module.exports = createVerifyEmail;
