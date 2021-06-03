import * as actionTypes from "./actionTypes";

const initialState = [

];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INVOICE:
      return {
        newProduct: action.payload,
      };
    case actionTypes.ALL_INVOICES:
      return [ action.payload ];
    case actionTypes.DELETE_INVOICE:
      return {
        newList: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
