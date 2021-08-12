import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './ErrorBoundary.styles';

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}
