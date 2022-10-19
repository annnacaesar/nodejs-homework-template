const Joi = require("joi");

const verifyEmailSchema = Joi.object({
	email: Joi.string().required(),
})

module.exports = verifyEmailSchema;