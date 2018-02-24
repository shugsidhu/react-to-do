import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         <input type="submit" value="Delete" onClick={ this.props.deleteToDo }/>
      </li>
    );
  }
}

export default ToDo;
