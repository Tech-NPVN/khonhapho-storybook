import { Table } from '@/common/components';
import { Input, Select } from '@/components/DataEntry';
import { Button, ResetIcon, SearchIcon, Typography } from '@/components/General';
import { ACCOUNT, ACCOUNT_COLUMNS, AccountType } from './constant';

const OnlineAccount = () => {
  return (
    <div className="w-full p-4 rounded-lg bg-white dark:bg-primaryColorDark">
      <div className="flex justify-start items-center gap-2 pb-4 border-b-[1px] border-b-dividerLight/60 dark:border-b-dividerDark/60">
        <Typography variant="h5" className="font-medium font-sm">
          Tài khoản đang online
        </Typography>
        <span className="bg-errorLight text-white font-medium text-[12px] w-auto h-auto min-h-5 min-w-5 px-2 flex justify-center items-center rounded-full">
          12
        </span>
      </div>

      <div className="pt-4">
        <div className="grid grid-cols-5 gap-1 mb-2">
          <Input
            className="bg-white dark:bg-primaryColorDark w-full col-span-1 col-start-5"
            placeholder="Nhập nội dung tìm kiếm"
            suffixIcon={
              <button className="relative flex left-4 items-center justify-center w-12 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
                <SearchIcon color="white" />
              </button>
            }
          />
        </div>
        <div className="grid grid-cols-5 gap-1">
          <Select placeholder="Chi nhánh"></Select>
          <Select placeholder="Phòng ban"></Select>
          <Select placeholder="Nhập tên tài khoản"></Select>
          <Button variant="outlineWhite" className="w-full" startIcon={<ResetIcon />}>
            Đặt lại
          </Button>
        </div>
      </div>

      <Table<AccountType>
        columns={ACCOUNT_COLUMNS}
        rows={Array.from({ length: 12 }, () => ({ ...ACCOUNT }))}
        className="mt-7"
      />
    </div>
  );
};

export default OnlineAccount;
