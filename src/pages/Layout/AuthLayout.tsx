import { Header, Sidebar } from '@/components/Layout';
import { useMode } from '@/hooks/useMode';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const AuthLayout = () => {
  const [openNavBarMobile, setOpenNavBarMobile] = useState<boolean>(false);
  const { theme, toggleTheme } = useMode();
  const location = useLocation();

  return (
    <>
      <Header setOpenNavBarMobile={setOpenNavBarMobile} theme={theme as string} />
      <div className="lg:flex block lg:mt-[63px] mt-0">
        <Sidebar
          openNavBarMobile={openNavBarMobile}
          setOpenNavBarMobile={setOpenNavBarMobile}
          theme={theme as string}
          toggleTheme={toggleTheme}
        />
        <main
          className={`relative w-screen mx-auto ${location.pathname === '/message' ? 'lg:w-full lg:ml-0' : 'lg:ml-[250px] lg:w-[calc(100vw_-_250px)] ml-0 px-3 pt-6 lg:p-4'}`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};
