const InitialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    bacon: 0,
    cheese: 0
  },
  totalPrice: 4
};

const INGREDIENTS_PRICES = {
  salad: 0.4,
  cheese: 0.6,
  meat: 1.5,
  bacon: 0.9
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.data]: state.ingredients[action.data] + 1
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.data]
      };
    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.data]: state.ingredients[action.data] - 1
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.data]
      };
    case "RESET_BURGER":
      return InitialState;
    default:
      return state;
  }
};
