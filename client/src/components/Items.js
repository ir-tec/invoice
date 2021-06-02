import React from "react";
import { connect } from "react-redux";

import "../scss/items.scss";
import NewItem from "./NewItem";
function Items(props) {
  const { state } = props;
  return (
    <div className="items-container">
      <div className="items-header">
        <h2>Description</h2>
        <h2>Price</h2>
        <h2>Qity</h2>
        <h2>Amount</h2>
        <button>
          <NewItem/>
        </button>
      </div>

      {state.map((product, index) => {
        return (
          <div key={index} className="item">
            <h2>{product.ProductName}</h2>
            <h2>{product.Description}</h2>
            <h2>{product.Qity}</h2>
            <h2>{product.price}$</h2>
            <h2>{product.Amount}$</h2>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Items);
