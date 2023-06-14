import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAction, checkAction } from '../../actions/todo-actions';
import { reduxState } from '../../assets/interface';
import './style.css';

export const TodoItem: FC = () => {
  const todoListState = useSelector((state: reduxState) => state.todoList);
  const dispatch = useDispatch();
  function onDelete(id: string) {
    dispatch((deleteAction(id)));
  }

  function checkTodo(id: string){
    dispatch(checkAction(id));
  };

  return (
    <ul>
      {todoListState.length ? todoListState.map(({id, text, checked, deleted}) => {
        if(!checked && !deleted) {
          return (
            <div key={id} className='todo-item-container'>
              <li>{text}</li>
              <button onClick={() => onDelete(id)}>delete</button>
              <input type="checkbox" onChange={() => checkTodo(id)}/>
            </div>
          )
        }
      }) : null}
    </ul>
  )

}
