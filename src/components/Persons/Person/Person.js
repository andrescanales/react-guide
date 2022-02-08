import React from 'react';
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      {/* props.children is used to display whatever info is included in
        the opening and closing tags when invoking a component. */} 
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;