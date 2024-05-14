import { Header, Sidebar } from '@/components/Layout';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex mt-[65px]">
        <Sidebar />
        <main className="lg:w-[calc(100vw_-_250px)] relative w-screen mx-auto px-0 lg:p-4 ml-0 lg:ml-[250px] bg-secondaryColorLightD2 dark:bg-secondaryColorDarkD2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
