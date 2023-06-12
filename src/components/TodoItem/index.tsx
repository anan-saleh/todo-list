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

  return (
    <ul>
      {todoList.length ? todoList.map(({id, text}) => {
        return (
          <div key={id} className='todo-item-container'>
            <li>{text}</li>
            <button onClick={() => onDelete(id)}>delete</button>
          </div>
        )
      }) : null}
    </ul>
  )

}
