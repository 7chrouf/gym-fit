const Cart = require("../../models/Cart");
module.exports = async (req, res) => {
  try {
    const { pId } = req.params;

    await Cart.findByIdAndUpdate(pId, { $inc: { qte: 1 } });

    res.status(204).end();
  } catch (error) {
    if (error) {
      if (error) throw error;
      res.status(400).json({ status: false, error });
    }
  }
};
