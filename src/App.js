import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Andres', age: 34},
      {name: 'Mane', age: 34},
      {name: 'Sofi', age: 3}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: 'Andres', age: 34},
        {name: 'Mane', age: 34},
        {name: newName, age: 3}
      ]
    });
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
    if (this.state.showPersons){
      this.setState({ showPersons: false })
    } else {
      this.setState({ showPersons: true })
    }
    /* Another way of doing the conditional:
      const doesShow = this.state.showPersons
      this.setState({ showPersons: !doesShow })
    */
  }

  render() {
    const style = {
      backgorundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
        { 
          this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
              />
              <Person
                name={this.state.persons[1].name}
                changed={this.nameChangeHandler}
              />
              <Person 
                name="Andres" 
                age="34" 
                click={this.switchNameHandler.bind(this, 'Rafael A.!')}>
                  My Hobbies are bjj
              </Person>
            </div>
            : null
        }
      </div>
    );
  }
}

export default App;
