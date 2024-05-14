import { AlarmClock, PinIcon } from '@/components/General';
import { useMode } from '@/hooks/useMode';
import { Link } from 'react-router-dom';
import { AppointmentPopover } from './AppointmentPopover';
import { AvatarPopover } from './AvatarPopover';
import { MessagePopover } from './MessagePopover';
import { NotificationPopover } from './NotificationPopover';

export type typeItem = {
  name: string;
  icon?: React.ReactNode;
  href: string;
};

export const Header = () => {
  const { theme } = useMode();
  console.log('🚀 ~ Header ~ theme:', theme);

  const ListItems: typeItem[] = [
    {
      name: 'Trang chủ',
      icon: <AlarmClock />,
      href: '/',
    },
    {
      name: 'Trang cá nhân',
      icon: <AlarmClock />,
      href: '/',
    },
    {
      name: 'Kho tài nguyên',
      icon: <AlarmClock />,
      href: '/',
    },
    {
      name: 'Khách cần mua gấp',
      icon: <AlarmClock />,
      href: '/',
    },
    {
      name: 'Kho cá nhân',
      icon: <AlarmClock />,
      href: '/',
    },
    {
      name: 'QL khách - Tự khớp khách',
      icon: <AlarmClock />,
      href: '/',
    },
    {
      name: 'Bộ sưu tập',
      icon: <AlarmClock />,
      href: '/',
    },
  ];

  return (
    <header className="fixed top-0 right-0 z-10 flex items-center justify-between w-full px-4 border-b bg-primaryColorLight dark:bg-primaryColorDark border-dividerLight dark:border-dividerDark">
      <Link to={'/'}>
        <img
          src={theme === 'light' ? '/nhapho-icon.png' : '/nhapho-icon-dark.png'}
          alt="logo"
          className="object-cover w-10 h-10"
        />
      </Link>
      <div className="flex items-center justify-between gap-3 py-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-secondaryColorDark bg-secondaryColorLight">
          <AppointmentPopover listAppointmentPopover={[]} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-secondaryColorDark bg-secondaryColorLight">
          <Link to={'/user/collection'}>
            <PinIcon width="20" height="20" />
          </Link>
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-secondaryColorDark bg-secondaryColorLight">
          <MessagePopover listMessages={[]} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-secondaryColorDark bg-secondaryColorLight">
          <NotificationPopover listNotifications={[]} />
        </div>
        <AvatarPopover listItems={ListItems} />
      </div>
    </header>
  );
};
