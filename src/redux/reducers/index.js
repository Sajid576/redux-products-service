import { combineReducers } from "redux";
import { productsReducer, selectProductReducer } from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  selectproduct: selectProductReducer,
});
export default reducers;
