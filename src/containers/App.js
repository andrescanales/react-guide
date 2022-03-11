import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
// Changing to lowercase bc it's not a component anymore it's a function:
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import TextValidation from '../components/ModulesAssigns/TextValidation';

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor');
    // We can initialize the state here by doing this.state
    // but the other way will automatically create the 
    // constructor method for you.
  }

  state = {
    persons: [
      { id: 'asd', name: 'Andres', age: 34 },
      { id: 'dsa', name: 'Mane', age: 34 },
      { id: 'fsa', name: 'Sofi', age: 3 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
  }

  // We need to add the static keyword, so React will not break
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
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
    console.log('[App.js] render')
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        // Content inside the () is JSX code except for the code inside brackets
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>
            Remove Cockpit to check clean effect
        </button>
        {this.state.showCockpit ?
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
            : null
        }
        { persons }
        <br/><br/><hr/>
        <h3>Assignments</h3>
        <TextValidation />
      </Aux>
    );
    // return React.createElement('div', {className: 'App'})
  }
}
// Here we wrapped everything into the new HOC tha's simply a func
export default withClass(App, "App");
