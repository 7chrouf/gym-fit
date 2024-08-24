const Product = require("../../models/Product");
const verify = require("../../middlewares/vrifyToken");


module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await Product.findById(id);
    //console.log(product);
    let newProduct = await Product.updateOne(
      { _id: id },
      {
        $set: { pAvailable: !product.pAvailable },
      }
    );
    res.status(200).json({
      status: true,
      message: "Product was updated successfuly",
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ sastus: false, error });
  }
};
