const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
	const mail = {
		to: email,
		subject: 'Підтвердити мило',
		html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}" target="_blank" rel="noopener noreferrer"> Підтвердити реєстрацію!</a>`,
	};
	return mail;
};

module.exports = createVerifyEmail;
