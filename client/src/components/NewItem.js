import React from "react";
import Popup from "reactjs-popup";
import "../scss/new-item.scss";
import { addNewInvoice } from "../redux/actions";
function NewItem() {
  return (
    <Popup
      contentStyle={{
        backgroundColor: "white",
        width: "40%",
        height: "fit-content",
        padding: "1%",
        fontSize: "12px",
        fontWeight: "1",
        boxShadow: "0 0 5px #333",
      }}
      trigger={<span style={{ width: "100%" }}>ADD</span>}
      position="top right"
    >
      <form
        className="newItemForm"
        onSubmit={(e) => {
          addNewInvoice(e.target.value);
        }}
      >
        <div className="fieldItem">
          <label htmlFor="productName">Product Name :</label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product Name..."
          />
        </div>
        <div className="fieldItem">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            id="Description"
            name="Description"
            placeholder="Description..."
          />
        </div>
        <div className="fieldItem">
          <label htmlFor="price">Price :</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price... "
          />
        </div>
        <div className="fieldItem">
          <label htmlFor="Quantity">Quantity :</label>
          <input
            type="number"
            name="Quantity"
            id="Quantity"
            placeholder="Quantity... "
          />
        </div>
        <div className="submitButton">
          <button type="submit">Add</button>
        </div>
      </form>
    </Popup>
  );
}

export default NewItem;
