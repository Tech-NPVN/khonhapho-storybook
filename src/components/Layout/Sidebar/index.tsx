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
  openNavBarMobile?: boolean;
  setOpenNavBarMobile?: (value: boolean) => void;
  theme?: string;
  toggleTheme?: () => void;
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
      href: '/feeds/urgently',
      name: 'Khách cần mua gấp',
    },
    {
      id: '4',
      href: '/feels',
      name: 'Tin hoạt động',
      subMenu: [
        {
          id: '1',
          href: '/feels/deal',
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
      href: '/feels',
      name: 'Thư viện nhà phố',
      subMenu: [
        {
          id: '1',
          href: '/feels/deal',
          name: 'Thư viện kiến thức',
        },
        {
          id: '2',
          href: '/feeds/all',
          name: 'Chia sẻ kỹ năng',
        },
        {
          id: '3',
          href: '/feeds/branch',
          name: 'Thư viện trưởng phòng',
        },
        {
          id: '4',
          href: '/feeds/department',
          name: 'Thư viện đầu chủ',
        },
        {
          id: '5',
          href: '/feeds/group',
          name: 'Thư viện tro',
        },
      ],
    },
    {
      id: '8',
      href: '/feels',
      name: 'Quản lý kho hàng',
      subMenu: [
        {
          id: '1',
          href: '/feels/deal',
          name: 'Kho cá nhân',
        },
        {
          id: '2',
          href: '/feeds/all',
          name: 'Kho tin chính chủ',
        },
        {
          id: '3',
          href: '/feeds/branch',
          name: 'Kho hàng tự do',
        },
        {
          id: '4',
          href: '/feeds/department',
          name: 'Lịch sử Đầu khách đặt lịch',
        },
        {
          id: '5',
          href: '/feeds/group',
          name: 'Lịch sử Đầu khách báo cáo',
        },
      ],
    },
  ];

  return (
    <div
      className={`lg:w-[250px] lg:top-[63px] bottom-0 dark:bg-primaryColorDark p-0 bg-primaryColorLight flex-col lg:flex lg:left-0 nav-mobile ${openNavBarMobile ? 'block' : ''} ${location.pathname === '/message' ? 'lg:hidden' : ''}`}
    >
      <div className="lg:h-[calc(100%_-_88px])] p-0 lg:overflow-y-auto overflow-hidden dark:text-white text-secondaryColorDark flex-1">
        <div className="flex items-center justify-between px-6 py-4 border-b border-secondaryColorDark lg:hidden">
          <div onClick={() => setOpenNavBarMobile && setOpenNavBarMobile(false)}>
            <CloseIcon />
          </div>
          <DarkAndLight theme={theme as string} onToggleDarkAndLight={toggleTheme} />
        </div>
        <ul className="h-[calc(100vh_-85px)] p-6 overflow-y-auto lg:h-auto lg:overflow-hidden lg:p-4">
          {listMenu?.map((item) => <MenuList item={item} key={item.id} />)}
        </ul>
      </div>
      <div className="lg:p-4 h-[88px] lg:block hidden">
        <DarkAndLight theme={theme as string} onToggleDarkAndLight={toggleTheme} />
      </div>
    </div>
  );
};
