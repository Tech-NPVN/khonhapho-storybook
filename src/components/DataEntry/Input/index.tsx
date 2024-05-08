import { EyeIcon, EyeSlashIcon } from '@/components/General';
import { cn } from '@/utils';
import { Input as InputHeadless } from '@headlessui/react';
import { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../Form';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefixIcon, suffixIcon, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex items-center gap-2 h-10 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
      >
        {prefixIcon}
        <InputHeadless
          type={type}
          ref={ref}
          className={cn('w-full focus:outline-none bg-transparent')}
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
  prefixIcon?: ReactNode;
};

export const InputFormPassword = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  prefixIcon,
  ...props
}: InputFormPasswordProps<T>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type={showPassword ? 'text' : 'password'}
              className={`${error && 'border-red'}`}
              prefixIcon={prefixIcon}
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
};

export const InputForm = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  prefixIcon,
  suffixIcon,
  ...props
}: InputFormProps<T>) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              className={`${error && 'border-red'}`}
              prefixIcon={prefixIcon}
              suffixIcon={suffixIcon}
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
