import { Header, Sidebar } from '@/components/Layout';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  const [openNavBarMobile, setOpenNavBarMobile] = useState<boolean>(false);
  return (
    <>
      <Header setOpenNavBarMobile={setOpenNavBarMobile} />
      <div className="lg:flex block lg:mt-[63px] mt-0">
        <Sidebar openNavBarMobile={openNavBarMobile} setOpenNavBarMobile={setOpenNavBarMobile} />
        <main className="lg:w-[calc(100vw_-_250px)] relative min-h-screen mx-auto px-0 lg:p-4 ml-0 lg:ml-[250px] bg-secondaryColorLightD2 dark:bg-secondaryColorDarkD2">
          <Outlet />
        </main>
      </div>
    </>
  );
};
