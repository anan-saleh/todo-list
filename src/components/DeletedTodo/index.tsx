import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxState } from '../../assets/interface';
import { deleteAction } from '../../actions/todo-actions';

import './style.css';

export const DeletedTodo: FC = () => {
  const todoListState = useSelector((state: reduxState) => state.todoList);
  const dispatch = useDispatch();

  function unDeleteTodo(id: string) {
    dispatch(deleteAction(id));
  }

  return (
    <ul>
      {todoListState.length ? todoListState.map(({id, text, deleted}) => {
        if(deleted) {
          return (
            <div key={id} className='todo-item-deleted-container'>
              <li>{text}</li>
              <button onClick={() => unDeleteTodo(id)}>Undelete</button>
            </div>
          )
        }
      }) : null}
    </ul>
  )
}
