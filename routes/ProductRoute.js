const router = require("express").Router();
const ProductController = require("../controllers/ProductController");
router.get("/", ProductController.getProducts);
router.post("/", ProductController.createProduct);
router.delete("/", ProductController.deletetProducts);

module.exports = router;
