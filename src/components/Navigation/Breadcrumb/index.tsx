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

/**
 * @component
 * const breadcrumbs = [{ label: 'Home', href: '/', icon?: <HomeIcon /> }]
 * return (
 *   <Breadcrumb breadcrumbs={breadcrumbs} />
 * )
 */

export const Breadcrumb = ({ breadcrumbs = [], className }: BreadcrumbProps) => {
  return (
    <ol className={cn(breadcrumbStyles({ className }))}>
      {breadcrumbs.map((breadcrumb, i) => (
        <li key={i} className="flex items-center">
          <a
            href={breadcrumb.href}
            className={`flex items-center text-gray-400 hover:text-[#374151] hover:font-bold transition-all ease-in-out duration-300 ${i === breadcrumbs.length - 1 && '!text-[#374151] !font-bold'}`}
          >
            {breadcrumb.icon && <span className="mr-2">{breadcrumb.icon}</span>}
            <span>{breadcrumb.label}</span>
          </a>
          {i < breadcrumbs.length - 1 && (
            <span className="after:content-['\203A'] after:block after:pb-[2px] after:px-3 after:text-gray-400 after:text-xl " />
          )}
        </li>
      ))}
    </ol>
  );
};

export const HomeIcon = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      style={{ width: '18px', height: 18 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
};
