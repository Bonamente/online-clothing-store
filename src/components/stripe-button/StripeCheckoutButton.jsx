/* eslint-disable no-alert */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JCGCXFmf1pWj2AJlvHbJ6jEoik1Q5LjRf03nvcXHTiY6oU88fKNslKYQT8YALqzhKVBAG85GSlb3p6lpxSttDsq00iV62wzGv';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Online clothing store"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
