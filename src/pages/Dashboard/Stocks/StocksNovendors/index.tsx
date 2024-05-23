import { TabList, TabPanel } from '@/components/DataDisplay/TabsV2';
import { Input, IOption, Select } from '@/components/DataEntry';
import {
  ArrowDownArrowUpIcon,
  DetailIcon,
  ListUiIcon,
  SearchIcon,
  Typography,
} from '@/components/General';
import { useState } from 'react';
import { SORT_OPTIONS } from '../../Warehouse/const';
import WarehouseDetails from '../../Warehouse/Details';
import WarehouseFilter from '../../Warehouse/Filter';
import WarehouseList from '../../Warehouse/List';

export const StocksNovendors = () => {
  const [sort, setSort] = useState<IOption>(SORT_OPTIONS[0]);
  return (
    <div className="w-full rounded-lg h-96 ">
      <div className="px-5 py-3 bg-white rounded-t-lg dark:bg-primaryColorDark">
        <Typography variant="h2" className="text-sm font-medium uppercase dark:text-white">
          KHO HÀNG TỰ DO
        </Typography>
        <div className="text-sm opacity-80">
          <strong className="text-errorLight dark:text-errorDark">Lưu ý: </strong>Tự động xoá sau 7
          ngày
        </div>
      </div>
      <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 px-5"></div>
      <div className="flex flex-wrap items-center justify-between px-5 bg-white dark:bg-primaryColorDark">
        <div className="mt-5 lg:w-[320px] w-full">
          <TabList
            items={[
              <span className="flex items-center gap-1">
                <ListUiIcon />
                <span>Danh sách</span>
              </span>,
              <span className="flex items-center gap-1">
                <DetailIcon width="18" />
                <span>Chi tiết</span>
              </span>,
            ]}
            name="novendors"
            defaultIndex={0}
          />
        </div>
        <div className="flex justify-end w-full md:w-[294px]">
          <div className="flex w-full md:w-[294px] mt-4">
            <Input
              className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark "
              placeholder="Nhập đ/c, SĐT, seri sổ"
            />
            <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
              <SearchIcon color="white" />
            </button>
          </div>
        </div>
      </div>
      {/* table */}
      <TabPanel name="novendors" tabIndex={0}>
        <div className="px-5 pt-3 pb-5 -mt-2 bg-white rounded-b-lg dark:bg-primaryColorDark">
          <WarehouseList />
        </div>
      </TabPanel>
      <div>
        <TabPanel name="novendors" tabIndex={1}>
          <div className="px-5 pt-3 pb-5 bg-white rounded-b-lg dark:bg-primaryColorDark">
            <WarehouseFilter
              onChange={(value) => {
                console.log(value);
              }}
            />
            <div className="flex justify-end w-full mt-5 ">
              <div className="min-w-[200px]">
                <Select
                  value={sort}
                  options={SORT_OPTIONS}
                  onChange={(value) => setSort(value as IOption)}
                  placeholder="..."
                  customIcon={<ArrowDownArrowUpIcon width="8" className="me-2" />}
                ></Select>
              </div>
            </div>
          </div>
          <WarehouseDetails />
        </TabPanel>
      </div>
    </div>
  );
};
