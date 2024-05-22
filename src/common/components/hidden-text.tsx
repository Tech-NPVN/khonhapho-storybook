import { EyeIcon, EyeSlashIcon } from '@/components/General';
import { DetailedHTMLProps, useState } from 'react';

type HiddenTextProps = DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  className?: string;
  text: string;
};

export const HiddenText = ({ className, text, ...props }: HiddenTextProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={`w-full flex items-center justify-between space-x-2 ${className}`}>
      <a {...props}>{!show ? text.replace(/^.{7}/, '********') : text}</a>
      <button type="button" className="text-xs" onClick={() => setShow((prev) => !prev)}>
        {!show ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
    </div>
  );
};
