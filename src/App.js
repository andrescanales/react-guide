import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Andres', age: 34 },
      { id: 'dsa', name: 'Mane', age: 34 },
      { id: 'fsa', name: 'Sofi', age: 3 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      // returns boolean if condition
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
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // slice() or spread operator(...) copy the original arry into a new one
    // splice() changes the contents of an array by removing or replacing
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgorundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        // All the content inside this parenthesis is JSX code
        // except for the code inside curly braces
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm react App</h1>
        <button 
          style={style}
          onClick={ () => this.switchNameHandler('Sofía Renée') }
        >
          Switch Name
        </button>
        <br/><br/>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        { persons }
      </div>
    );
    // return React.createElement('div', {className: 'App'})
  }
}

export default App;
