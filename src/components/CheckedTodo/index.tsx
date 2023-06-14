import { FC } from 'react';
import { useSelector } from 'react-redux';
import { reduxState } from '../../assets/interface';

export const CheckedTodo: FC = () => {
  const todoListState = useSelector((state: reduxState) => state.todoList);
  return (
    <ul>
      {todoListState.length ? todoListState.map(({id, text, checked}) => {
        if(checked) {
          return (
            <div key={id} className='todo-item-checked-container'>
              <li>{text}</li>
            </div>
          )
        }
      }) : null}
    </ul>
  )
}
