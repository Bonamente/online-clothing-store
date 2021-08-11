import React from 'react';

import { TextForScreenReader, ImageContainer } from './ContactPage.styles';

const ContactPage = () => (
  <>
    <TextForScreenReader>Contact page</TextForScreenReader>
    <ImageContainer>
      <img src={'https://i.ibb.co/3MqGrrM/RA.jpg'} alt='Rickroll meme' />
    </ImageContainer>
  </>
);

export default ContactPage;
