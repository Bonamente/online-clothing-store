import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './CartDropdown.styles.scss';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropdown = ({ cartItems, dispatch, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        (cartItems.length > 0)
          ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
          : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

export default withRouter(connect(mapStateToProps)(CartDropdown));
