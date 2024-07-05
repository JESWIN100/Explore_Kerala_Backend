const Joi = require('joi');

const SignupJoi = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
        
    password: Joi.string().min(4).required(),
    
    confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
        'any.only': 'Passwords do not match'
    })
});

module.exports = SignupJoi;
