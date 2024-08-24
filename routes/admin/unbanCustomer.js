const Customer = require("../../models/Customer");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let newCustomer = await Customer.findByIdAndUpdate(
      id,
      {
        $set: { isBanned:false },
      },
      { new: true }
    );
    res.status(200).json({
      status: true,
      message: "Customer was unbanned successfuly",
      data: newCustomer,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ satuts: false, error });
  }
};
