import React, { Component } from 'react';
import './Person.css'

// const person = (props) => {
class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <div className="Person">
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        {/* props.children is used to display whatever info is included in
          the opening and closing tags when invoking a component. */} 
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
}


export default Person;