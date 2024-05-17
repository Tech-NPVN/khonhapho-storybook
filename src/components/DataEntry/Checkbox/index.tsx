import { CheckIcon } from '@/components/General';
import { cn } from '@/utils';
import { Checkbox as CheckboxHeadless, CheckboxProps, Field, Label } from '@headlessui/react';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '../Form';

const checkBoxStyles = cva('group block size-4 rounded border cursor-pointer', {
  variants: {
    variant: {
      default:
        'border-dividerLight data-[checked]:bg-infoLight data-[checked]:border-infoLight [&>svg]:fill-white outline-none',
      success:
        'border-dividerLight data-[checked]:bg-successLight data-[checked]:border-successLight outline-successLight [&>svg]:fill-white',
      error:
        'border-dividerLight data-[checked]:bg-errorLight data-[checked]:border-errorLight outline-errorLight [&>svg]:fill-white',
      green:
        'border-dividerLight data-[checked]:border-transparent data-[checked]:bg-primaryButtonLight data-[checked]:border-primaryButtonLight outline-primaryButtonLight [&>svg]:fill-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type CheckBoxType = CheckboxProps &
  VariantProps<typeof checkBoxStyles> & {
    label?: string;
  };

export const CheckBox = ({
  label = '',
  className,
  onChange,
  variant,
  checked,
  ...props
}: CheckBoxType) => {
  return (
    <Field className="flex items-center gap-2">
      <CheckboxHeadless
        name={label}
        onChange={onChange}
        checked={checked}
        className={cn(checkBoxStyles({ className, variant }))}
        {...props}
      >
        <CheckIcon className="hidden group-data-[checked]:block" width="15" height="13" />
      </CheckboxHeadless>
      <Label className="dark:text-white">{label}</Label>
    </Field>
  );
};

export type CheckboxOption = {
  value: string;
  label?: string;
};

export type CheckboxFormProps<T extends FieldValues> = CheckBoxType & {
  name: FieldPath<T>;
  description?: string | ReactNode;
  className?: string;

  // In case multiple checkbox
  options?: CheckboxOption[];
  groupStyle?: ReactNode;
  cnGroupStyle?: string;
  // displayValue?: string;
  // displayLabel?: string;
};

export const CheckboxForm = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  options,
  groupStyle,
  cnGroupStyle,
  // displayLabel = 'label',
  // displayValue = 'value',
  ...props
}: CheckboxFormProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={className}>
          {options && options?.length > 0 ? (
            options.map((item) => (
              <FormField
                key={`${item.value}`}
                control={control}
                name={name}
                render={({ field: fieldChild }) => (
                  <FormItem>
                    <FormControl>
                      {groupStyle ? (
                        <div className={cnGroupStyle}>
                          {groupStyle}
                          <CheckBox
                            checked={fieldChild.value?.includes(item.value)}
                            onChange={(checked) => {
                              return checked
                                ? fieldChild.onChange([...fieldChild.value, item.value])
                                : fieldChild.onChange(
                                    fieldChild.value?.filter(
                                      (value: string) => value !== item.value,
                                    ),
                                  );
                            }}
                            label={item?.label ?? ''}
                            className={`${error && 'border-errorLight'}`}
                            {...props}
                          />
                        </div>
                      ) : (
                        <CheckBox
                          checked={fieldChild.value?.includes(item.value)}
                          onChange={(checked) => {
                            return checked
                              ? fieldChild.onChange([...fieldChild.value, item.value])
                              : fieldChild.onChange(
                                  fieldChild.value?.filter((value: string) => value !== item.value),
                                );
                          }}
                          label={item.label}
                          className={`${error && 'border-errorLight'}`}
                          {...props}
                        />
                      )}
                    </FormControl>
                  </FormItem>
                )}
              />
            ))
          ) : (
            <FormControl>
              <CheckBox
                {...field}
                {...props}
                label={label}
                className={`${error && 'border-errorLight'}`}
              />
            </FormControl>
          )}
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
