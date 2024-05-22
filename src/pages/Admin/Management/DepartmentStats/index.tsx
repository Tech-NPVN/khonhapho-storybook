import { Table } from '@/common/components';
import { Input, Select } from '@/components/DataEntry';
import { Button, ResetIcon, SearchIcon, Typography } from '@/components/General';
import { DEPARTMENTS, DEPARTMENT_COLUMNS, DepartmentType } from './constant';

const DepartmentStats = () => {
  return (
    <div className="w-full p-4 rounded-lg bg-white dark:bg-primaryColorDark">
      <div className="pb-4 border-b-[1px] border-b-dividerLight/60 dark:border-b-dividerDark/60">
        <Typography variant="h5" className="font-medium font-sm">
          Thống kê số lượng nhân sự các phòng
        </Typography>
      </div>

      <div className="pt-4">
        <div className="grid grid-cols-5 gap-1">
          <div className="flex col-start-3">
            <Input className="rounded-e-none rounded-s-lg" placeholder="Nhập tên phòng tìm kiếm" />
            <button className="w-10 h-10 px-2 flex justify-center items-center border-[1px] border-dividerLight dark:border-dividerDark border-l-0 rounded-tr-lg rounded-br-lg">
              <SearchIcon />
            </button>
          </div>
          <Select placeholder="Nhập tên tài khoản"></Select>
          <Button variant="outlineWhite" className="w-full" startIcon={<ResetIcon />}>
            Đặt lại
          </Button>
        </div>
      </div>

      <Typography variant="p" className="text-[15px] py-5">
        Tổng số lượng phòng: <strong className="font-semibold">17</strong>
      </Typography>

      <Table<DepartmentType> columns={DEPARTMENT_COLUMNS} rows={DEPARTMENTS} />
    </div>
  );
};

export default DepartmentStats;
