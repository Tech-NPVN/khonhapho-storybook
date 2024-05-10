import { cn } from '@/utils';
import Tippy from '@tippyjs/react';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactElement } from 'react';
import 'tippy.js/dist/tippy.css';

const tooltipStyles = cva('text-[#fff] block px-[4px] py-[2px] text-sm font-medium');

export type TooltipProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof tooltipStyles> & {
    children: ReactElement;
    placement?:
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'right'
      | 'right-start'
      | 'right-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'
      | 'auto'
      | 'auto-end'
      | 'auto-start';
    trigger?: 'mouseenter' | 'click';
    title: string;
    color?: string;
    arrow?: boolean;
    delay?: number | [number | null, number | null];
  };

export const Tooltip = ({
  children,
  title,
  placement = 'bottom',
  trigger = 'mouseenter',
  color = '',
  delay = [0, 200],
  className,
  arrow = true,
  ...props
}: TooltipProps) => {
  return (
    <Tippy
      content={
        <span
          style={{ backgroundColor: color }}
          className={cn(tooltipStyles({ className }))}
          {...props}
        >
          {title}
        </span>
      }
      delay={delay}
      offset={[0, 12]}
      hideOnClick={true}
      placement={placement}
      arrow={arrow}
      trigger={trigger}
    >
      {children}
    </Tippy>
  );
};
