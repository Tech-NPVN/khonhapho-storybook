import { Header, Sidebar } from '@/components/Layout';
import { useMode } from '@/hooks/useMode';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const AuthLayout = () => {
  const [openNavBarMobile, setOpenNavBarMobile] = useState<boolean>(false);
  const { theme, toggleTheme } = useMode();
  const location = useLocation();
  console.log('🚀 ~ AuthLayout ~ location:', location);

  return (
    <>
      <Header setOpenNavBarMobile={setOpenNavBarMobile} theme={theme as string} />
      {/* {location.pathname === '/message' ? (
        <main className="lg:mt-[63px] mt-0 bg-white dark:bg-secondaryColorDarkD2 h-[calc(100vh_-_63px)]">
          <Outlet />
        </main>
      ) : ( */}
      <div className="lg:flex block lg:mt-[63px] mt-0">
        <Sidebar
          openNavBarMobile={openNavBarMobile}
          setOpenNavBarMobile={setOpenNavBarMobile}
          theme={theme as string}
          toggleTheme={toggleTheme}
        />
        <main
          className={`lg:w-[calc(100vw_-_250px)] relative w-screen mx-auto px-3 pt-6 lg:p-4 ml-0 lg:ml-[250px] bg-secondaryColorLightD2 dark:bg-secondaryColorDarkD2 ${location.pathname === '/message' ? 'lg:w-full lg:ml-0' : 'lg:ml-[250px] lg:w-[calc(100vw_-_250px)]'}`}
        >
          <Outlet />
        </main>
      </div>
      {/* )} */}
    </>
  );
};
