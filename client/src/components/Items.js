import React from "react";
import { connect } from "react-redux";
import { findAllInvoices } from "../redux/actions";

import "../scss/items.scss";
import NewItem from "./NewItem";
function Items(props) {
  const { state } = props;
  React.useEffect(() => {
    findAllInvoices();
  }, [state]);

  console.log(state);
  return (
    <div className="items-container">
      <div className="items-header">
        <h2>Description</h2>
        <h2>Price</h2>
        <h2>Qity</h2>
        <h2>Amount</h2>
        <button>
          <NewItem />
        </button>
      </div>

      {state.length === 0
        ? null
        : state[0].map((product, index) => {
            return (
              <div key={index} className="item">
                <div className="itemTitle">
                  <h2>{product.productName}</h2>
                  <h2>{product.description}</h2>
                </div>
                <h2>{product.price}$</h2>
                <h2>{product.quantity}</h2>
                <h2>{product.amount}$</h2>
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
