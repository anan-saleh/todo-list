export interface Todo {
    id: string;
    text: string;
    checked: boolean;
    deleted: boolean
}

export interface TodoListProps {
    [id: string]: Todo;
}

export interface reduxState {
    todoList: TodoListProps,
}
  