import React, { useState, FC } from 'react';
import { TodoItem } from '../TodoItem';
import { CheckedTodo } from '../CheckedTodo/CheckedTodo';
import { uniqueId } from '../../assets/utils';
import { TodoListProps } from '../../assets/interface';

import './style.css';

type TodoTab = 'TODO' | 'CHECKED' | 'DELETED';

export const TodoList: FC = () => {
  const [newTodoText, setNewTodoText] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);
  const [todoTab, setTodoTab] = useState<string>('TODO');

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>):void {
    const { value } = event.target;
    setNewTodoText(value);
  }

  function onSubmit (event: React.ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (newTodoText.trim() === '') {
      return;
    }
    setTodoList([...todoList, {id: uniqueId(), text: newTodoText.trim(), checked: false}])
    setNewTodoText('');
  }

  function switchTabs(tab: TodoTab) {
    setTodoTab(tab);
  }

  return (
    <>
        <div className='todo-list-container'>
          <h1>Todo List</h1>
          <div className='todo-tabs'>
            <button onClick={() => switchTabs('TODO')}>Todo</button>
            <button onClick={() => switchTabs('CHECKED')}>Checked</button>
            <button onClick={() => switchTabs('DELETED')}>Deleted</button>
          </div>
          {todoTab === 'TODO' && 
          <>
            <form onSubmit={onSubmit}>
              <input type='text' name='todoText' value={newTodoText} onChange={handleInputChange}/>
              <button className='add-button'>Add</button>
            </form>
          <TodoItem todoList={todoList} setTodoList={setTodoList} />
        </>
        }
        {todoTab === 'CHECKED' && 
        <CheckedTodo todoList={todoList}/>
        }
        {
          todoTab === 'DELETED' && <>Deleted</>
        }
        </div>
    </>
  )
}
