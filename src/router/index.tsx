import { createBrowserRouter } from 'react-router-dom';
import { TodoList } from '../components/TodoList/TodoList';
import { SignUp } from '../components/SignUp';
import { SignIn } from '../components/SignIn';
import { Home } from '../components/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/dashboard',
    element: <TodoList />,
  }
]);
