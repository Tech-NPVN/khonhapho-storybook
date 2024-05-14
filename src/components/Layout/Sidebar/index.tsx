import { useMode } from '@/hooks/useMode';
import React from 'react';
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

export const Sidebar = () => {
  const { theme, toggleTheme } = useMode();

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
    <div className="w-[250px] fixed top-[65px] bottom-0 dark:bg-primaryColorDark bg-primaryColorLight flex flex-col">
      <div className="h-[calc(100%_-_88px])] p-4 overflow-y-auto dark:text-white text-secondaryColorDark flex-1">
        <ul>{listMenu?.map((item) => <MenuList item={item} />)}</ul>
      </div>
      <div className="p-4 h-[88px]">
        <DarkAndLight theme={theme as string} onToggleDarkAndLight={toggleTheme} />
      </div>
    </div>
  );
};
