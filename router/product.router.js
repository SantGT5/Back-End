const router = require("express").Router();

const ProductModel = require("../models/Product.model");

router.post("/adicionar-produto", async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);

    const response = await ProductModel.create({
      product: formData,
    });

    return res.status(200).json(response);

  } catch (err) {
    console.log(err.response);
    return res.status(400).json({ msg: "O produto nao foi criado." });
  }
});

module.exports = router;
