const product = require("../models/productModel");

const uploadUrl = "http://localhost:4000/public";

//======================================= Add product ============================================
const postProperty = async (req, res) => {
  const { title, price } = req.body;

  const reqFiles = [];
  req.files.forEach((file) => {
    reqFiles.push(uploadUrl + "/uploads/" + file.filename);
  });

  if (!(title && price)) {
    return res.status(400).send("All input is required");
  }

  const createProduct = await product.create({ title, price, image: reqFiles });

  res.json({
    result: createProduct,
    message: "The product was successfully created",
  });
};

module.exports = postProperty;
