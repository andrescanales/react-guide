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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Andres', age: 34},
        {name: event.target.value, age: 34},
        {name: 'Sofi', age: 3}
      ]
    });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons
      this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // splice will NOT copy the original array, so we use slice() or spread operator
    // (...) to copy the original & then remove the persons from the new array:
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
              click={() => this.deletePersonHandler(index)} />
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
