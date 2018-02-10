import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
<<<<<<< HEAD
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
=======
      <li> A todo will go here </li>
>>>>>>> react-components-checkpoint
    );
  }
}

export default ToDo;
