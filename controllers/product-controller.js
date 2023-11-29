const product = require("../models/productModel");

const postProperty = async (req, res) => {
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

module.exports = postProperty;
