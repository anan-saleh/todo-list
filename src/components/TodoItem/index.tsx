import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subTodoList, reduxState } from '../../assets/interface';
import './style.css';
import { uniqueId } from '../../assets/utils';
import { addSubTodo, checkTodo, deleteTodo } from '../../reducers/todoReducer';

export const TodoItem: FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [newTodoText, setNewTodoText] = useState<string>('');
  const todoListState = useSelector((state: reduxState) => state.todoList);
  const dispatch = useDispatch();
  function onDelete(id: string) {
    dispatch(deleteTodo(id));
  }

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>):void {
    const { value } = event.target;
    setNewTodoText(value);
  }

  function onSubmit (event: React.FormEvent<HTMLFormElement>, id: string): void {
    event.preventDefault();
    if (newTodoText.trim() === '') {
      return;
    }
    const todo: subTodoList = {
      id: uniqueId(), 
      text: newTodoText.trim(), 
      checked: false, 
      deleted: false,
    };
    dispatch(addSubTodo({id ,todo}));
    setNewTodoText('');
  }

  function checkTodoList(id: string){
    dispatch(checkTodo(id));
  }

  return (
    <ul>
      {Object.keys(todoListState).map((todo) => {
        if(!todoListState[todo].checked && !todoListState[todo].deleted) {
          return (
            <div key={todoListState[todo].id} className='todo-item-container'>
              <div className='todo-item'>
                <li>{todoListState[todo].text}</li>
                <button onClick={() => setOpenForm(!openForm)}>Add sub todo</button>
                <button onClick={() => onDelete(todoListState[todo].id)}>delete</button>
                <input type="checkbox" onChange={() => checkTodoList(todoListState[todo].id)}/>
                {openForm && 
                  <form onSubmit={(e) => onSubmit(e ,todoListState[todo].id)}>
                    <input type='text' name='todoText' value={newTodoText} onChange={handleInputChange}/>
                    <button className='add-button'>Add</button>
                  </form>
                }
              </div>
              {Object.keys(todoListState[todo].subTodoList).map((subTodo) => {
                return (
                  <div key={subTodo}>{todoListState[todo].subTodoList[subTodo].text}</div>
                );
              })
              }
            </div>
          );
        }
        return null;
      })}
    </ul>
  );

};
