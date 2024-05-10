import { Tag } from '@/components/DataDisplay/Tag';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, ReactNode } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../Form';
import { RequiredSymbolLabel } from '../Input';

interface IOption {
  value: string;
  label: string;
  disabled?: boolean;
}
interface ISelect {
  className?: string;
  isLoading?: boolean;
  // isSearchable?: boolean;
  // isClearable?: boolean;
  disabled?: boolean;
  options?: IOption[] | null;
  placeholder?: string;
  multiple?: boolean;
  value?: IOption | IOption[] | null;
  onChange?: (any: any) => void;
}

export const Select = ({ className, options, value, onChange, ...props }: ISelect) => {
  return (
    <Listbox
      disabled={props.disabled}
      multiple={props.multiple}
      value={value}
      onChange={onChange}
      {...props}
    >
      {({ open }) => (
        <div className={clsx('relative w-full', props.disabled ? 'opacity-50' : '')}>
          <ListboxButton
            onClick={(e) => {
              // console.log(e.currentTarget.tagName ==);
              // e.preventDefault();
              // e.stopPropagation();
            }}
            className="relative min-w-11 w-full h-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          >
            {!props.multiple && !Array.isArray(value) && (
              <div className="flex w-full items-center h-full flex-wrap py-2">
                <div className="ml-1 block truncate my-[2px]">
                  {value?.label ?? (props.placeholder ? props.placeholder : 'Chọn một lựa chọn')}
                </div>
              </div>
            )}
            {props.multiple && Array.isArray(value) && value.length == 0 && (
              <div className="flex w-full items-center h-full flex-wrap py-2">
                <div className="ml-1 block truncate my-[2px]">
                  {props.placeholder ? props.placeholder : 'Chọn nhiều lựa chọn'}
                </div>
              </div>
            )}
            {props.multiple && Array.isArray(value) && value.length > 0 && (
              <div className="flex w-full items-center h-full flex-wrap py-[2px]">
                {value?.map((option, i) => (
                  <Tag
                    key={option.value}
                    className="my-[2px] h-[36px] rounded-md py-0 text-sm mx-[2px] px-2"
                    closeable
                    onClose={() => onChange?.(value.filter((_, index) => index !== i))}
                  >
                    {option.label}
                  </Tag>
                ))}
              </div>
            )}

            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <svg width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </span>
          </ListboxButton>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-linear duration-100"
            enter="transition ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            enterFrom="h-0"
          >
            <ListboxOptions className="absolute z-50 mt-1 max-h-72 h-min w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm transition-all duration-300 ease-linear">
              {options?.map((op) => (
                <ListboxOption
                  key={op.value}
                  className={({ selected, focus }) =>
                    clsx(
                      selected ? 'bg-[#afbfac] text-black' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-2 mx-1 pr-8  rounded-lg my-[2px]',
                      focus && !selected ? 'bg-black/5' : '',
                      op.disabled ? 'opacity-50' : '',
                    )
                  }
                  value={op}
                  disabled={op.disabled}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex items-center ">
                        <span
                          className={clsx(
                            selected ? 'font-semibold' : 'font-normal',
                            'ml-1 block truncate',
                          )}
                        >
                          {op.label}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={clsx(
                            selected ? 'text-primaryButtonLight' : 'hidden',
                            'absolute inset-y-0 right-0 flex items-center pr-4 ',
                          )}
                        >
                          <svg
                            className="absolute right-3"
                            width={12}
                            fill={selected ? 'green' : 'transparent'}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
              {!options && (
                <ListboxOption
                  className={
                    'relative cursor-default select-none py-2 pl-2 mx-1 pr-8  rounded-lg my-[2px] opacity-50'
                  }
                  value={null}
                  disabled
                >
                  <div className="flex items-center ">
                    <span className={clsx('ml-1 block truncate font-normal')}>
                      Không có dữ liệu
                    </span>
                  </div>
                </ListboxOption>
              )}
            </ListboxOptions>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

type SelectFormProps<T extends FieldValues> = ISelect & {
  name: FieldPath<T>;
  label?: string;
  description?: string | ReactNode;
  required?: boolean;
};

export const SelectForm = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  required,
  ...props
}: SelectFormProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {required && <RequiredSymbolLabel />}
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Select className={`${error && 'border-errorLight'}`} {...field} {...props} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
