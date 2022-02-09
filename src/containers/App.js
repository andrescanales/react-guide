import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import TextValidation from '../components/ModulesAssigns/TextValidation';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Andres', age: 34 },
      { id: 'dsa', name: 'Mane', age: 34 },
      { id: 'fsa', name: 'Sofi', age: 3 }
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    // Create a copy of the Obj, so we don't mutate the original
    // BC JS objects are reference types, so it's just a pointer.
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
        // Content inside the () is JSX code except for the code inside brackets
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
        </div>
      );

      style.backgroundColor = 'red'
    }

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
        <br/><br/><hr/>
        <h3>Assignments</h3>
        <TextValidation />
      </div>
    );
    // return React.createElement('div', {className: 'App'})
  }
}

export default App;
