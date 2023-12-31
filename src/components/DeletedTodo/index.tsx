import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxState } from '../../assets/interface';

import './style.css';
import { deleteTodo } from '../../features/todo/todoSlice';

export const DeletedTodo: FC = () => {
  const todoListState = useSelector((state: reduxState) => state.todoList);
  const dispatch = useDispatch();

  function unDeleteTodo(id: string) {
    dispatch(deleteTodo(id));
  }

  return (
    <ul>
      {Object.keys(todoListState).map((todo) => {
        if(todoListState[todo].deleted) {
          return (
            <div key={todoListState[todo].id} className='todo-item-deleted-container'>
              <li>{todoListState[todo].text}</li>
              <button onClick={() => unDeleteTodo(todoListState[todo].id)}>Undeleted</button>
            </div>
          );
        }
        return null;
      })}
    </ul>
  );
};
