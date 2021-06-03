const Router = require("express").Router();
const DataBase = require("../models/invoice");

Router.get("/allInvoices", async (req, res) => {
  const data = await DataBase.find();
  console.log(data);
  res.json(data);
});

Router.post("/newInvoice", async (req, res) => {
  const reqItem = {
    productName: req.body.productName,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    amount: req.body.amount,
  };
  const newInvoice = new DataBase(reqItem);
  const newItem = await newInvoice.save();
  res.json(newItem);
});

module.exports = Router;
