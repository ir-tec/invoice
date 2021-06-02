const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  productName: String,
  count: Number,
  price: Number,
});

const invoiceModel = mongoose.model("invoiceModel", invoiceSchema);

module.exports = invoiceModel;
