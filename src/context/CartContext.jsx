import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { cartReducer, initialState } from '../reducers/cartReducer';

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //Añadir producto al carrito
  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });

  //Remover producto del carrito
  const removeProductInCart = product => dispatch({
    type: 'REMOVE_TO_PRODUCT_CART',
    payload: product,
  });

  //Limpiar carrito
  const clearToCart = () => dispatch({ type: 'CLEAR_TO_CART' });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearToCart,
        removeProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.element,
};
