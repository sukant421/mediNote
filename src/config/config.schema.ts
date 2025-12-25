import * as Joi from 'joi';

export const configSchema = Joi.object({
    PORT: Joi.number().required().default(8000),
});
