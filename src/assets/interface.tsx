export interface subTodoList {
    id: string;
    text: string;
    checked: boolean;
    deleted: boolean;
}

export interface subTodoListProps {
    [id: string]: subTodoList;
}

export interface Todo {
    id: string;
    text: string;
    checked: boolean;
    deleted: boolean;
    subTodoList: subTodoListProps;
}

export interface TodoListProps {
    [id: string]: Todo;
}

export interface reduxState {
    todoList: TodoListProps,
}
  