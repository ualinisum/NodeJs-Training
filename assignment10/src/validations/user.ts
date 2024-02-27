import Joi from "joi";

const signupBodySchema = Joi.object({
    userName: Joi.string().min(3).max(30).required().messages({
        'string.min': 'Username must be at least {#limit} characters',
        'string.max': 'Username must be less than or equal to {#limit} characters',
        'any.required': 'Username is required',
        'string.empty': 'Username cannot be an empty',
    }),

    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().messages({
        'string.pattern.base': 'Password must be alphanumeric and between 3 to 30 characters',
        'any.required': 'Password is required',
        'string.empty': 'Password cannot be empty',
    }),

    repeat_password: Joi.ref("password"),

    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com"] },
    }).required().messages({
        'string.email': 'Email must be a valid email address',
        'any.required': 'Email is required',
        'string.empty': 'Email cannot be  empty',
    }),

    roles: { type: [String], },
});

const loginBodySchema = Joi.object({
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().messages({
        'any.required': 'Password is required',
        'string.empty': 'Password cannot be empty',
    }),
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com"] },
    }).required().messages({
        'string.email': 'Email must be a valid email address',
        'any.required': 'Email is required',
        'string.empty': 'Email cannot be empty',

    }),
});

export { signupBodySchema, loginBodySchema };
