import { TodoActionTypes} from './action-types';
import { Todo } from '../assets/interface';

const addAction = (payload : Todo) => {
  return { type: TodoActionTypes.ADD_TODO, payload };
};

const checkAction = (payload: string) => {
  return { type: TodoActionTypes.CHECK_TODO, payload };
};

const deleteAction = (payload: string) => {
  return { type: TodoActionTypes.DELETE_TODO, payload };
};


export {
  addAction,
  checkAction,
  deleteAction,
};