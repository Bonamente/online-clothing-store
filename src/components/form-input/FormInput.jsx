/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel } from './FormInput.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer
      id={`form-input-${label}`}
      onChange={handleChange}
      {...otherProps}
    />
    {label && (
      <FormInputLabel
        htmlFor={`form-input-${label}`}
        className={`${(otherProps.value.length > 0) ? 'shrink' : ''}`}
      >
        {label}
      </FormInputLabel>
    )}
  </GroupContainer>
);

export default FormInput;
