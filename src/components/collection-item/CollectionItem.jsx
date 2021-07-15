import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './CollectionItem.styles';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(actions.addItem(item)),
});

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{`$${price}`}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
