const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new Schema({
  pName: {
    type: String,
    require: true,
  },
  pPrice: {
    type: Number,
    require: true,
  },
  pDesc: String,
  pAvailable: {
    type: Boolean,
    default: true,
  },
  pImg: {
    type: String,
    default: "https://cdn-icons-png.freepik.com/512/69/69840.png",
  },
});
module.exports=Product= mongoose.model("products",
    productSchema);