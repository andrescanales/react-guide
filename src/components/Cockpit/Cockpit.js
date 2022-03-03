import React from "react"

const cockpit = (props) => {
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
      <h1>Hi, I'm react App</h1>
      <br/><br/>
      <button 
        style={style}
        onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit
