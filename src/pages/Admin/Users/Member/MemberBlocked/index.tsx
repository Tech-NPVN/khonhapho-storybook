import { ItemTableProps, Table } from '@/common/components';
import { Popover } from '@/components/DataDisplay';
import { ThreeDotsIcon } from '@/components/General';
import { useState } from 'react';
import { CreateOrUpdate } from '../Form';
import { MEMBERS, MEMBER_COLUMNS, MemberType } from '../constant';

const MemberBlocked = () => {
  const [openUpdate, setOpenUpdate] = useState<boolean>(false);

  const columns: readonly ItemTableProps<MemberType>[] = [
    ...MEMBER_COLUMNS,
    {
      key: 'action',
      header: 'T.Tác',
      alignment: 'center',
      render: () => (
        <Popover
          trigger={<ThreeDotsIcon className="w-6 h-6 p-1" />}
          anchor="bottom end"
          itemsPanel={[
            {
              content: 'Xem/sửa tài khoản',
              key: 'view-or-update',
              onClick: () => setOpenUpdate(true),
            },
            {
              content: 'Cấp lại mật khẩu',
              key: 'get-pasword',
            },
            {
              content: 'Thay đổi chức danh',
              key: 'change-role',
              disabled: true,
            },
            {
              content: 'Gán huy hiệu',
              key: 'assign-medal',
              disabled: true,
            },
            {
              content: 'Mời vào ban đào tạo',
              key: 'invite-to-training-department',
              disabled: true,
            },
            {
              content: 'Xem đánh giá',
              key: 'view-rating',
            },
            {
              content: 'Tạm dừng(khoá TK)',
              key: 'block',
              disabled: true,
            },
            {
              content: 'Dừng hợp tác',
              key: 'stop-collab',
              disabled: true,
            },
          ]}
        />
      ),
    },
  ];

  const blockMembers = MEMBERS.map((mem) => {
    mem.status = 'Đã khoá';
    return mem;
  });

  return (
    <>
      <Table<MemberType> rows={blockMembers} columns={columns} />

      <CreateOrUpdate open={openUpdate} setOpen={setOpenUpdate} type="update" />
    </>
  );
};

export default MemberBlocked;
