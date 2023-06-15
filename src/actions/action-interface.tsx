import { TodoListProps } from '../assets/interface';

export interface AddTodoAction {
    type: string;
    payload: TodoListProps;
}
  
export interface CheckTodoAction {
    type: string;
    payload: string;
}
  
export interface DeleteTodoAction {
    type: string;
    payload: string;
}
