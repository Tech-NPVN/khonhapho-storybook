import { Typography } from '@/components/General';
import { ReactNode } from 'react';

type UserElementProps = {
  title: string;
  children: ReactNode;
};

const UserElement = ({ title, children }: UserElementProps) => {
  return (
    <div className="rounded-md bg-white">
      <Typography variant="h3" className="px-6 py-4">
        {title}
      </Typography>
      <hr className="w-full h-[0.5px] bg-textSecondaryDark" />
      <div className="p-5">{children}</div>
    </div>
  );
};

export default UserElement;
