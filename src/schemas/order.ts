import Joi from 'joi';

const orderSchema = Joi.object({
  userId: Joi.number().min(1).required(),
  productIds: Joi.array().items(Joi.number().required()).required(),
});

export default orderSchema;