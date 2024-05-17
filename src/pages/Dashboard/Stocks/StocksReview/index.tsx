import { Input } from '@/components/DataEntry';
import { SearchIcon, Typography } from '@/components/General';

export const StocksReview = () => {
  return (
    <div className="w-full px-6 py-3 bg-white rounded-lg h-96 dark:bg-primaryColorDark">
      <div className="flex items-center justify-between pb-3">
        <Typography variant="h2" className="text-sm font-medium dark:text-white">
          Lịch sử đầu khách báo cáo
        </Typography>
      </div>
      <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
      <div className="flex justify-end">
        <div className="flex w-full md:w-[294px] mt-4">
          <Input
            className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark "
            placeholder="Nhập nội dung tìm kiếm"
          />
          <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
            <SearchIcon color="white" />
          </button>
        </div>
      </div>

      {/* table */}
    </div>
  );
};
