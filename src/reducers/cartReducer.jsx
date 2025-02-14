export const initialState = [];
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
  case 'ADD_TO_CART': {
    const { id } = actionPayload;
    const productInCartIndex = state.findIndex((item) => item.id === id);

    if (productInCartIndex >= 0) {
      const newState = structuredClone(state); // clona profundamente el objeto
      newState[productInCartIndex].quantity += 1;
      return newState;
    }

    return [
      ...state,
      {
        ...actionPayload, //product
        quantity: 1,
      },
    ];
  }
  case 'REMOVE_TO_PRODUCT_CART': {
    const { id } = actionPayload;
    return state.filter((item) => item.id !== id);
  }
  case 'CLEAR_TO_CART':
    return initialState;
  }

  return state;
};