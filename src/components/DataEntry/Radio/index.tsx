import clsx from 'clsx';
import { ReactNode } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '../Form';
import { Input } from '../Input';

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
        disabled
          ? 'text-[#cecece] cursor-default dark:text-white/50'
          : 'text-[#000] cursor-pointer dark:text-white',
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
                        <div className="flex items-start">
                          <div className={clsx(item.value?.includes('other') ? 'mt-1' : '')}>
                            <Radio
                              checked={fieldChild.value?.value?.includes(item.value)}
                              onChecked={() => {
                                fieldChild.onChange({
                                  ...item,
                                  input_value: '',
                                });
                              }}
                              label={item.label}
                            />
                          </div>
                          {item.value === 'other' && (
                            <div className="w-full ms-3">
                              <Input
                                className={clsx(
                                  'h-9 rounded-lg',
                                  fieldChild.value?.input_value
                                    ? ''
                                    : fieldChild.value?.value === 'other'
                                      ? 'border-errorLight dark:border-errorLight'
                                      : '',
                                  fieldChild.value?.value !== 'other' ? 'border-[black]/30' : '',
                                )}
                                disabled={fieldChild.value?.value !== 'other'}
                                value={fieldChild.value?.input_value}
                                onChange={(e) => {
                                  fieldChild.onChange({
                                    ...item,
                                    input_value: e.target.value,
                                  });
                                }}
                              ></Input>
                              {fieldChild.value?.value === 'other' &&
                                !fieldChild.value?.input_value && (
                                  <span className="text-sm text-errorLight">
                                    Vui lòng nhập trường này
                                  </span>
                                )}
                            </div>
                          )}
                        </div>
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
