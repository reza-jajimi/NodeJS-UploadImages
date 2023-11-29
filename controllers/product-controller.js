const product = require("../models/productModel");

const postProduct = async (req, res) => {
  const { title, price, description } = req.body;

  const reqFiles = [];
  req.files.forEach((file) => {
    reqFiles.push(process.env.UPLOAD_URL + "/uploads/" + file.filename);
  });

  if (!(title && price && description)) {
    return res.status(400).send("All input is required");
  }

  const createProduct = await product.create({
    title,
    price,
    description,
    image: reqFiles,
  });

  res.json({
    result: createProduct,
    message: "The product was successfully created",
  });
};

const getProducts = async (req, res) => {
  const allProducts = await product.find().exec();

  if (!allProducts) {
    return res.sendStatus(400);
  }

  if (allProducts === 0) {
    return res.json("There are no products available.");
  }

  return res.json({
    result: allProducts,
    message: "All product was successfully loaded",
  });
};

module.exports = { postProduct, getProducts };
