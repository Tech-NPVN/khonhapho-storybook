import { cn } from '@/utils';
import { Textarea as TextareaHeadless } from '@headlessui/react';
import { ReactNode, TextareaHTMLAttributes, forwardRef } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../Form';
import { RequiredSymbolLabel } from '../Input';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  minRows?: number;
  maxRows?: number;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, minRows, maxRows, ...props }, ref) => {
    const calculateTextareaHeight = (element: HTMLTextAreaElement) => {
      if (!element) return;
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight}px`;
    };

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      calculateTextareaHeight(event.target);
      if (props.onChange) {
        props.onChange(event);
      }
    };

    return (
      <TextareaHeadless
        className={cn(
          'w-full py-2 px-3 rounded-xl border transition-all duration-300 bg-transparent text-sm outline-none focus:outline-none focus:border-primaryButtonLight ring-opacity-50',
          className,
        )}
        onChange={handleTextareaChange}
        style={{
          minHeight: minRows ? `${minRows * 1.5}rem` : undefined,
          maxHeight: maxRows ? `${maxRows * 1.5}rem` : undefined,
        }}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

type TextareaFormProps<T extends FieldValues> = TextareaProps & {
  name: FieldPath<T>;
  label?: string;
  description?: string | ReactNode;
  className?: string;
};

export const TextareaForm = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  required,
  ...props
}: TextareaFormProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {required && <RequiredSymbolLabel />}
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Textarea className={`${error && 'border-errorLight'}`} {...field} {...props} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
