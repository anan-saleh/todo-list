import { TodoListProps, subTodoList } from '../assets/interface';

export interface AddSubTodoType {
    id: string;
    todo: subTodoList;
}

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

export interface AddSubTodoAction {
    type: string;
    payload: AddSubTodoType;
}
