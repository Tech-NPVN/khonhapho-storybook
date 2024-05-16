import { Tabs } from '@/components/DataDisplay';
import { Input } from '@/components/DataEntry';
import { AddIcon, MessageIcon, Typography } from '@/components/General';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

type TMessagePopover = {
  listMessages: [];
};

const messages = [
  {
    name: 'Hộp thư',
    key: 'mailbox',
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
      </div>
    ),
  },
  {
    name: 'Nhóm mặc định',
    key: 'default',
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
      </div>
    ),
  },
];

export const MessagePopover = ({ listMessages }: TMessagePopover) => {
  console.log('🚀 ~ NotificationPopover ~ listMessages:', listMessages);
  return (
    <Popover className="w-5 h-5">
      <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        <MessageIcon
          width="20"
          height="20"
          color="primaryButtonLight"
          className="fill-primaryButtonLight"
        />
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
          className="rounded-xl text-sm  bg-primaryColorLight dark:bg-secondaryColorDark !top-[55px] shadow-lg p-3 border border-dividerLight/25 h-[calc(var(--window-height)-64px)] lg:h-[80vh] lg:min-w-[375px] min-w-full z-20"
        >
          <div className="flex items-center justify-between">
            <Typography variant="h2" className="dark:text-primaryColorLight text-primaryColorDark">
              Tin nhắn
            </Typography>
            <div className="flex flex-col items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-dividerLight dark:bg-dividerDark">
              <AddIcon width="20" height="20" />
            </div>
          </div>
          <Link
            to={'/message'}
            className="block my-4 text-base text-right text-infoLight dark:text-infoDark"
          >
            Đến trang tin nhắn
          </Link>

          <Input
            className="mb-4 text-base font-medium border-none rounded-full bg-dividerLight dark:bg-dividerDark"
            placeholder="Tìm kiếm"
            disabled
          />

          <Tabs tabs={messages} />
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};
