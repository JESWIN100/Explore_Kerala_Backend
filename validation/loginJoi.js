const Joi = require('joi');

const loginJoi = Joi.object({
   
    //name: Joi.string().min(3).max(30).required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
        
    password: Joi.string().min(4).required(),
    
    
});

module.exports = loginJoi;
