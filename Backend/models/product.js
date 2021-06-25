var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
  team1:String,
  team2:String,
  date:String,
  city:String
});
var Product = mongoose.model("data", productSchema);

function validateProduct(data) {
  const schema = Joi.object({
    team1: Joi.string().min(3).max(100).required(),
    team2: Joi.string().min(3).max(100).required(),
    date: Joi.string().required(),
    city:Joi.string().required().min(3).max(100),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
