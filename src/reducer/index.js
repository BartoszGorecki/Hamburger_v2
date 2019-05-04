import burgerReducer from "./burger";
import orderReducer from "./order";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  burger: burgerReducer,
  orders: orderReducer
});

export default rootReducer;
