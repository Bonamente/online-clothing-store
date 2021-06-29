import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import './SignInAndSignUpPage.styles.scss';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
