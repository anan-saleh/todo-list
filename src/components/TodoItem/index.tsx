import React ,{ FC } from 'react';
import { TodoListProps } from '../../assets/interface';
import './style.css';

interface TodoItemProps {
  todoList: TodoListProps[],
  setTodoList: React.Dispatch<React.SetStateAction<TodoListProps[]>>
}

export const TodoItem: FC <TodoItemProps>= ({todoList, setTodoList}) => {

  function onDelete(idToRemove: string) {
    const updatedTodoList: TodoListProps[] = todoList.filter(item => item.id !== idToRemove);
    setTodoList(updatedTodoList);
  }

  function checkTodo(id: string){
    const todoListUpdated = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked, // Toggle the checked property
        };
      } else {
        return todo;
      }
    });
    setTodoList(todoListUpdated);
  };

  return (
    <ul>
      {todoList.length ? todoList.map(({id, text, checked}) => {
        if(!checked) {
          return (
            <div key={id} className='todo-item-container'>
              <li>{text}</li>
              <button onClick={() => onDelete(id)}>delete</button>
              <input type="checkbox" onChange={() => checkTodo(id)}/>
            </div>
          )
        }
      }) : null}
    </ul>
  )

}
