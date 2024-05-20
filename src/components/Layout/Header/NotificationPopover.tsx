import { NoResult } from '@/common/components';
import { Tabs } from '@/components/DataDisplay';
import { NotificationIcon, Typography } from '@/components/General';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

type TNotificationPopover = {
  listNotifications: [];
};

const notifications = [
  {
    name: 'Tất cả',
    key: 'all',
    children: (
      <div>
        <div className="flex items-center justify-between mt-4 text-sm text-infoLight dark:text-infoDark ">
          <Typography
            variant="span"
            className="text-sm cursor-pointer text-infoLight dark:text-infoDark hover:text-infoLight/45 hover:dark:text-infoLight/45"
          >
            Đánh dấu tất cả đã đọc
          </Typography>
          <Link to="#" className="hover:text-infoLight/45 hover:dark:text-infoLight/45">
            Xem tất cả
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center p-3">
          <NoResult title="Không có kết quả nào trên hệ thống!" />
        </div>
      </div>
    ),
  },
  {
    name: 'Chưa đọc',
    key: 'unread',
    children: (
      <div>
        <div className="flex items-center justify-between mt-4 text-sm text-infoLight dark:text-infoDark ">
          <Typography
            variant="span"
            className="text-sm cursor-pointer text-infoLight dark:text-infoDark hover:text-infoLight/45 hover:dark:text-infoLight/45"
          >
            Đánh dấu tất cả đã đọc
          </Typography>
          <Link to="#" className="hover:text-infoLight/45 hover:dark:text-infoLight/45">
            Xem tất cả
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center p-3">
          <NoResult title="Không có kết quả nào trên hệ thống!" />
        </div>
      </div>
    ),
  },
  {
    name: 'Quan trọng',
    key: 'important',
    children: (
      <div>
        <div className="flex items-center justify-between mt-4 text-sm text-infoLight dark:text-infoDark ">
          <Typography
            variant="span"
            className="text-sm cursor-pointer text-infoLight dark:text-infoDark hover:text-infoLight/45 hover:dark:text-infoLight/45"
          >
            Đánh dấu tất cả đã đọc
          </Typography>
          <Link to="#" className="hover:text-infoLight/45 hover:dark:text-infoLight/45">
            Xem tất cả
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center p-3">
          <NoResult title="Không có kết quả nào trên hệ thống!" />
        </div>
      </div>
    ),
  },
];

export const NotificationPopover = ({ listNotifications }: TNotificationPopover) => {
  return (
    <Popover className="w-5 h-5">
      <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        <NotificationIcon width="20" height="20" />
      </PopoverButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          anchor="bottom end"
          className="rounded-xl text-sm  bg-primaryColorLight dark:bg-secondaryColorDark !top-[55px] z-20 shadow-lg p-3 border border-dividerLight/25 h-full lg:h-[80vh] lg:min-w-[375px] min-w-full"
        >
          <Typography
            variant="h2"
            className="mb-6 dark:text-primaryColorLight text-primaryColorDark"
          >
            Thông báo
          </Typography>
          <Tabs tabs={notifications} className="" />
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};
