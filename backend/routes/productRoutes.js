const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  updateProductByName,
  searchProductByName,
  deleteProduct,
} = require("../controllers/productController");

router.get("/getAllProducts", getAllProducts);

router.post("/add", addProduct);
router.post("/search", searchProductByName);
router.delete("/deleteProduct/:id", deleteProduct);

router.put("/update/:name", updateProductByName);

module.exports = router;
