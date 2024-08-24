const Customer = require("../../models/Customer");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { fullName, email, password, phone, address } = req.body;
    // verify the email
    const verfyEmail = await Customer.findOne({ email });
    if (verfyEmail) {
      return res.status(401).json({
        status: false,
        message: "this email is already exists, please try another one",
      });
    }
    // verify the phone

    const verfyPhone = await Customer.findOne({ phone });
    if (verfyPhone) {
      return res.status(401).json({
        status: false,
        message: "this Phone is already taken, please try another one",
      });
    }
     const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newCustomer = new Customer({
    fullName,
    email,
    password: hashedPassword,
    phone,
    address,
    });
    await newCustomer.save();
    res
      .status(200)
      .json({ status: true, message: "Customer was created successfully" });
  } catch (error) {
    if (error) throw err;
    res.status(401).json({ status: false, error });
  }
};
