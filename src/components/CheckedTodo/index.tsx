import { FC } from 'react';
import { TodoListProps } from '../../assets/interface';

interface TodoItemProps {
  todoList: TodoListProps[],
}

export const CheckedTodo: FC <TodoItemProps>= ({ todoList }) => {
  return (
    <ul>
      {todoList.length ? todoList.map(({id, text, checked}) => {
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
