import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Todo from 'components/todo';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ListGroup>
    {
      todos.map(todo =>
        <Todo
          key={ todo.id }
          todo={ todo }
          toggleTodo={ toggleTodo }
          deleteTodo={ deleteTodo }
        />
      )
    }
  </ListGroup>
);

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.id,
      isComplete: PropTypes.bool,
      name: PropTypes.any
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
