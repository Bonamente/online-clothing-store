import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './MenuItem.styles';

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  match,
  linkUrl,
}) => {
  const handleClick = () => history.push(`${match.url}${linkUrl}`);

  return (
    <MenuItemContainer to="#" size={size} onClick={handleClick}>
      <BackgroundImageContainer className="background-image" imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
