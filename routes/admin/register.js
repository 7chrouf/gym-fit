const Admin = require("../../models/Admin");
const Customer = require("../../models/Customer");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    // verify the email
    const verfyEmail = await Admin.findOne({ email });
    if (verfyEmail) {
      return res.status(401).json({
        status: false,
        message: "this email is already exists, please try another one",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newAdmin = new Admin({
      fullName,
      email,
      password: hashedPassword,
    });
    await newAdmin.save();
    res
      .status(200)
      .json({ status: true, message: "Admin was created successfully" });
  } catch (error) {
    if (error) throw err;
    res.status(401).json({ status: false, error });
  }
};
