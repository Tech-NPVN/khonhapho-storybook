import { cn } from '@/utils';
import { Switch as SwitchHeadless } from '@headlessui/react';
import { VariantProps, cva } from 'class-variance-authority';
import { Fragment } from 'react';

const switchStyles = cva('group inline-flex h-6 w-11 items-center rounded-full', {
  variants: {
    variant: {
      checked: 'text-primaryButtonLight hover:bg-accent hover:text-accent-foreground',
      disabled: 'bg-transparent underline-offset-4 hover:text-primaryButtonLight hover:underline',
    },
  },
  defaultVariants: {},
});

type SwitchProps = React.ComponentProps<'button'> &
  VariantProps<typeof switchStyles> & {
    isChecked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: () => void;
  };

export const Switch = ({
  name,
  disabled,
  defaultChecked,
  isChecked,
  onChange,
  className,
  ...props
}: SwitchProps) => {
  return (
    <SwitchHeadless
      checked={isChecked}
      onChange={onChange}
      as={Fragment}
      defaultChecked={defaultChecked}
      name={name}
      disabled={disabled}
    >
      {({ checked, disabled }) => (
        <button
          className={cn(
            switchStyles({ className }),
            checked ? 'bg-[#197D16]' : 'bg-[#00000040]',
            disabled && 'cursor-not-allowed opacity-50',
          )}
          {...props}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={cn(
              'size-4 rounded-full bg-white transition',
              checked ? 'translate-x-6' : 'translate-x-1',
            )}
          />
        </button>
      )}
    </SwitchHeadless>
  );
};
