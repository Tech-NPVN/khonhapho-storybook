import {
  AngleDownIcon,
  AngleUpIcon,
  CloseIcon,
  DarkIcon,
  LightIcon,
  ListUiIcon,
  PinIcon,
} from '@/components/General';
import { ListItems, TItemMenu } from '@/components/Layout';
import { AvatarPopover } from '@/components/Layout/Header/AvatarPopover';
import { NotificationPopover } from '@/components/Layout/Header/NotificationPopover';
import { ADMIN_MENU, ADMIN_ROUTE } from '@/constants/menu';
import { useMode } from '@/hooks/useMode';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const AdminSidebarItem = ({ item }: { item: TItemMenu }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <li key={item.id} className="flex items-center justify-between mb-1">
        <NavLink
          to={item.href}
          onClick={(e) => {
            item.subMenu && e.preventDefault();
            handleShow();
          }}
          className={({ isActive }) =>
            [
              'flex items-center justify-between flex-1 p-3 px-5 text-sm font-medium transition-colors rounded-lg cursor-pointer  hover:bg-secondaryColorLightD2 hover:text-black',
              isActive ? 'bg-secondaryColorLightD2 text-black' : 'bg-transparent',
            ].join(' ')
          }
          end
        >
          {item.name}
          {item?.subMenu && (
            <>
              {show ? (
                <AngleUpIcon className="[&>path]:!fill-white" />
              ) : (
                <AngleDownIcon className="[&>path]:!fill-white" />
              )}
            </>
          )}
        </NavLink>
      </li>

      {show &&
        item?.subMenu?.map((sub) => (
          <li key={sub.id} className="flex items-center justify-between mb-1">
            <NavLink
              to={sub.href}
              className={({ isActive }) =>
                [
                  'flex-1 p-3 px-5 text-sm font-medium transition-colors rounded-lg cursor-pointer bg-transparent hover:bg-secondaryColorLightD2 hover:text-black',
                  isActive ? 'bg-secondaryColorLightD2 text-black' : '',
                ].join(' ')
              }
              end
            >
              · {sub.name}
            </NavLink>
          </li>
        ))}
    </>
  );
};

type AdminSidebar = {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
  theme: string;
  toggleTheme: () => void;
};

const AdminSidebar = ({ theme, toggleTheme, openDrawer, setOpenDrawer }: AdminSidebar) => {
  return (
    <>
      <aside
        className={`lg:w-[250px] bottom-0 !bg-primaryColorDark flex-col lg:left-0 nav-mobile lg:flex`}
      >
        <div className="lg:h-[calc(100%_-_88px])] p-0 lg:overflow-y-auto overflow-hidden text-white flex-1">
          <a href={`${ADMIN_ROUTE}`} className="flex justify-center items-center py-4">
            <img
              src="/nhapho-icon-dark.png"
              alt="nhapho-icon-logo"
              className="h-20 w-20 object-cover"
            />
          </a>
          <ul className="h-[calc(100vh_-85px)] p-6 overflow-y-auto lg:h-auto lg:overflow-hidden lg:p-4">
            {ADMIN_MENU?.map((item) => <AdminSidebarItem item={item} key={item.id} />)}
          </ul>
        </div>
        <div className="lg:p-4 h-[88px] lg:block hidden">
          <div className="p-3 transition-colors rounded-lg hover:bg-secondaryColorDark">
            <button className="flex items-center justify-between w-full" onClick={toggleTheme}>
              <span className="flex-1 text-sm font-semibold cursor-pointer text-white text-left">
                Chế độ {theme === 'light' ? 'tối' : 'sáng'}
              </span>
              <div className="text-inherit hover:!text-inherit">
                <button
                  type="submit"
                  className="flex items-center justify-center p-1.5 hover:bg-dividerDark/25 rounded-full transition-all"
                >
                  {theme === 'light' ? (
                    <DarkIcon width="16" height="16" color="white" />
                  ) : (
                    <LightIcon width="16" height="16" color="white" />
                  )}
                </button>
              </div>
            </button>
          </div>
        </div>
      </aside>

      <div
        className={`fixed inset-0 z-50 transform ${openDrawer ? 'translate-x-0 visible' : 'translate-x-full invisible'} transition-transform duration-500 ease-in-out`}
      >
        <div className="fixed right-0 top-0 h-full w-[360px] dark:bg-secondaryColorDark bg-primaryColorDark shadow-xl overflow-y-auto">
          <div className="py-4 px-5 flex items-center justify-between">
            <button onClick={() => setOpenDrawer(false)} className="flex-1">
              <CloseIcon color="white" />
            </button>
            <button className="flex items-center justify-between w-fit gap-2" onClick={toggleTheme}>
              <span className="flex-1 text-sm font-semibold cursor-pointer text-white text-left">
                Chế độ {theme === 'light' ? 'tối' : 'sáng'}
              </span>
              <div className="text-inherit hover:!text-inherit">
                <button
                  type="submit"
                  className="flex items-center justify-center p-1.5 hover:bg-dividerDark/25 rounded-full transition-all"
                >
                  {theme === 'light' ? (
                    <DarkIcon width="16" height="16" color="white" />
                  ) : (
                    <LightIcon width="16" height="16" color="white" />
                  )}
                </button>
              </div>
            </button>
          </div>

          <ul className="px-5 mt-8 text-white">
            {ADMIN_MENU?.map((item) => <AdminSidebarItem item={item} key={item.id} />)}
          </ul>
        </div>
      </div>
    </>
  );
};

const AdminHeader = ({
  openDrawer,
  setOpenDrawer,
}: {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
}) => {
  return (
    <header className="fixed left-0 right-0 top-0 h-16 bg-primaryColorDark flex items-center justify-end gap-3 w-full px-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-secondaryColorDark bg-secondaryColorLight">
        <Link to="/user/collection">
          <PinIcon width="18" height="18" />
        </Link>
      </div>
      <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-secondaryColorDark bg-secondaryColorLight">
        <NotificationPopover listNotifications={[]} />
      </div>
      <AvatarPopover listItems={ListItems} />
      <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-secondaryColorDark bg-secondaryColorLight lg:hidden">
        <button onClick={() => setOpenDrawer(!openDrawer)}>
          <ListUiIcon />
        </button>
      </div>
    </header>
  );
};

export const AdminLayout = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { theme, toggleTheme } = useMode();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 992) {
      setOpenDrawer(false);
    }
  }, [windowSize.width]);

  return (
    <>
      <AdminSidebar
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        theme={theme as string}
        toggleTheme={toggleTheme}
      />
      <div className="relative w-screen mx-auto lg:ml-[250px] lg:w-[calc(100vw_-_250px)]">
        <AdminHeader openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        {openDrawer && (
          <div className="fixed inset-0 bg-black/45" onClick={() => setOpenDrawer(false)}></div>
        )}
        <main className="ml-0 px-3 mt-16 lg:p-4 p-2">
          <Outlet />
        </main>
      </div>
    </>
  );
};
