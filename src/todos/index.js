// Import react and redux dependencies
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import todo dependencies
import * as TodoActions from './todo.actions';
import { TodoTextInput } from './todo.input';

class TodosComponent extends Component {
  render() {
  	// Using the imported TextInput and giving it the function to add todos
  	// Render the list of todos in state below the textbox
  	// Pressing enter in the textbox will fire onSave, and add the todo to state
    return (
      <div>
      	<TodoTextInput 
  		    onSave={this.props.actions.addTodo}
  		    />

      	{this.props.todos.map((todo, index) => {
          return <div key={index}>{todo}</div>
      	})}
      </div>
    )
  }
}

function mapState(state) {
  // Passes the prop 'todos' to the component
  // Using it above as this.props.todos
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  // Pass all actions described in the actions file into the component
  // Adding more actions to that file should immediately be usable
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

// Connect the state and actions to the component before exporting
export default connect(mapState, mapDispatch)(TodosComponent);
