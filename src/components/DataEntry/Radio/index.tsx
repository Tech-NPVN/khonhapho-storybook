import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  name?: string;
  value?: string;
  label?: string;
  customColor?: {
    checked?: {
      border?: '';
      background?: '';
    };
  };
  onChecked?: () => void;
};
const Radio = forwardRef<HTMLInputElement, IProps>(
  ({ checked, name, disabled, label, className, onChecked, ...props }, ref) => {
    return (
      <label
        className={clsx(
          'block select-none relative pl-[24px] mb-[12px] text-xl',
          className,
          disabled ? 'text-dividerLight cursor-default' : 'text-textPrimaryLight cursor-pointer',
          !disabled && '[&>span]:hover:bg-textSecondaryLight/20',
        )}
      >
        {label}
        <input
          ref={ref}
          type="radio"
          className={clsx(
            'absolute opacity-0 [&~span]:checked:after:block',
            disabled
              ? 'cursor-default [&~span]:checked:bg-primaryButtonLight/20'
              : 'cursor-pointer [&~span]:checked:bg-primaryButtonLight',
          )}
          name={name}
          onChange={onChecked}
          disabled={disabled}
          checked={checked}
          readOnly
          {...props}
        />
        <span className="absolute top-[7px] left-0 w-[16px] h-[16px] rounded-[50%] bg-dividerLight/50 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:w-[8px] after:hidden after:h-[8px] after:rounded-[50%] after:bg-white " />
      </label>
    );
  },
);

export default Radio;
