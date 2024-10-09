const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve products",
      error: error.message,
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, description, imageUrl } = req.body;
    const product = new Product({ name, description, imageUrl });
    await product.save();
    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add product",
      error: error.message,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the product exists
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Delete the product
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message,
    });
  }
};
exports.updateProductByName = async (req, res) => {
  try {
    const { name } = req.params;
    const { description, imageUrl } = req.body;
    const product = await Product.findOneAndUpdate(
      { name },
      { description, imageUrl },
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};
exports.searchProductByName = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Product name is required" });
    }

    const product = await Product.findOne({ name });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product found successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve product",
      error: error.message,
    });
  }
};
