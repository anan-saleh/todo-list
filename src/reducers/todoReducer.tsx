import { Todo, TodoListProps } from "../assets/interface";
import { TodoActionTypes } from "../actions/action-types";
import { AnyAction } from "redux";
import { AddTodoAction, CheckTodoAction, DeleteTodoAction } from "../actions/action-interface";

const initialState: TodoListProps = {};

type TodoAction = AddTodoAction | CheckTodoAction | DeleteTodoAction | AnyAction;

const todoReducer = (state = initialState, action: TodoAction): TodoListProps => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      const newTodo: Todo = {
        id: action.payload.id,
        text: action.payload.text,
        checked: action.payload.checked,
        deleted: action.payload.deleted,
      };
      return {...state,
        [newTodo.id]: newTodo
      }

    case TodoActionTypes.CHECK_TODO:
      const checkedTodo = {
        ...state[action.payload],
        checked: !state[action.payload].checked,
      };
      return {
        ...state,
        [action.payload]: checkedTodo,
      };

    case TodoActionTypes.DELETE_TODO:
      const deletedTodo = {
        ...state[action.payload],
        deleted: !state[action.payload].deleted,
      };
      return {
        ...state,
        [action.payload]: deletedTodo,
      };

    default:
      return state;
  }
};

export {
    todoReducer
};