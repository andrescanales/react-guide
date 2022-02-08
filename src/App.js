import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import TextValidation from './ModulesAssigns/TextValidation';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Andres', age: 34 },
      { id: 'dsa', name: 'Mane', age: 34 },
      { id: 'fsa', name: 'Sofi', age: 3 }
    ],
    otherState: 'some other value',
    showPersons: false,
    textInput: ''
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    // Again we create a copy of the Obj, so we don't mutate the original
    // Because JS objects are reference types, so it's just a pointer.
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    // personIndex is an internal index the list use. Is not the index of the state.
    console.log("...", personIndex)
    const persons = [...this.state.persons];
    // slice() or spread operator(...) copy the original arry into a new one
    // splice() changes the contents of an array by removing or replacing
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  getTextInput = (event) => {
    if (event.target.value.length >= 1) {
      this.setState({ textInput: event.target.value })
    } else {
      this.setState({ textInput: '' })
    }
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        // Content inside this parenthesis is JSX code except for the code inside brackets
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red'
    }

    const inputAssignment = (
      <div>
        <input type="text" onChange={(event) => this.getTextInput(event)}/>
      </div>
    );

    return (
      <div className="App">
        <h1>Hi, I'm react App</h1>
        <br/><br/>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        { persons }
        <br/><br/>
        { inputAssignment }
        <TextValidation text={this.state.textInput}></TextValidation>
      </div>
    );
    // return React.createElement('div', {className: 'App'})
  }
}

export default App;
