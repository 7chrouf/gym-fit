const Order = require("../../models/Order");
module.exports = async (req, res) => {
  try {
    const { id } = req.auth;
    const data = await Order.find({ }).populate(
      "cart.productId customerId","-password -cratedAt -updatedAt"
    );
    res.status(200).json({ status: true, data });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
