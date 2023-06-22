import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { TodoItem } from '../TodoItem';
import { CheckedTodo } from '../CheckedTodo';
import { uniqueId } from '../../assets/utils';
import { Todo } from '../../assets/interface';
import { DeletedTodo } from '../DeletedTodo';
import { addAction } from '../../actions/todo-actions';

import './style.css';
import { addTodo } from '../../reducers/todoReducer';

type TodoTab = 'TODO' | 'CHECKED' | 'DELETED';

export const TodoList: FC = () => {
  const [newTodoText, setNewTodoText] = useState<string>('');
  const [todoTab, setTodoTab] = useState<string>('TODO');
  const dispatch = useDispatch();

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>):void {
    const { value } = event.target;
    setNewTodoText(value);
  }

  function onSubmit (event: React.ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (newTodoText.trim() === '') {
      return;
    }
    const todo: Todo = {
      id: uniqueId(), 
      text: newTodoText.trim(), 
      checked: false, 
      deleted: false,
      subTodoList: {}
    };
    dispatch(addTodo(todo));
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
            <TodoItem />
          </>
        }
        {todoTab === 'CHECKED' && 
        <CheckedTodo />
        }
        {
          todoTab === 'DELETED' && <DeletedTodo/>
        }
      </div>
    </>
  );
};
