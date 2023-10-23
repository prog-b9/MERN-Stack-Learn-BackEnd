const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ProductsRouter = require("./routes/ProductRoute");
// Connection With MongoDB
mongoose
  .connect("mongodb://localhost:27017/MERN-Stack-Learn")
  .then(() => console.log("Connection MongoDB Is Working"))
  .catch((error) => console.log("Connection MongoDB Is Not Working", error));
// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
app.use("/api/products", ProductsRouter);
// Defults
app.all("*", (req, res) => {
  res.json({ message: "Page Not Found 404" });
});
// Switch On Port
app.listen(PORT, () => {
  console.log(`Server Is Working ${PORT}`);
});
