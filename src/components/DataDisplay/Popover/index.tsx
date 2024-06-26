import {
  PopoverButton,
  Popover as PopoverHeadless,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import { MouseEventHandler, ReactNode } from 'react';

type PopoverOptionProps = {
  key: string;
  content: string | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

type PopoverProps = {
  trigger: string | ReactNode;
  itemsPanel?: PopoverOptionProps[];
  itemsCustom?: ReactNode;
  className?: string;
  anchor?:
    | 'bottom'
    | 'bottom end'
    | 'bottom start'
    | 'left'
    | 'left end'
    | 'left start'
    | 'right'
    | 'right end'
    | 'right start'
    | 'top'
    | 'top end'
    | 'top start';
};

export const Popover = ({
  trigger,
  itemsPanel,
  itemsCustom,
  className,
  anchor = 'bottom',
}: PopoverProps) => {
  return (
    <PopoverHeadless>
      <PopoverButton className="flex items-center justify-center focus:outline-none">
        {trigger}
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
          anchor={anchor}
          className={`bg-white dark:bg-secondaryColorDark rounded-md shadow-lg p-1 ${className}`}
        >
          {itemsPanel ? (
            <div className="flex flex-col gap-1">
              {itemsPanel.map((item) => (
                <button
                  onClick={item.onClick}
                  key={item.key}
                  className={`block text-left dark:text-white text-sm px-3 py-[5px] hover:bg-tertiaryColorLight dark:hover:bg-tertiaryColorDark rounded-md transition-all disabled:opacity-40 disabled:pointer-events-none ${item.className}`}
                  disabled={item.disabled}
                >
                  {item.content}
                </button>
              ))}
            </div>
          ) : (
            itemsCustom
          )}
        </PopoverPanel>
      </Transition>
    </PopoverHeadless>
  );
};
