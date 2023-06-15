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
  }

  return (
    <ul>
      {Object.keys(todoListState).map((todo) => {
        if(!todoListState[todo].checked && !todoListState[todo].deleted) {
          return (
            <div key={todoListState[todo].id} className='todo-item-container'>
              <li>{todoListState[todo].text}</li>
              <button onClick={() => onDelete(todoListState[todo].id)}>delete</button>
              <input type="checkbox" onChange={() => checkTodo(todoListState[todo].id)}/>
            </div>
          );
        }
        return null;
      })}
    </ul>
  );

};
