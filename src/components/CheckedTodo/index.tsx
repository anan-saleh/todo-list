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
      {Object.keys(todoListState).map((todo) => {
        if(todoListState[todo].checked) {
          return (
            <div key={todoListState[todo].id} className='todo-item-checked-container'>
              <li>{todoListState[todo].text}</li>
              <input type="checkbox" checked onChange={() => unCheckTodo(todoListState[todo].id)}/>
            </div>
          );
        }
        return null;
      })}
    </ul>
  );
};
