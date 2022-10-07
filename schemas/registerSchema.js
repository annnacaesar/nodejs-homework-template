const Joi = require('joi');

const registerSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().min(6).required(),
	description:  Joi.string(),
	token: Joi.string(),
})

module.exports = {
	registerSchema
};