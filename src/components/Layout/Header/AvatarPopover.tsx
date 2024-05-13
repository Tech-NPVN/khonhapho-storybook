import { Avatar } from '@/components/DataDisplay';
import { AlarmClock } from '@/components/General';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { typeItem } from '.';

type TAvatarPopover = {
  listItems: typeItem[];
};

export const AvatarPopover = ({ listItems }: TAvatarPopover) => {
  return (
    <Popover className="w-10 h-10">
      <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        <Avatar src="/images/avatar.png" alt="avatar" width={40} height={40} />
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
          className="rounded-xl text-sm  bg-primaryColorLight dark:bg-secondaryColorDark min-w-[300px] !top-[60px] shadow-lg border border-dividerLight/25"
        >
          <ul className="p-1">
            {listItems?.map((item) => {
              return (
                <li className="flex items-center gap-3 py-1.5 px-3 hover:bg-secondaryColorDark/25 hover:dark:bg-dividerDark rounded dark:text-primaryColorLight text-primaryColorDark">
                  <span>{item.icon}</span>
                  <Link to={item.href} className="flex-1">
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li className="my-1 border-b border-dividerLight dark:border-dividerDark"></li>
            <li className="flex items-center gap-3 py-1.5 px-3 hover:bg-secondaryColorDark/25 hover:dark:bg-dividerDark rounded dark:text-primaryColorLight text-primaryColorDark">
              <AlarmClock />
              <Link to={'#'} className="flex-1">
                Đăng xuất
              </Link>
            </li>
          </ul>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};
