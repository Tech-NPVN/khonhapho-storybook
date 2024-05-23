import { ItemTableProps } from '@/common/components';
import { HiddenText } from '@/common/components/hidden-text';
import { Avatar } from '@/components/DataDisplay';
import { Rate } from '@/components/DataEntry';
import { AVATAR_DEMO } from '@/constants/data';
import { dateToStringDate, getTimeAgo } from '@/pages/Dashboard/Warehouse/helpers';

export type MemberSocialsType = {
  type: 'zalo' | 'messenger' | 'facebook';
  url?: string;
};

export type MemberType = {
  rate: number;
  user: {
    name: string;
    avatar: string;
    onlineTime: Date | string;
  };
  role: string;
  branch: string;
  block?: string;
  department: string;
  expired?: Date | string;
  birthDate: Date | string;
  phone: string;
  socialsChat: MemberSocialsType[];
  email: string;
  identity: string;
  joinedDate: Date | string;
  status: 'Đang hợp tác' | 'Đã khoá' | 'Chưa kích hoạt';
};

export const MEMBERS: MemberType[] = [
  {
    rate: 4.5,
    user: {
      name: 'Nguyễn Văn A',
      avatar: AVATAR_DEMO,
      onlineTime: new Date(),
    },
    role: 'Chủ tịch',
    branch: 'NPVN - HÀ NỘI',
    block: undefined,
    department: 'HĐQT',
    expired: undefined,
    birthDate: new Date(),
    phone: '0123456789',
    socialsChat: [
      {
        type: 'zalo',
        url: '123',
      },
      {
        type: 'messenger',
      },
      {
        type: 'facebook',
      },
    ],
    email: 'deptrai1@gmail.com',
    identity: 'deptrailadeptrai',
    joinedDate: new Date(),
    status: 'Đang hợp tác',
  },
  {
    rate: 2.4,
    user: {
      name: 'Nguyễn Văn B',
      avatar: AVATAR_DEMO,
      onlineTime: new Date(),
    },
    role: 'Chủ tịch',
    branch: 'NPVN - HÀ NỘI',
    block: undefined,
    department: 'HĐQT',
    expired: undefined,
    birthDate: new Date(),
    phone: '0123456789',
    socialsChat: [
      {
        type: 'zalo',
      },
      {
        type: 'messenger',
      },
      {
        type: 'facebook',
        url: '2',
      },
    ],
    email: 'deptrai2@gmail.com',
    identity: 'qualadeptrailuon',
    joinedDate: new Date(),
    status: 'Đang hợp tác',
  },
  {
    rate: 4,
    user: {
      name: 'Nguyễn Văn C',
      avatar: AVATAR_DEMO,
      onlineTime: new Date(),
    },
    role: 'Chủ tịch',
    branch: 'NPVN - HÀ NỘI',
    block: undefined,
    department: 'HĐQT',
    expired: undefined,
    birthDate: new Date(),
    phone: '0123456789',
    socialsChat: [
      {
        type: 'zalo',
        url: '123',
      },
      {
        type: 'messenger',
        url: '123',
      },
      {
        type: 'facebook',
        url: '123123',
      },
    ],
    email: 'deptrai3@gmail.com',
    identity: 'deptraisieucap',
    joinedDate: new Date(),
    status: 'Đang hợp tác',
  },
  {
    rate: 4.2,
    user: {
      name: 'Nguyễn Văn D',
      avatar: AVATAR_DEMO,
      onlineTime: new Date(),
    },
    role: 'Chủ tịch',
    branch: 'NPVN - HÀ NỘI',
    block: undefined,
    department: 'HĐQT',
    expired: undefined,
    birthDate: new Date(),
    phone: '0123456789',
    socialsChat: [
      {
        type: 'zalo',
      },
      {
        type: 'messenger',
        url: '123',
      },
      {
        type: 'facebook',
      },
    ],
    email: 'deptrai4@gmail.com',
    identity: 'deptraisieucap',
    joinedDate: new Date(),
    status: 'Đang hợp tác',
  },
  {
    rate: 2,
    user: {
      name: 'Nguyễn Văn E',
      avatar: AVATAR_DEMO,
      onlineTime: new Date(),
    },
    role: 'Chủ tịch đẹp trai',
    branch: 'NPVN - HÀ NỘI',
    block: undefined,
    department: 'HĐQT',
    expired: undefined,
    birthDate: new Date(),
    phone: '0123456789',
    socialsChat: [
      {
        type: 'zalo',
      },
      {
        type: 'messenger',
      },
      {
        type: 'facebook',
      },
    ],
    email: 'deptrai5@gmail.com',
    identity: 'deptraisieucap',
    joinedDate: new Date(),
    status: 'Đang hợp tác',
  },
  {
    rate: 5,
    user: {
      name: 'Thư kí',
      avatar: AVATAR_DEMO,
      onlineTime: new Date(),
    },
    role: 'Thư kí',
    branch: 'NPVN - HÀ NỘI',
    block: undefined,
    department: 'HĐQT',
    expired: undefined,
    birthDate: new Date(),
    phone: '0123456789',
    socialsChat: [
      {
        type: 'zalo',
        url: '123',
      },
      {
        type: 'messenger',
      },
      {
        type: 'facebook',
      },
    ],
    email: 'thuky1@gmail.com',
    identity: '0125158128283',
    joinedDate: new Date(),
    status: 'Đang hợp tác',
  },
  {
    rate: 5,
    user: {
      name: 'Thư kí',
      avatar: AVATAR_DEMO,
      onlineTime: new Date(),
    },
    role: 'Thư kí',
    branch: 'NPVN - HÀ NỘI',
    block: undefined,
    department: 'HĐQT',
    expired: undefined,
    birthDate: new Date(),
    phone: '0123456789',
    socialsChat: [
      {
        type: 'zalo',
        url: '123',
      },
      {
        type: 'messenger',
      },
      {
        type: 'facebook',
      },
    ],
    email: 'thuky1@gmail.com',
    identity: '0125158128283',
    joinedDate: new Date(),
    status: 'Đang hợp tác',
  },
  {
    rate: 5,
    user: {
      name: 'Thư kí',
      avatar: AVATAR_DEMO,
      onlineTime: new Date(),
    },
    role: 'Thư kí',
    branch: 'NPVN - HÀ NỘI',
    block: undefined,
    department: 'HĐQT',
    expired: undefined,
    birthDate: new Date(),
    phone: '0123456789',
    socialsChat: [
      {
        type: 'zalo',
        url: '123',
      },
      {
        type: 'messenger',
      },
      {
        type: 'facebook',
      },
    ],
    email: 'thuky1@gmail.com',
    identity: '0125158128283',
    joinedDate: new Date(),
    status: 'Đang hợp tác',
  },
  {
    rate: 5,
    user: {
      name: 'Thư kí',
      avatar: AVATAR_DEMO,
      onlineTime: new Date(),
    },
    role: 'Thư kí',
    branch: 'NPVN - HÀ NỘI',
    block: undefined,
    department: 'HĐQT',
    expired: undefined,
    birthDate: new Date(),
    phone: '0123456789',
    socialsChat: [
      {
        type: 'zalo',
        url: '123',
      },
      {
        type: 'messenger',
        url: '1',
      },
      {
        type: 'facebook',
      },
    ],
    email: 'thuky1@gmail.com',
    identity: '0125158128283',
    joinedDate: new Date(),
    status: 'Đang hợp tác',
  },
];

