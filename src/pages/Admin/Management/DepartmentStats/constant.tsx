import { ItemTableProps } from '@/common/components';
import { Avatar } from '@/components/DataDisplay';
import { AVATAR_DEMO } from '@/constants/data';

export type DepartmentType = {
  branch: {
    name: string;
    deparment: {
      name: string;
      manager?: {
        avatar: string;
        name: string;
      };
      deputyQuantity?: number;
      assistantQuantity?: number;
      ownerQuantity?: number;
      staffQuantity?: number;
      learnerQuantity?: number;
      totalMember: number;
      fluctuations?: {
        type: 'increase' | 'decrease';
        count: number;
      };
    };
  };
};

export const DEPARTMENTS: DepartmentType[] = [
  {
    branch: {
      name: 'NPVN - Hà Nội',
      deparment: {
        name: 'HĐQT',
        manager: {
          avatar: AVATAR_DEMO,
          name: 'Nguyễn Văn A',
        },
        ownerQuantity: 1,
        totalMember: 2,
        fluctuations: {
          type: 'increase',
          count: 1,
        },
      },
    },
  },
  {
    branch: {
      name: 'NPVN - Hà Nội',
      deparment: {
        name: 'HĐQT',
        manager: {
          avatar: AVATAR_DEMO,
          name: 'Nguyễn Văn A',
        },
        ownerQuantity: 1,
        assistantQuantity: 1,
        deputyQuantity: 2,
        staffQuantity: 1,
        learnerQuantity: 1,
        totalMember: 5,
        fluctuations: {
          type: 'increase',
          count: 4,
        },
      },
    },
  },
  {
    branch: {
      name: 'NPVN - Hà Nội',
      deparment: {
        name: 'Thư ký',
        ownerQuantity: 1,
        assistantQuantity: 1,
        deputyQuantity: 2,
        staffQuantity: 3,
        learnerQuantity: 1,
        totalMember: 5,
        fluctuations: {
          type: 'decrease',
          count: 1,
        },
      },
    },
  },
  {
    branch: {
      name: 'NPVN - Hà Nội',
      deparment: {
        name: '001',
        ownerQuantity: 1,
        deputyQuantity: 2,
        learnerQuantity: 1,
        totalMember: 5,
        fluctuations: {
          type: 'increase',
          count: 2,
        },
      },
    },
  },
  {
    branch: {
      name: 'NPVN - Hà Nội',
      deparment: {
        name: '002',
        ownerQuantity: 2,
        totalMember: 1,
      },
    },
  },
  {
    branch: {
      name: 'NPVN - Hà Nội',
      deparment: {
        manager: {
          avatar: AVATAR_DEMO,
          name: 'Nguyễn Văn A',
        },
        name: '003',
        ownerQuantity: 1,
        totalMember: 19,
      },
    },
  },
  {
    branch: {
      name: 'NPVN - Hà Nội',
      deparment: {
        name: '004',
        ownerQuantity: 1,
        deputyQuantity: 2,
        learnerQuantity: 1,
        totalMember: 15,
        fluctuations: {
          type: 'decrease',
          count: 3,
        },
      },
    },
  },
  {
    branch: {
      name: 'NPVN - Hà Nội',
      deparment: {
        name: '005',
        ownerQuantity: 1,
        deputyQuantity: 2,
        learnerQuantity: 1,
        totalMember: 5,
        fluctuations: {
          type: 'increase',
          count: 2,
        },
      },
    },
  },
  {
    branch: {
      name: 'NPVN - Hà Nội',
      deparment: {
        name: '006',
        totalMember: 5,
        fluctuations: {
          type: 'increase',
          count: 2,
        },
      },
    },
  },
];

export const DEPARTMENT_COLUMNS: readonly ItemTableProps<DepartmentType>[] = [
  {
    key: 'deparment',
    header: 'Phòng',
    render: (values) => values.branch.deparment.name,
  },
  {
    key: 'branch',
    header: 'Chi nhánh',
    render: (values) => values.branch.name,
  },
  {
    key: 'manager',
    header: 'Trưởng phòng',
    cnRow: 'h-10',
    render: (values, i) =>
      values.branch.deparment.manager ? (
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar
            height={32}
            width={32}
            src={values.branch.deparment.manager?.avatar}
            alt={'avatar-manager' + i}
          />
          <span className="link">{values.branch.deparment.manager?.name}</span>
        </div>
      ) : (
        '-'
      ),
  },
  {
    key: 'deputyQuantity',
    header: 'Phó phòng',
    alignment: 'center',
    render: (values) => values.branch.deparment.deputyQuantity ?? '-',
  },
  {
    key: 'assistantQuantity',
    header: 'Trợ lý',
    alignment: 'center',
    render: (values) => values.branch.deparment.assistantQuantity ?? '-',
  },
  {
    key: 'ownerQuantity',
    header: 'Đầu chủ',
    alignment: 'center',
    render: (values) => values.branch.deparment.ownerQuantity ?? '-',
  },
  {
    key: 'staffQuantity',
    header: 'Chuyên viên',
    alignment: 'center',
    render: (values) => values.branch.deparment.staffQuantity ?? '-',
  },
  {
    key: 'learnerQuantity',
    header: 'Học viên',
    alignment: 'center',
    render: (values) => values.branch.deparment.learnerQuantity ?? '-',
  },
  {
    key: 'totalMember',
    header: 'Tổng T.Viên',
    alignment: 'center',
    render: (values) => <b>{values.branch.deparment.totalMember}</b>,
  },
  {
    key: 'fluctuations',
    header: 'Biến động',
    alignment: 'center',
    cnRow: 'h-10 border-l-[1px] border-l-dividerLight dark:border-l-dividerDark',
    render: (values) => {
      const {
        deparment: { fluctuations },
      } = values.branch;

      if (!fluctuations) {
        return '-';
      }

      return (
        <b
          className={`${fluctuations.type === 'increase' ? 'text-primaryButtonLight dark:text-primaryButtonDark' : 'text-errorLight dark:text-errorDark'}`}
        >
          {fluctuations.type === 'increase' ? '+' : '-'} {fluctuations.count}
        </b>
      );
    },
  },
];
