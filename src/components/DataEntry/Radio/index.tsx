import clsx from 'clsx';
import { ReactNode } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '../Form';

type RadioProps = {
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  name?: string;
  value?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  // Event
  onChecked?: () => void;
};
function Radio({ checked, name, disabled, label, size = 'sm', onChecked, ...props }: RadioProps) {
  return (
    <label
      className={clsx(
        'flex select-none relative justify-start items-center',
        disabled ? 'text-[#cecece] cursor-default' : 'text-[#000] cursor-pointer',
        !disabled && '[&>span]:hover:bg-[#afafaf]',
        props.className,
      )}
    >
      <input
        type="radio"
        className={clsx(
          'absolute opacity-0 [&~span]:checked:after:block',
          disabled
            ? ' cursor-default [&~span]:checked:bg-[green]/20'
            : ' cursor-pointer [&~span]:checked:bg-[green]',
        )}
        name={name}
        onChange={onChecked}
        disabled={disabled}
        checked={checked}
        // defaultChecked={defaultChecked}
        readOnly
      />
      <span
        className={clsx(
          "block relative rounded-[50%] bg-[#eee] after:content-[''] after:absolute after:hidden after:rounded-[50%] after:bg-white ",
          size === 'sm' &&
            'me-[6px] text-sm w-[12px] h-[12px] after:top-[3px] after:left-[3px] after:w-[6px] after:h-[6px]',
          size === 'md' &&
            'me-[8px] text-md w-[16px] h-[16px] after:top-[4px] after:left-[4px] after:w-[8px] after:h-[8px]',
          size === 'lg' &&
            'me-[10px] text-lg w-[18px] h-[18px] after:top-[4px] after:left-[4px] after:w-[10px] after:h-[10px]',
        )}
      />
      <div>{label}</div>
    </label>
  );
}
export type radioOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type RadioFormProps<T extends FieldValues> = {
  name: FieldPath<T>;
  description?: string | ReactNode;
  className?: string;
  options?: radioOption[];
};
export const RadioForm = <T extends FieldValues>({
  name,
  description,
  className,
  options,
  // displayLabel = 'label',
  // displayValue = 'value',
  ...props
}: RadioFormProps<T>) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ fieldState: { error } }) => {
        return (
          <FormItem className={className}>
            {options &&
              options?.length > 0 &&
              options?.map((item) => (
                <FormField
                  key={`${item.value}`}
                  control={control}
                  name={name}
                  render={({ field: fieldChild }) => (
                    <FormItem>
                      <FormControl>
                        <Radio
                          checked={fieldChild.value?.value?.includes(item.value)}
                          onChecked={() => {
                            fieldChild.onChange(item);
                          }}
                          label={item.label}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            {description && <FormDescription>{description}</FormDescription>}

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default Radio;
