import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = (props) => (
  props.persons.map((person, index) => {
    // We moved the key prop to the HigherComponent
    // in this case the ErrorBoundary component.
    return <ErrorBoundary key={person.id}>
      <Person
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}/>
      </ErrorBoundary>
  })
);

export default persons;
