import CartActionTypes from './cart.types';

// eslint-disable-next-line import/prefer-default-export
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
