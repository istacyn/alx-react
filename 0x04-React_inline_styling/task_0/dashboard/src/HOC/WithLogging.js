import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Define the display name for the returned component class.
  WithLoggingComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

  return WithLoggingComponent;
};

// Helper function to get the display name of the component
const getDisplayName = (WrappedComponent) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

export default WithLogging;