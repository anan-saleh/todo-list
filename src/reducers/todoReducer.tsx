import { TodoListProps } from "../assets/interface";
import { TodoActionTypes } from "../actions/action-types";
import { AnyAction } from "redux";
import { AddTodoAction, CheckTodoAction, DeleteTodoAction } from "../actions/action-interface";

const initialState: TodoListProps[] = [];

type TodoAction = AddTodoAction | CheckTodoAction | DeleteTodoAction | AnyAction;

const todoReducer = (state = initialState, action: TodoAction): TodoListProps[] => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      const newTodo: TodoListProps = {
        id: action.payload.id,
        text: action.payload.text,
        checked: action.payload.checked,
        deleted: action.payload.deleted,
      };
      return [...state, newTodo];

    case TodoActionTypes.CHECK_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      });

    case TodoActionTypes.DELETE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            deleted: !todo.deleted,
          };
        }
        return todo;
      });

    default:
      return state;
  }
};

export {
    todoReducer
};