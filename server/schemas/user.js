import Joi from 'joi';

const userSchema = {
  email: Joi.string().email().required().messages({
    'any.required': 'Epost må fylles ut',
    'string.email': 'Bruk riktig format på epost',
    'string.empty': 'Fyll ut epost',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Passord må fylles ut',
    'string.min': 'Må bestå av minst 8 tall og bokstaver',
    'string.empty': 'Fyll ut passord',
  }),
};

export const reqisterSchema = Joi.object().keys({
  name: Joi.string(),
  ...userSchema,
}).options({ abortEarly: false });

export const loginSchema = Joi.object().keys({
  ...userSchema,
}).options({ abortEarly: false });
