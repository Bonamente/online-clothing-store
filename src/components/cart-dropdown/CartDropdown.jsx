import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './CartDropdown.styles';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropdown = ({ cartItems, dispatch, history }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        (cartItems.length > 0)
          ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
          : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

export default withRouter(connect(mapStateToProps)(CartDropdown));
