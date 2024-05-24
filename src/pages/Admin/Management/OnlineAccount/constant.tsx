import { ItemTableProps } from '@/common/components';
import { Avatar, Popover } from '@/components/DataDisplay';
import { ThreeDotsIcon } from '@/components/General';
import { AVATAR_DEMO } from '@/constants/data';

export type AccountType = {
  avatar: string;
  fullName: string;
  role: string;
  phoneNumber: string;
  member: {
    branch: string;
    department: string;
    group?: string;
  };
};

export const ACCOUNT: AccountType = {
  avatar: AVATAR_DEMO,
  fullName: 'Nguyen Van A',
  member: {
    branch: 'NPVN - HÀ NỘI',
    department: 'Code',
  },
  role: 'Thư ký',
  phoneNumber: '0123456789',
};

export const ACCOUNT_COLUMNS: readonly ItemTableProps<AccountType>[] = [
  {
    key: 'avatar',
    header: 'Avatar',
    render: (values, i) => (
      <Avatar height={32} width={32} src={values.avatar} alt={'avatar-' + i} />
    ),
  },
  {
    key: 'fullName',
    header: 'Họ tên',
    render: (values) => <span className="link">{values.fullName}</span>,
  },
  {
    key: 'role',
    header: 'Chức vụ',
  },
  {
    key: 'phoneNumber',
    header: 'SĐT',
    render: (values) => <span className="link">{values.phoneNumber}</span>,
  },
  {
    key: 'member.branch',
    header: 'Chi nhánh',
    render: (values) => <>{values.member.branch}</>,
  },
  {
    key: 'member.department',
    header: 'Phòng ban',
    render: (values) => <>{values.member.department}</>,
  },
  {
    key: 'member.group',
    header: 'Nhóm',
    render: (values) => <>{values.member.group ?? '-'}</>,
  },
  {
    key: 'action',
    header: 'T.Tác',
    render: () => (
      <Popover
        trigger={<ThreeDotsIcon className="w-6 h-6 p-1" />}
        anchor="bottom end"
        itemsPanel={[
          {
            content: 'Gỡ lỗi đăng nhập',
            key: 'solve-login-error',
          },
        ]}
      />
    ),
  },
];
