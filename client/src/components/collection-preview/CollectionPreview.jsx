/* eslint-disable object-curly-newline */
import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/CollectionItem';
import {
  CollectionPreviewContainer,
  LinkContainer,
  TitleContainer,
  PreviewContainer,
 } from './CollectionPreview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer >
    <LinkContainer to="#" onClick={() => history.push(`${match.path}/${routeName}`)}>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
    </LinkContainer>
    <PreviewContainer>
      {items
        .filter((_item, index) => index < 4)
        .map((item) => <CollectionItem key={item.id} item={item} />)}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
