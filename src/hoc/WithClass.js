import React from 'react';

const withClass = (WrappedComponent, className) => {
  // simple JS function with returns a functional component
  // could return a stateful component too
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default withClass;
