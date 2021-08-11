/* eslint-disable no-alert */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import * as actions from '../../redux/user/user.actions';

import {
  SignUpContainer,
  SignUpTitle,
  FieldsetContainer,
  LegendContainer,
  InnerContainer,
 } from './SignUp.styles';

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(actions.signUpStart(userCredentials)),
});

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {
    displayName,
    email,
    password,
    confirmPassword,
  } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FieldsetContainer>
          <InnerContainer>
            <LegendContainer>
              Using this form you can sign up with your email and password.
            </LegendContainer>
            <FormInput
              name="displayName"
              type="text"
              value={displayName}
              label="Display Name"
              handleChange={handleChange}
              required
            />
            <FormInput
              name="email"
              type="email"
              value={email}
              label="Email"
              handleChange={handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              value={password}
              label="Password"
              handleChange={handleChange}
              required
            />
            <FormInput
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              label="Confirm Password"
              handleChange={handleChange}
              required
            />
            <CustomButton type="submit">SIGN UP</CustomButton>
          </InnerContainer>
        </FieldsetContainer>
      </form>
    </SignUpContainer>
  );
};

export default connect(null, mapDispatchToProps)(SignUp);
