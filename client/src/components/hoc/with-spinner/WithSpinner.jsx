/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Spinner from '../../spinner/Spinner';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => (
  isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
);

export default WithSpinner;
