import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  ItemImage,
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
    <CollectionItemContainer tabIndex={0}>
      <ItemImage className="image" src={imageUrl} alt={name} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{`$${price}`}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted tabIndex={0}>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
