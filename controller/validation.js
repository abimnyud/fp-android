const Joi = require('joi');

exports.registerValidation = data => {
    // Schema for register validation
    const schema = Joi.object({
        name: Joi.string().pattern(/^[a-zA-Z ]*$/)
            .min(5)
            .required()
            .messages({
                "string.pattern.base": `"name" must be alphabetical`
            }),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(8)
            .required(),
        /* repeat_password: Joi.ref('password') */
    });

    // Validation
    return schema.validate(data);
}

exports.loginValidation = data => {
    // Schema for login validation
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(8)
            .required(),
        /* repeat_password: Joi.ref('password') */
    });

    // Validation
    return schema.validate(data);
}