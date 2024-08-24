const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: { type: String, required: true },
    password: {
      type: String,
      require: true,
    },
  isMainAdmin:{
    type:Boolean,
    default: true,
  },
  isSubAdmin: {
    type:Boolean,
    default:false,
  },
  },
  { 
    timestamps: true 

  }
);
module.exports = Admin = mongoose.model("admins", adminSchema);
