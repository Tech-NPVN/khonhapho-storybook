import { Header, Sidebar } from '@/components/Layout';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
