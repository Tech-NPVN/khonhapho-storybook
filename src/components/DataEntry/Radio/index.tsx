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
  // Event
  onChecked?: () => void;
};
function Radio({ checked, name, disabled, label, onChecked, ...props }: RadioProps) {
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
        onChange={onChecked}
        disabled={disabled}
        checked={checked}
        // defaultChecked={defaultChecked}
        readOnly
      />
      <span className="absolute top-[7px] left-0 w-[16px] h-[16px] rounded-[50%] bg-[#eee] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:w-[8px] after:hidden after:h-[8px] after:rounded-[50%] after:bg-white " />
    </label>
  );
}
export type radioOption = {
  value: string;
  label: string;
  disabled?: boolean;
};
export const radioOptions: radioOption[] = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three', disabled: true },
  { value: '4', label: 'Four' },
];
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
