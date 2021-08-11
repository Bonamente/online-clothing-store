import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItem';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
  TextForScreenReader,
} from './CollectionPage.styles';

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TextForScreenReader>Catalog collection page</TextForScreenReader>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default connect(mapStateToProps)(CollectionPage);
