import { ItemTableProps, Table } from '@/common/components';
import { Popover } from '@/components/DataDisplay';
import { ThreeDotsIcon } from '@/components/General';
import { useState } from 'react';
import { CreateOrUpdate } from '../Form';
import { MEMBERS, MEMBER_COLUMNS, MemberType } from '../constant';

const MemberCollab = () => {
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
            },
            {
              content: 'Mời vào ban đào tạo',
              key: 'invite-to-training-department',
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

  return (
    <>
      <Table<MemberType> rows={MEMBERS} columns={columns} />

      <CreateOrUpdate open={openUpdate} setOpen={setOpenUpdate} type="update" />
    </>
  );
};

export default MemberCollab;
