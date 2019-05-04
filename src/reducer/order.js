const InitialState = {
  orders: []
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return { ...state, orders: action.data };
    case "ADD_ORDER":
      return { ...state, orders: [...(state.orders || []), action.data] };
    default:
      return state;
  }
};
