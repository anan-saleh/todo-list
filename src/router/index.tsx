import { createBrowserRouter } from 'react-router-dom';
import { TodoList } from '../components/TodoList/TodoList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoList />
  }
]);
