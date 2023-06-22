import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxState } from '../../assets/interface';

import './style.css';
import { checkTodo } from '../../reducers/todoReducer';

export const CheckedTodo: FC = () => {
  const todoListState = useSelector((state: reduxState) => state.todoList);
  const dispatch = useDispatch();

  function unCheckTodo(id: string) {
    dispatch(checkTodo(id));
  }
  return (
    <ul>
      {Object.keys(todoListState).map((todo) => {
        if(todoListState[todo].checked) {
          return (
            <div key={todoListState[todo].id} className='todo-item-checked-container'>
              <li><del>{todoListState[todo].text}</del></li>
              <input type="checkbox" checked onChange={() => unCheckTodo(todoListState[todo].id)}/>
            </div>
          );
        }
        return null;
      })}
    </ul>
  );
};
