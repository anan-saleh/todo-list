import React, { useState, FC } from 'react';
import { TodoItem } from '../TodoItem';
import { uniqueId } from '../../assets/utils';
import { TodoListProps } from '../../assets/interface';

import './style.css';

export const TodoList: FC = () => {
  const [newTodoText, setNewTodoText] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>):void {
    const { value } = event.target;
    setNewTodoText(value);
  }

  function onSubmit (event: React.ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (newTodoText.trim() === '') {
      return;
    }
    setTodoList([...todoList, {id: uniqueId(), text: newTodoText.trim()}])
    setNewTodoText('');
  }
  return (
    <>
        <div className='todo-list-container'>
          <h1>Todo List</h1>
          <form onSubmit={onSubmit}>
            <input type='text' name='todoText' value={newTodoText} onChange={handleInputChange}/>
            <button>Add</button>
          </form>
        </div>
        <TodoItem todoList={todoList} setTodoList={setTodoList}/>
    </>
  )
}
