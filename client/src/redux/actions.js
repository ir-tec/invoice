import axios from "axios";
import * as actionTypes from "./actionTypes";
import Store from "./Store";

const allInvoices = (invoices) => {
  return {
    type: actionTypes.ALL_USER,
    payload: invoices,
  };
};

const newInvoice = (invoice) => {
  return {
    type: actionTypes.ADD_USER,
    payload: invoice,
  };
};

export const findAllInvoices = () => {
  axios
    .get("http://localhost:4000/allInvoices")
    .then((res) => {
      Store.dispatch(allInvoices(res.data));
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const addNewInvoice = (newInvoince) => {
  axios
    .post("http://localhost:4000/newInvoice", newInvoince)
    .then((res) => {
      Store.dispatch(newInvoice(res.data));
      console.log(res.status);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
