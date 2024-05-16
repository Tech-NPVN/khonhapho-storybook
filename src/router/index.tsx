import { ForgotPassword, Login, SignUp } from '@/pages/Auth';
import { Home, Warehouse } from '@/pages/Dashboard';
import { CompanyPage } from '@/pages/Dashboard/Company';
import { UserCollection, UserProfile } from '@/pages/Dashboard/User';
import { UserAppointment } from '@/pages/Dashboard/User/UserAppointment';
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
        path: 'user',
        children: [
          {
            index: true,
            element: <Warehouse />,
          },
          {
            path: 'customers',
            element: <>QUẢN LÝ KHÁCH HÀNG</>,
          },
          {
            path: ':id',
            element: <UserProfile />,
          },
          {
            path: 'collection',
            element: <UserCollection />,
          },
          {
            path: 'appointment',
            element: <UserAppointment />,
          },
          {
            path: 'review',
            element: <>Lịch sử báo cáo dẫn khách</>,
          },
        ],
      },
      {
        path: 'message',
        element: <MessagePage />,
      },
      {
        path: 'company',
        element: <CompanyPage />,
      },
    ],
  },
]);
