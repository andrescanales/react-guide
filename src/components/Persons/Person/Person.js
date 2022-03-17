import React, { Component } from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context';
// Using a higher order component just to avoid the need
// of using a HTML tag wrapping all the JSX code

// const person = (props) => {
class Person extends Component {
  constructor(props){
    super(props)
    // New way of using refs in React:
    this.inputElementRef = React.createRef()
  }

  componentDidMount(){
    // Older version of using refs:
    // this.inputElement.focus();
    this.inputElementRef.current.focus()
  }

  render() {
    console.log('[Person.js] rendering...')
    return (
      <Aux>
        <AuthContext.Consumer>
        { context =>
          context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
        }
        </AuthContext.Consumer>
      {/* {<div className="Person">} */}
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        {/* props.children is used to display whatever info is included in
          the opening and closing tags when invoking a component. */} 
        <p>{this.props.children}</p>
        <input
          type="text"
          // Older version of using refs:
          // ref={(inputEl)=> {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      {/* {</div>} */}
      </Aux>
    )
  }
}

Person.propsTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
