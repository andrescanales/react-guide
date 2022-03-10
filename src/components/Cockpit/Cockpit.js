import React, { useEffect } from "react"
// useEffect is a React Hook that lets you perform 
// side effects in function components

const Cockpit = (props) => {
  // useEffect method as default takes a method that
  // will run for every render cycle, also for every
  // update. And method can be defined more than once.
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // It's componentDidMount & componentDidUpdate combined
    // http request in here...
    setTimeout(() => {
      // Faking an http request to check an issue of making
      // that type of calls in this method. And that is that 
      // will be executed every time it re-renders.
      alert('Saved data to cloud!');
    }, 1000);
    // To fix this issue we pass a 2nd arg to useEffect func
    // in which we kind of let the func know which data is 
    // being used in your effect. In this case we only want 
    // to run this call when props.persons changes:
  }, [props.persons]);
  // What if we want to run this effect ONLY the first time
  // it loads? Then we simply leave an empty array.

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  if (props.showPersons){
    style.backgroundColor = 'red'
  }

  return(
    <div>
      <h1>{props.title}</h1>
      <br/><br/>
      <button 
        style={style}
        onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit
