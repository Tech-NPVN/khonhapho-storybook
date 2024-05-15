import { ForgotPassword, Login, SignUp } from '@/pages/Auth';
import { Home, User, Warehouse } from '@/pages/Dashboard';
import WarehouseForm from '@/pages/Dashboard/Warehouse/Form';
import { AuthLayout, NoAuthLayout } from '@/pages/Layout';
import { MessagePage } from '@/pages/Message';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <NoAuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
    ],
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
        children: [
          {
            index: true,
            element: <Warehouse />,
          },
          {
            path: 'add',
            element: <WarehouseForm />,
          },
        ],
      },
      {
        path: 'user/:id',
        element: <User />,
      },
      {
        path: '/message',
        element: <MessagePage />,
      },
      {
        path: 'user/collection',
        element: <></>,
      },
    ],
  },
]);
