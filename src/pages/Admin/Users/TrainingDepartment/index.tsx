import { ItemTableProps, Table } from '@/common/components';
import { Popover } from '@/components/DataDisplay';
import { Input, Select } from '@/components/DataEntry';
import { SearchIcon, ThreeDotsIcon, Typography } from '@/components/General';
import { useState } from 'react';
import { CreateOrUpdate } from '../Member/Form';
import { MEMBERS, MEMBER_COLUMNS, MemberType } from '../Member/constant';

const TrainingDepartment = () => {
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
      <div className="grid grid-cols-6 gap-1">
        <Input
          className="bg-white dark:bg-primaryColorDark w-full rounded-md col-span-1 col-start-3"
          placeholder="Nhập nội dung tìm kiếm"
          suffixIcon={
            <button className="relative flex left-3 items-center justify-center w-12 h-10 rounded-s-none bg-primaryButtonLight rounded-e-md">
              <SearchIcon color="white" />
            </button>
          }
        />
        <Select placeholder="Chức vụ" />
        <Select placeholder="Chi nhánh" />
        <Select placeholder="Phòng ban" disabled />
      </div>

      <div className="py-5">
        <Typography variant="p" className="text-[15px]">
          Tổng số thành viên: <strong className="font-semibold">10</strong>
        </Typography>
      </div>

      <Table<MemberType> rows={MEMBERS} columns={columns} />

      <CreateOrUpdate open={openUpdate} setOpen={setOpenUpdate} type="update" />
    </>
  );
};

export default TrainingDepartment;
