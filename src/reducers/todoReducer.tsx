import { Todo, TodoListProps, subTodoList, subTodoListProps } from '../assets/interface';
import { TodoActionTypes } from '../actions/action-types';
import { AnyAction } from 'redux';
import { AddTodoAction, CheckTodoAction, DeleteTodoAction, AddSubTodoAction } from '../actions/action-interface';

const initialState: TodoListProps = {};
const initialStateSubTodo: subTodoListProps = {};

type TodoAction = AddTodoAction | CheckTodoAction | DeleteTodoAction | AddSubTodoAction | AnyAction;

const todoReducer = (state = initialState, action: TodoAction): TodoListProps => {
  switch (action.type) {
  case TodoActionTypes.ADD_TODO: {
    const newTodo: Todo = {
      id: action.payload.id,
      text: action.payload.text,
      checked: action.payload.checked,
      deleted: action.payload.deleted,
      subTodoList : initialStateSubTodo
    };
    return {...state,
      [newTodo.id]: newTodo
    };
  }

  case TodoActionTypes.ADD_SUB_TODO : {
    const subTodo: subTodoList = {
      id: action.payload.todo.id,
      text: action.payload.todo.text,
      checked: action.payload.todo.checked,
      deleted: action.payload.todo.deleted,
    };
    const newTodo: Todo = {
      ...state[action.payload.id],
      subTodoList: {
        ...(state[action.payload.id]?.subTodoList || initialStateSubTodo),
        [subTodo.id]: subTodo,
      }
    };
    return { 
      ...state,
      [newTodo.id]: newTodo,
    };
  }

  case TodoActionTypes.CHECK_TODO: {
    const checkedTodo = {
      ...state[action.payload],
      checked: !state[action.payload].checked,
    };
    return {
      ...state,
      [action.payload]: checkedTodo,
    };
  }

  case TodoActionTypes.DELETE_TODO:{
    const deletedTodo = {
      ...state[action.payload],
      deleted: !state[action.payload].deleted,
    };
    return {
      ...state,
      [action.payload]: deletedTodo,
    };
  }

  default:
    return state;
  }
};

export {
  todoReducer
};