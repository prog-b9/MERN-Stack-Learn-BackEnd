const {
  Products,
  validationCreateProducts,
} = require("../models/ProductModel");

const getProducts = async (req, res) => {
  try {
    const getProducts = await Products.find();

    res.json({
      data: getProducts,
      count: getProducts.length,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
const createProduct = async (req, res) => {
  try {
    const { name, description, price, size } = req.body;

    const { error } = validationCreateProducts(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const newProduct = new Products({
      name: name,
      description: description,
      price: price,
      size: size,
    });

    await newProduct.save();

    res.json({ message: "Create Product Successfuly", data: newProduct });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
const deletetProducts = async (req, res) => {
  try {
    const deletetProducts = await Products.deleteMany();

    if (deletetProducts.deletedCount == 0) {
      return res.json({ message: "Products Is Not Founds" });
    }

    res.json({
      message: "Delete Products Successfuly",
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
module.exports = {
  getProducts,
  createProduct,
  deletetProducts,
};
