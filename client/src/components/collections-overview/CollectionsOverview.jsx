/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/CollectionPreview';

import CollectionsOverviewContainer from './CollectionsOverview.styles';

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />))
    }
  </CollectionsOverviewContainer>
);

export default connect(mapStateToProps)(CollectionsOverview);
