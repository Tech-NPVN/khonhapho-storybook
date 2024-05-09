import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';

const breadcrumbStyles = cva('flex items-center');

export type ItemBreadcrumb = {
  label: string;
  href: string;
  icon?: ReactNode;
};

type BreadcrumbProps = React.ComponentProps<'ol'> &
  VariantProps<typeof breadcrumbStyles> & {
    breadcrumbs: ItemBreadcrumb[];
  };

export const Breadcrumb = ({ breadcrumbs, className }: BreadcrumbProps) => {
  return (
    <ol className={cn(breadcrumbStyles({ className }))}>
      {breadcrumbs.map((breadcrumb, i) => (
        <li key={i} className="flex items-center">
          <a
            href={breadcrumb.href}
            className={`flex items-center text-gray-400 hover:text-[#000] transition-all ease-in-out duration-300 ${i === breadcrumbs.length - 1 && '!text-[#000]'}`}
          >
            {breadcrumb.icon && <span className="mr-2">{breadcrumb.icon}</span>}
            <span>{breadcrumb.label}</span>
          </a>
          {i < breadcrumbs.length - 1 && (
            <span className="after:content-['\203A'] after:block after:pb-[2px] after:px-3 after:text-gray-400 after:text-xl" />
          )}
        </li>
      ))}
    </ol>
  );
};
