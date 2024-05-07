import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode, forwardRef } from 'react';

const buttonStyles = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-green text-white hover:bg-primary/90',
        outline: 'border border-green text-green hover:bg-accent hover:text-accent-foreground',
        secondary: 'hover:bg-secondary/80',
        ghost: 'text-green hover:bg-accent hover:text-accent-foreground',
        link: 'bg-transparent underline-offset-4 hover:text-green hover:underline',
      },
      size: {
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
);


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    isLoading?: boolean;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
    color?: string;
    backgroundColor?: string;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      isLoading,
      endIcon,
      startIcon,
      color,
      backgroundColor,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonStyles({ className, variant, size }))}
        style={{ color, backgroundColor }}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {startIcon ?? <></>}
        {children}
        {endIcon ?? <></>}
      </button>
    );
  },
);

