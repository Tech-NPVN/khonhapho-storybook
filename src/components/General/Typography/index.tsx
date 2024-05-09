import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const typographyStyles = cva('', {
  variants: {
    variant: {
      h1: 'text-3xl font-bold',
      h2: 'text-2xl font-semibold',
      h3: 'text-xl font-semibold',
      h4: 'text-lg font-medium',
      h5: 'text-base font-medium',
      h6: 'text-sm font-medium',
      span: 'text-base font-normal',
      p: 'text-base font-normal',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyStyles> & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
    children: string;
    color?: string;
  };

export const Typography = ({
  variant = 'h1',
  className,
  color,
  children,
  ...props
}: TypographyProps) => {
  const Tag = variant;

  return (
    <Tag className={cn(typographyStyles({ variant, className }))} style={{ color }} {...props}>
      {children}
    </Tag>
  );
};
