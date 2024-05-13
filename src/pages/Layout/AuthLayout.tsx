import { Header, Sidebar } from '@/components/Layout';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 ">
        <div className="col-span-2 hidden md:block">
          <Sidebar />
        </div>
        <main className="col-span-10 bg-[#F3F4F6] dark:bg-[#000] flex justify-center pt-4 h-screen md:h-full w-screen md:w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
