import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeCheckoutButton';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TextForScreenReader,
  WarningContainer,
} from './CheckoutPage.styless';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <TextForScreenReader>Сheckout page</TextForScreenReader>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span aria-hidden="true">Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span aria-hidden="true">Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span aria-hidden="true">Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span aria-hidden="true">Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span aria-hidden="true">Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
    <TotalContainer>
      <span>{`TOTAL: $${total}`}</span>
    </TotalContainer>
    <WarningContainer className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

export default connect(mapStateToProps)(CheckoutPage);
