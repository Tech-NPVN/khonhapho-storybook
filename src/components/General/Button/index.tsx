import { ComponentProps, forwardRef } from 'react';

type ButtonProps = ComponentProps<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return (
    <button
      ref={ref}
      // className={cn(buttonStyles({ variant, size, colorscheme, className }))}
      {...props}
    />
  );
});