export const MEMBER_COLUMNS: readonly ItemTableProps<MemberType>[] = [
  {
    key: 'rate',
    header: 'Đánh giá',
    render: (values) => (
      <div className="flex items-center gap-2">
        <Rate rating={values.rate} />
        <b>{values.rate}</b>
      </div>
    ),
  },
  {
    key: 'name',
    header: 'Họ tên',
    render: (values, i) => (
      <div className="flex items-center gap-2">
        <Avatar height={34} width={34} src={values.user.avatar} alt={'avatar-' + i} />
        <div className="">
          <p className="font-semibold link">{values.user.name}</p>
          <p className="opacity-80 text-[10px]">{getTimeAgo(values.user.onlineTime as Date)}</p>
        </div>
      </div>
    ),
  },
  {
    key: 'role',
    header: 'Chức danh',
  },
  {
    key: 'branch',
    header: 'Chi nhánh',
  },
  {
    key: 'department',
    header: 'Phòng ban',
  },
  {
    key: 'expired',
    header: 'HSD',
    render: (values) => (values.expired ? getTimeAgo(values.expired as Date) : '-'),
  },
  {
    key: 'birthDate',
    header: 'Ngày sinh',
    render: (values) => dateToStringDate(values.birthDate as Date),
  },
  {
    key: 'phone',
    header: 'SĐT',
    render: (values) => <span className="link">{values.phone}</span>,
  },
  {
    key: 'socialsChat',
    header: 'Chat',
    render: (values) => {
      const icons = values.socialsChat;

      return (
        <div className="flex items-center gap-4">
          {icons.map((icon) => {
            if (icon.url) {
              switch (icon.type) {
                case 'zalo':
                  return <img src="/zalo-icon.png" alt="zalo-icon" className="cursor-pointer" />;
                case 'facebook':
                  return (
                    <img
                      src="/messenger-icon.png"
                      alt="messenger-icon"
                      className="cursor-pointer"
                    />
                  );
                case 'messenger':
                  return (
                    <img src="/facebook-icon.png" alt="facebook-icon" className="cursor-pointer" />
                  );
                default:
                  return;
              }
            } else {
              return (
                <p key={icon.type} className="w-4">
                  -
                </p>
              );
            }
          })}
        </div>
      );
    },
  },
  {
    key: 'email',
    header: 'Email',
    render: (values) => <p className="link">{values.email}</p>,
  },
  {
    key: 'identity',
    header: 'CCCD',
    cnRow: 'max-w-[110px]',
    render: (values) => <HiddenText text={values.identity} />,
  },
  {
    key: 'joinedDate',
    header: 'Ngày tham gia',
    render: (values) => dateToStringDate(values.joinedDate as Date),
  },
  {
    key: 'status',
    header: 'Trạng thái',
    render: (values) => {
      return (
        <span
          className={`px-2 py-1 font-semibold border-[1px] rounded ${values.status === 'Đang hợp tác' ? 'tag-blue' : 'tag-red'}`}
        >
          {values.status}
        </span>
      );
    },
  },
];
