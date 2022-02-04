import React from 'react';

const textValidation = (props) => {
  let message = 0;
  if (props.text.length >= 5)
   message = "Text long enough"
  else if(props.text.length === 0)
    message = null
  else
    message = "Text too short"
  return(
    <p>{ message }</p>
  )
}

export default textValidation;