const Router = require("express").Router();
const DataBase = require("../models/invoice");

Router.get("/allInvoices", (req, res) => {
  const data = DataBase.find();
});

Router.post("/newInvoice",async (req, res) => {
const newItem={
productName:req.body.productName,
price:req.body.price,
count:req.body.count,
}


});

module.exports = Router;
