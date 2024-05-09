import { CheckIcon } from '@/components/General';
import { cn } from '@/utils';
import { Checkbox, CheckboxProps, Field, Label } from '@headlessui/react';
import { cva, VariantProps } from 'class-variance-authority';

const checkBoxCustomStyles = cva('group block size-4 rounded border', {
  variants: {
    variant: {
      default:
        'border-dividerLight data-[checked]:bg-infoLight data-[checked]:border-infoLight [&>svg]:fill-white outline-none',
      success:
        'border-dividerLight data-[checked]:bg-successLight data-[checked]:border-successLight outline-successLight [&>svg]:fill-white',
      error:
        'border-dividerLight data-[checked]:bg-errorLight data-[checked]:border-errorLight outline-errorLight [&>svg]:fill-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type CheckBoxCustomType = CheckboxProps &
  VariantProps<typeof checkBoxCustomStyles> & {
    label?: string;
  };

export const CheckBoxCustom = ({
  label = '',
  className,
  onChange,
  variant,
  checked,
  ...props
}: CheckBoxCustomType) => {
  return (
    <Field className="flex items-center gap-2">
      <Checkbox
        name={label}
        onChange={onChange}
        checked={checked}
        className={cn(checkBoxCustomStyles({ className, variant }))}
        {...props}
      >
        <CheckIcon className="hidden group-data-[checked]:block" width="15" height="13" />
      </Checkbox>
      <Label>{label}</Label>
    </Field>
  );
};
