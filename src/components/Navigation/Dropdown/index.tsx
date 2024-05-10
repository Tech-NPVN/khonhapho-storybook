import { cn } from '@/utils';
import Tippy from '@tippyjs/react/headless';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactElement, ReactNode } from 'react';

const dropdownStyles = cva(
  'flex items-center w-full p-2 text-[#000] rounded-[4px] bg-white transition-colors ease-in-out duration-200',
  {
    variants: {
      variant: {
        default: 'hover:bg-[rgba(229,230,232,1)]',
        disabled: 'cursor-default opacity-30 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type DropdownRenderProps = {
  key: string;
  label: string | ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
};

export type DropdownProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof dropdownStyles> & {
    children: ReactElement;
    items: DropdownRenderProps[];
    placement?:
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'right'
      | 'right-start'
      | 'right-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'
      | 'auto'
      | 'auto-end'
      | 'auto-start';
    trigger?: 'mouseenter' | 'click';
    delay?: number | [number | null, number | null];
  };

export const Dropdown = ({
  items,
  children,
  placement = 'bottom',
  trigger = 'mouseenter',
  delay = [0, 400],
  className,
  ...props
}: DropdownProps) => {
  const renderItems = () => {
    return items.map((item: DropdownRenderProps) => (
      <button
        key={item.key}
        disabled={item.disabled}
        className={cn(dropdownStyles({ variant: item.disabled ? 'disabled' : 'default' }))}
        {...props}
      >
        {item.icon && <span className={cn('mr-2')}>{item.icon}</span>}
        {item.label}
      </button>
    ));
  };

  const renderResult = (attrs: any) => (
    <div
      className={cn(
        `rounded-lg min-w-[160px] p-1 bg-[#fff] shadow-[0_4px_15px_0_rgba(0,0,0,0.06)] animate-slideDown`,
      )}
      tabIndex="-1"
      {...attrs}
    >
      <div className={cn('w-full')}>{renderItems()}</div>
    </div>
  );

  return (
    <Tippy
      interactive
      delay={delay}
      offset={[0, 6]}
      hideOnClick={true}
      placement={placement}
      render={renderResult}
      trigger={trigger}
    >
      {children}
    </Tippy>
  );
};
