/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/CollectionPreview';

import './CollectionsOverview.styles.scss';

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />))
    }
  </div>
);

export default connect(mapStateToProps)(CollectionsOverview);
