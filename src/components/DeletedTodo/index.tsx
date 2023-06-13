import { FC } from 'react';
import { TodoListProps } from '../../assets/interface';

interface TodoItemProps {
  todoList: TodoListProps[],
}

export const DeletedTodo: FC <TodoItemProps>= ({ todoList }) => {
  return (
    <ul>
      {todoList.length ? todoList.map(({id, text, deleted}) => {
        if(deleted) {
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
