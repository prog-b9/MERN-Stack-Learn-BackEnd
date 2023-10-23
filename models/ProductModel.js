const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  size: { type: String, required: true },
  date: { type: String, default: new Date().toLocaleString() },
});
const Products = mongoose.model("products", Schema);
const validationCreateProducts = (body) => {
  const validationSchema = Joi.object({
    name: Joi.string().min(1).max(255).required(),
    description: Joi.string().min(1).max(255).required(),
    price: Joi.string().min(1).max(20).required(),
    size: Joi.string().min(1).max(255).required(),
  });

  return validationSchema.validate(body);
};
module.exports = {
  Products,
  validationCreateProducts,
};
