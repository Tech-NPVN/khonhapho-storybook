import clsx from 'clsx';

type IProps = {
  checked?: boolean;
  // options?: IOption[];
  disabled?: boolean;
  className?: string;
  defaultChecked?: boolean;
  name?: string;
  value?: string;
  label?: string;
  // Event
  onChecked?: () => void;
};
function Radio({ checked, name, disabled, label, defaultChecked, onChecked, ...props }: IProps) {
  return (
    <label
      className={clsx(
        'block select-none relative pl-[24px] mb-[12px] text-xl',
        props.className,
        disabled ? 'text-[#cecece] cursor-default' : 'text-[#000] cursor-pointer',
        !disabled && '[&>span]:hover:bg-[#afafaf]',
      )}
    >
      {label}
      <input
        type="radio"
        className={clsx(
          'absolute opacity-0  [&~span]:checked:after:block',
          disabled
            ? ' cursor-default [&~span]:checked:bg-[green]/20'
            : ' cursor-pointer [&~span]:checked:bg-[green]',
        )}
        name={name}
        onInput={onChecked}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        readOnly
      />
      <span className="absolute top-[7px] left-0 w-[16px] h-[16px] rounded-[50%] bg-[#eee] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:w-[8px] after:hidden after:h-[8px] after:rounded-[50%] after:bg-white " />
    </label>
  );
}

export default Radio;
