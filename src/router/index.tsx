import { Login, SignUp } from '@/pages/Auth';
import { Home, Warehouse } from '@/pages/Dashboard';
import { AuthLayout } from '@/pages/Layout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'warehouse',
        element: <Warehouse />,
      },
    ],
  },
]);
