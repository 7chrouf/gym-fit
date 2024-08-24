const Customer = require("../../models/Customer");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { password, newEamil } = req.body;
    let customer = await Customer.findById(id);
    const test = bcrypt.compareSync(password, customer.password);
    if (!test) {
      return res
        .status(401)
        .json({ status: false, message: "this operation is not allowed" });
    }
    
    await Customer.findByIdAndUpdate(id, {
      $set: { email: newEamil },
    });
    res
      .status(200)
      .json({ status: true, message: "Email was updated successfuly" });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
