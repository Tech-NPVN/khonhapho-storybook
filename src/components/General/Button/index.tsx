import { ComponentProps, forwardRef } from 'react';

type ButtonProps = ComponentProps<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return <button className="text-blue-400 p-3" ref={ref} {...props} />;
});
