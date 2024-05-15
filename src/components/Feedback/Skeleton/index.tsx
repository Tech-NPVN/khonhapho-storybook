import { cn } from '@/utils';
import { HTMLAttributes, ReactNode } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  activeAnimation?: boolean;
  children?: string | ReactNode;
  width?: number;
  height?: number;
};

export const Skeleton = ({
  className,
  activeAnimation = true,
  children,
  width = 250,
  height = 30,
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        `flex items-center justify-center bg-gray-200 rounded-md ${activeAnimation && 'animate-pulse'}`,
        className,
      )}
      style={{ width, height }}
      {...props}
    >
      {children}
    </div>
  );
};
