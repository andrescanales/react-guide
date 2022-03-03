import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

// const persons = (props) => (
class Persons extends Component {
  static getDerivedStateFromProps(props, state){
    console.log('[Persons.js] getDerivedStateFromProps')
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate')
    // We need to return true or false, no matter what.
    // true if React should continue updating, false otherwise.
    // Obviouslly this will occurr while doing a validation in 
    // this.props to the upcoming nextProps.
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    // This is the way to use this method
    return {message: 'Snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }

  render() {
    console.log('[Persons.js] rendering...')
    return(
      this.props.persons.map((person, index) => {
        // We moved the key prop to the HigherComponent
        // in this case the ErrorBoundary component.
        return <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, person.id)}/>
          </ErrorBoundary>
      })
    )
  }
}

export default Persons;
