import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxState } from '../../assets/interface';
import { checkAction } from '../../actions/todo-actions';

import './style.css';

export const CheckedTodo: FC = () => {
  const todoListState = useSelector((state: reduxState) => state.todoList);
  const dispatch = useDispatch();

  function unCheckTodo(id: string) {
    dispatch(checkAction(id));
  }
  return (
    <ul>
      {todoListState.length ? todoListState.map(({id, text, checked}) => {
        if(checked) {
          return (
            <div key={id} className='todo-item-checked-container'>
              <li>{text}</li>
              <input type="checkbox" checked onChange={() => unCheckTodo(id)}/>
            </div>
          )
        }
      }) : null}
    </ul>
  )
}
