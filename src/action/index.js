import axios from "../components/AxiosOrders";

export const addIngredient = data => {
  return { type: "ADD_INGREDIENT", data };
};
export const removeIngredient = data => {
  return { type: "REMOVE_INGREDIENT", data };
};
// ORDERS
export const fetchOrders = () => dispatch => {
  return axios.get("/orders.json").then(({ data }) => {
    dispatch(setOrders(data));
  });
};

const setOrders = data => {
  return {
    type: "GET_ORDERS",
    data
  };
};
// add order
export const addOrderFB = data => dispatch => {
  return axios.post("/orders.json", data).then(res => {
    dispatch(addOrder(data));
  });
};

const addOrder = data => {
  return {
    type: "ADD_ORDER",
    data
  };
};
///
export const resetBurger = () => {
  return {
    type: "RESET_BURGER"
  };
};
