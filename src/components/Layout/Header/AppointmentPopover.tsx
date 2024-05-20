import { NoResult } from '@/common/components';
import { AlarmClock, Typography } from '@/components/General';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';

type TAppointmentPopover = {
  listAppointmentPopover: [];
};

export const AppointmentPopover = ({ listAppointmentPopover }: TAppointmentPopover) => {
  return (
    <Popover className="w-5 h-5">
      <PopoverButton className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        <AlarmClock
          width="20"
          height="20"
          className="text-textPrimaryLight dark:text-textPrimaryDark "
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
          className="rounded-xl text-sm bg-primaryColorLight dark:bg-secondaryColorDark !top-[55px] z-20 shadow-lg p-3 border border-dividerLight/25 h-full lg:h-[80vh] lg:min-w-[320px] min-w-full"
        >
          <Typography
            variant="h2"
            className="mb-6 dark:text-primaryColorLight text-primaryColorDark"
          >
            Lịch hẹn dẫn khách
          </Typography>
          <div className="flex flex-col items-center justify-center p-3">
            <NoResult title="Không có kết quả nào trên hệ thống!" />
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};
