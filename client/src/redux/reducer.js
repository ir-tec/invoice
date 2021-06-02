import * as actionTypes from "./actionTypes";

const initialState = [
  {
    ProductName: "Product1",
    Description: "description",
    Qity: 2,
    price: 200,
    Amount: 400,
  },
];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        newProduct: action.payload,
      };
    case actionTypes.ALL_USER:
      return {
        productList: action.payload,
      };
    case actionTypes.DELETE_USER:
      return {
        newList: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
