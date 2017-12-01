import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//   // simple JS function with returns a functional component
//   // could return a stateful component too
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

const withClass = (WrappedComponent, className) => {
  // return anonymous class
  return class extends Component {
    render () {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withClass;
