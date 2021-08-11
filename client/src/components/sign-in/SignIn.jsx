import React, { useState } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';

import * as actions from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  FieldsetContainer,
  LegendContainer,
  InnerContainer,
} from './SignIn.styles';

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(actions.googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(actions.emailSignInStart({ email, password })),
});

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FieldsetContainer>
          <InnerContainer>
            <LegendContainer>
              Sign in with your email and password or just hit the "Sign in with Google" button to sign in using your Google account.
            </LegendContainer>
            <FormInput
              name="email"
              type="email"
              value={email}
              label="email"
              handleChange={handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              value={password}
              label="password"
              handleChange={handleChange}
              required
            />
            <ButtonsBarContainer>
              <CustomButton type="submit">Sign in</CustomButton>
              <CustomButton
                type="button"
                onClick={googleSignInStart}
                isGoogleSignIn
              >
                Sign in with Google
              </CustomButton>
            </ButtonsBarContainer>
          </InnerContainer>
        </FieldsetContainer>
      </form>
    </SignInContainer>
  );
};

export default connect(null, mapDispatchToProps)(SignIn);
