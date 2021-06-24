import React from 'react';

import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      id="form-input"
      className="form-input"
      onChange={handleChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
    {label && (
      <label
        htmlFor="form-input"
        className={`${(otherProps.value.length > 0) ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
