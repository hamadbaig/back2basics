const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const productRoutes = require("./routes/productRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use("/api/products", productRoutes);
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
