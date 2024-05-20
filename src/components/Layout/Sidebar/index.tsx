import { CloseIcon } from '@/components/General';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { DarkAndLight } from './DarkAndLight';
import { MenuList } from './MenuList';

export type TItem = {
  id: string;
  href: string;
  name: string;
  icon?: React.ReactNode;
};

export type TItemMenu = TItem & {
  subMenu?: TItem[];
};

interface Props {
  openNavBarMobile: boolean;
  setOpenNavBarMobile: (value: boolean) => void;
  theme: string;
  toggleTheme: () => void;
}

export const Sidebar = ({
  openNavBarMobile = false,
  setOpenNavBarMobile,
  theme,
  toggleTheme,
}: Props) => {
  const location = useLocation();

  const listMenu: TItemMenu[] = [
    {
      id: '1',
      href: '/',
      name: 'Trang chủ',
    },
    {
      id: '2',
      href: '/warehouse',
      name: 'Kho tài nguyên',
    },
    {
      id: '3',
      href: '/urgently',
      name: 'Khách cần mua gấp',
    },
    {
      id: '4',
      href: '/feeds',
      name: 'Tin hoạt động',
      subMenu: [
        {
          id: '1',
          href: '/feeds/deal',
          name: 'Thông báo vụ chốt',
        },
        {
          id: '2',
          href: '/feeds/all',
          name: 'Công ty',
        },
        {
          id: '3',
          href: '/feeds/branch',
          name: 'Chi nhánh',
        },
        {
          id: '4',
          href: '/feeds/department',
          name: 'Phòng',
        },
        {
          id: '5',
          href: '/feeds/group',
          name: 'Nhóm',
        },
      ],
    },
    {
      id: '5',
      href: 'feeds/regulation',
      name: 'Quy định và hướng dẫn',
    },
    {
      id: '6',
      href: 'company',
      name: 'Danh sách công ty',
    },
    {
      id: '7',
      href: '/library',
      name: 'Thư viện nhà phố',
      subMenu: [
        {
          id: '1',
          href: '/library/knowledge',
          name: 'Thư viện kiến thức',
        },
        {
          id: '2',
          href: '/library/share-skills',
          name: 'Chia sẻ kỹ năng',
        },
        {
          id: '3',
          href: '/library/manager',
          name: 'Thư viện trưởng phòng',
        },
        {
          id: '4',
          href: '/library/owner',
          name: 'Thư viện đầu chủ',
        },
        {
          id: '5',
          href: '/library/assistant',
          name: 'Thư viện trợ lý',
        },
      ],
    },
    {
      id: '8',
      href: '/stocks',
      name: 'Quản lý kho hàng',
      subMenu: [
        {
          id: '1',
          href: '/stocks/own',
          name: 'Kho cá nhân',
        },
        {
          id: '2',
          href: '/stocks/consignment',
          name: 'Kho tin chính chủ',
        },
        {
          id: '3',
          href: '/stocks/novendors',
          name: 'Kho hàng tự do',
        },
        {
          id: '4',
          href: '/stocks/appointment',
          name: 'Lịch sử Đầu khách đặt lịch',
        },
        {
          id: '5',
          href: '/stocks/review',
          name: 'Lịch sử Đầu khách báo cáo',
        },
      ],
    },
    {
      id: '9',
      href: '/user',
      name: 'Tài khoản cá nhân',
      subMenu: [
        {
          id: '1',
          href: '/user/customers',
          name: 'QL khách - Tự khớp khách',
        },
        {
          id: '2',
          href: '/user/appointment',
          name: 'Lịch sử đặt lịch',
        },
        {
          id: '3',
          href: '/user/review',
          name: 'Lịch sử báo cáo',
        },
        {
          id: '4',
          href: '/user/collection',
          name: 'Bộ sưu tập',
        },
        {
          id: '5',
          href: '/user/profile',
          name: 'Trang cá nhân',
        },
      ],
    },
    {
      id: '10',
      href: '/login',
      name: 'Đăng xuất',
    },
  ];

  return (
    <div
      className={`lg:w-[250px] lg:top-[63px] bottom-0 dark:bg-primaryColorDark p-0 bg-primaryColorLight flex-col lg:flex lg:left-0 nav-mobile ${openNavBarMobile ? 'block' : ''} ${location.pathname === '/message' ? 'lg:hidden' : ''}`}
    >
      <div className="lg:h-[calc(100%_-_88px])] p-0 lg:overflow-y-auto overflow-hidden dark:text-white text-secondaryColorDark flex-1">
        <div className="flex items-center justify-between px-6 py-4 border-b border-secondaryColorDark lg:hidden">
          <button onClick={() => setOpenNavBarMobile(false)}>
            <CloseIcon />
          </button>
          <DarkAndLight theme={theme} onToggleDarkAndLight={toggleTheme} />
        </div>
        <ul className="h-[calc(100vh_-85px)] p-6 overflow-y-auto lg:h-auto lg:overflow-hidden lg:p-4">
          {listMenu?.map((item) => <MenuList item={item} key={item.id} />)}
        </ul>
      </div>
      <div className="lg:p-4 h-[88px] lg:block hidden">
        <DarkAndLight theme={theme} onToggleDarkAndLight={toggleTheme} />
      </div>
    </div>
  );
};
