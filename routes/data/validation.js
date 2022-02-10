const Joi = require('joi');

const createDataSchema = Joi.object({
    number: Joi.string().min(15).max(300).required(),
    category: Joi.string().min(4).max(4).optional(),
});

const updateDataSchema = Joi.object({
    category: Joi.string().min(4).max(4).optional(),
});

const validate = async (schema, obj, next) => {
    try {
        await schema.validateAsync(obj);
        next();
    } catch (err) {
        next({ message: err.message.replace(/"/g, '') });
    }
};

module.exports = {
    validateCreateData: (req, res, next) => validate(createDataSchema, req.body, next),
    validateUpdateData: (req, res, next) => validate(updateDataSchema, req.body, next),
};
