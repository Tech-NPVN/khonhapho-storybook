import { RequiredSymbol } from '@/common/components';
import { EyeIcon, EyeSlashIcon } from '@/components/General';
import { cn } from '@/utils';
import { Input as InputHeadless } from '@headlessui/react';
import { cva } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../Form';

const inputStyles = cva(
  'flex items-center gap-2 w-full rounded-xl border transition-all duration-300 bg-transparent dark:border-textSecondaryDark dark:bg-secondaryColorDark dark:[&>svg>path]:fill-white dark:[&>button>svg>path]:fill-white text-sm focus-within:border-primaryButtonLight ring-opacity-50',
  {
    variants: {
      sizeInput: {
        small: 'h-8 px-3 py-2',
        normal: 'h-10 px-3 py-2',
        large: 'h-12 px-3 py-2',
      },
    },
    defaultVariants: {
      sizeInput: 'normal',
    },
  },
);

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  sizeInput?: 'small' | 'normal' | 'large' | null;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefixIcon, suffixIcon, sizeInput, disabled, ...props }, ref) => {
    return (
      <div
        className={cn(inputStyles({ sizeInput, className }), {
          'opacity-50 cursor-not-allowed bg-dividerLight dark:bg-[#303132]': disabled,
        })}
      >
        {prefixIcon}
        <InputHeadless
          type={type}
          ref={ref}
          className={cn('w-full focus:outline-none bg-transparent dark:text-white', {
            'pointer-events-none': disabled,
          })}
          {...props}
        />
        {suffixIcon}
      </div>
    );
  },
);
Input.displayName = 'Input';

type InputFormPasswordProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
  name: FieldPath<T>;
  label?: string;
  description?: string | ReactNode;
  className?: string;
  cnItem?: string;
  prefixIcon?: ReactNode;
  sizeInput?: 'small' | 'normal' | 'large' | null;
};

export const InputFormPassword = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  cnItem,
  prefixIcon,
  sizeInput,
  required,
  ...props
}: InputFormPasswordProps<T>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={cnItem}>
          {label && (
            <FormLabel>
              {required && <RequiredSymbol />}
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Input
              type={showPassword ? 'text' : 'password'}
              className={`${className} ${error && '!border-errorLight !dark:border-errorDark'}`}
              prefixIcon={prefixIcon}
              sizeInput={sizeInput}
              suffixIcon={
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                </button>
              }
              {...field}
              {...props}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

type InputFormProps<T extends FieldValues> = InputFormPasswordProps<T> & {
  suffixIcon?: ReactNode;
  cnItem?: string;
  sizeInput?: 'small' | 'normal' | 'large' | null;
};

export const InputForm = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  cnItem,
  prefixIcon,
  suffixIcon,
  sizeInput,
  required,
  ...props
}: InputFormProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={cnItem}>
          {label && (
            <FormLabel>
              {required && <RequiredSymbol />}
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Input
              className={`${className} ${error && '!border-errorLight !dark:border-errorDark'}`}
              prefixIcon={prefixIcon}
              suffixIcon={suffixIcon}
              sizeInput={sizeInput}
              {...field}
              {...props}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
