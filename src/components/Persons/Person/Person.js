import React, { Component, Fragment } from 'react';
import './Person.css'
import Aux from '../../../hoc/Aux';
// Using a higher order component just to avoid the need
// of using a HTML tag wrapping all the JSX code

// const person = (props) => {
class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <Fragment>
      {/* {<div className="Person">} */}
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        {/* props.children is used to display whatever info is included in
          the opening and closing tags when invoking a component. */} 
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      {/* {</div>} */}
      </Fragment>
    )
  }
}


export default Person;