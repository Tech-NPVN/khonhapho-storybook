import { ForgotPassword, Login, SignUp } from '@/pages/Auth';
import { Home, Urgently, Warehouse } from '@/pages/Dashboard';
import { CompanyPage } from '@/pages/Dashboard/Company';

import { ADMIN_ROUTE } from '@/constants/menu';
import { Management } from '@/pages/Admin';
import { FeedAll, FeedBranch, FeedDeal, FeedDepartment, FeedGroup } from '@/pages/Dashboard/Feeds';
import {
  LibraryAssistant,
  LibraryKnowledge,
  LibraryManager,
  LibraryOwner,
  LibraryShareSkills,
} from '@/pages/Dashboard/Library';
import {
  StocksAppointment,
  StocksConsignment,
  StocksNovendors,
  StocksOwn,
  StocksReview,
} from '@/pages/Dashboard/Stocks';
import { UserCollection, UserProfile } from '@/pages/Dashboard/User';
import { UserAppointment } from '@/pages/Dashboard/User/UserAppointment';
import WarehouseForm from '@/pages/Dashboard/Warehouse/Form';
import { AdminLayout, AuthLayout, NoAuthLayout } from '@/pages/Layout';
import { MessagePage } from '@/pages/Message';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

const noAuthRoutes: RouteObject[] = [
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
];

const authRoutes: RouteObject[] = [
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
        path: 'urgently',
        element: <Urgently />,
      },
      {
        path: 'library',
        children: [
          {
            path: 'knowledge',
            element: <LibraryKnowledge />,
          },
          {
            path: 'share-skills',
            element: <LibraryShareSkills />,
          },
          {
            path: 'manager',
            element: <LibraryManager />,
          },
          {
            path: 'owner',
            element: <LibraryOwner />,
          },
          {
            path: 'assistant',
            element: <LibraryAssistant />,
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
        path: 'stocks',
        children: [
          {
            path: 'own',
            element: <StocksOwn />,
          },
          {
            path: 'consignment',
            element: <StocksConsignment />,
          },
          {
            path: 'novendors',
            element: <StocksNovendors />,
          },
          {
            path: 'appointment',
            element: <StocksAppointment />,
          },
          {
            path: 'review',
            element: <StocksReview />,
          },
          {
            path: 'feeds',
            children: [
              {
                index: true,
                element: <></>,
              },
              {
                path: 'deal',
                element: <FeedDeal />,
              },
              {
                path: 'all',
                element: <FeedAll />,
              },
              {
                path: 'branch',
                element: <FeedBranch />,
              },
              {
                path: 'department',
                element: <FeedDepartment />,
              },
              {
                path: 'group',
                element: <FeedGroup />,
              },
            ],
          },
        ],
      },
      {
        path: 'feeds',
        children: [
          {
            index: true,
            element: <></>,
          },
          {
            path: 'deal',
            element: <FeedDeal />,
          },
          {
            path: 'all',
            element: <FeedAll />,
          },
          {
            path: 'branch',
            element: <FeedBranch />,
          },
          {
            path: 'department',
            element: <FeedDepartment />,
          },
          {
            path: 'group',
            element: <FeedGroup />,
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
];

const adminRoutes: RouteObject[] = [
  {
    element: <AdminLayout />,
    path: ADMIN_ROUTE,
    children: [
      {
        path: '',
        element: <Management />,
      },
    ],
  },
];

export const router = createBrowserRouter([...noAuthRoutes, ...authRoutes, ...adminRoutes]);
