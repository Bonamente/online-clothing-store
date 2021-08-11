import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import { SignInAndSignUpContainer, TextForScreenReader} from './SignInAndSignUpPage.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <TextForScreenReader>Login and registration page</TextForScreenReader>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
