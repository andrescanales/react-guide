import React, { Component } from 'react';

class ErrorBoundary extends Component {
  // Creating a general class that will catch all 
  // the possible errors.
  state = {
    hasError: false,
    errorMessage: ''
  }

  // React method that automatically catches errors.
  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render(){
    if (this.state.hasError){
      return (<h1>{ this.state.errorMessage }</h1>)
    } else {
      // Remember that props.children is basically anything
      // that is inside the Component. In this case should
      // be whatever this Component is wrapping in.
      return (this.props.children);
    }
  }
}

export default ErrorBoundary
