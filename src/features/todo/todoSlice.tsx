import { createSlice } from '@reduxjs/toolkit';
import { Todo, TodoListProps, subTodoList, subTodoListProps } from '../../assets/interface';

const initialState: TodoListProps = {};
const initialStateSubTodo: subTodoListProps = {};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: action.payload.id,
        text: action.payload.text,
        checked: action.payload.checked,
        deleted: action.payload.deleted,
        subTodoList : initialStateSubTodo
      };
      state[newTodo.id] = newTodo;
    },
    addSubTodo: (state, action) => {
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
      state[newTodo.id] = newTodo;
    },
    checkTodo: (state, action) => {
      const checkedTodo = {
        ...state[action.payload],
        checked: !state[action.payload].checked,
      };
      return {
        ...state,
        [action.payload]: checkedTodo,
      };
    },
    deleteTodo: (state, action) => {
      const deletedTodo = {
        ...state[action.payload],
        deleted: !state[action.payload].deleted,
      };
      return {
        ...state,
        [action.payload]: deletedTodo,
      };
    }
  }
});


export const { addTodo, addSubTodo, checkTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;