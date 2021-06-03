import axios from "axios";
import * as actionTypes from "./actionTypes";
import Store from "./Store";

const allInvoices = (invoices) => {
  return {
    type: actionTypes.ALL_INVOICES,
    payload: invoices,
  };
};

const newInvoice = (invoice) => {
  return {
    type: actionTypes.ADD_INVOICE,
    payload: invoice,
  };
};

export const findAllInvoices =  () => {
  axios
    .get("http://localhost:4000/allInvoices")
    .then((res) => {
      Store.dispatch(allInvoices(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const addNewInvoice = (newInvoince) => {
  axios
    .post("http://localhost:4000/newInvoice", newInvoince)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
