import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon,
  TextForScreenReader,
} from './CartIcon.styles';

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden()),
});

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <TextForScreenReader>Open/close your cart</TextForScreenReader>
    <ShoppingIcon className="shopping-icon" aria-hidden="true"/>
    <ItemCountContainer>
      <TextForScreenReader>The number of products in the cart is</TextForScreenReader>
      {itemCount}
    </ItemCountContainer>
  </CartIconContainer>
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
