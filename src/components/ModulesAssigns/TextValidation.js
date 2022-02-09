import React, { Component } from 'react';

// const textValidation = (props) => {
class TextValidation extends Component {
  state = {
    textInput: ''
  }

  getTextInput = (event) => {
    if (event.target.value.length >= 1) {
      this.setState({ textInput: event.target.value })
    } else {
      this.setState({ textInput: '' })
    }
  }

  render() {
    let message = 0;
    if (this.state.textInput.length >= 5){
      message = "Text long enough"
    } else if(this.state.textInput.length === 0){
      message = null
    } else message = "Text too short"
    
    return(
      <div>
        <input
          type="text"
          onChange={(event) => this.getTextInput(event)}/>
        <p>{ message }</p>
      </div>
    );
  }
}

export default TextValidation;
