// import React from 'react'

// const withClass = props => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// )

// Another way of create a HigherOrderComponent:
const withClass = (WrappedComponent, className) => {
  // We have a regular JS function(withClass) that returns a 
  // function that returns a functional component
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default withClass;
