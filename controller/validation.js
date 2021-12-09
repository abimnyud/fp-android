const Joi = require('joi');

const registerValidation = data => {
    // Schema for register validation
    const schema = Joi.object({
        name: Joi.string()
            .min(5)
            .required(),
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

const loginValidation = data => {
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

exports.registerValidation = registerValidation;
exports.loginValidation = loginValidation;