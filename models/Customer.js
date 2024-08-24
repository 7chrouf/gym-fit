const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: { type: String,
       required: true },
    password: {
      type: String,
      require: true,
    },
    phone: { type: String, 
      require: true },
    address: {
      type: String,
      require: true,
    },
    isBanned:{
      type: Boolean,
      default:false,
    },
    //isVerified: {
      //type: Boolean,
      //default: false,
    //},
  },
  { timestamps: true }
);
module.exports = Customer = mongoose.model("customers", customerSchema);
