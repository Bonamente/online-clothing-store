import React from 'react';

import Directory from '../../components/directory/Directory';

import { HomePageContainer, TextForScreenReader } from './HomePage.styles';

const HomePage = () => (
  <HomePageContainer>
    <TextForScreenReader>Welcome to online clothing store!</TextForScreenReader>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
