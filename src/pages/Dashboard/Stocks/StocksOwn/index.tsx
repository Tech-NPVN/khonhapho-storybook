import { TabList, TabPanel } from '@/components/DataDisplay/TabsV2';
import { Input } from '@/components/DataEntry';
import { AddIcon, Button, SearchIcon, Typography } from '@/components/General';
import { Link } from 'react-router-dom';
import FilterStocksOwn from './Filter';
import { OwnBook } from './OwnBook';

export const StocksOwn = () => {
  const STOCKSOWN_TABS: React.ReactNode[] = [
    <span className="flex items-center gap-2">
      <span>Chờ duyệt</span>
      <span className="flex items-center justify-center w-5 h-5 text-sm text-white rounded-full bg-errorLight">
        1
      </span>
    </span>,
    <span className="flex items-center gap-1">
      <span>Đã duyệt</span>
      <span className="flex items-center justify-center w-5 h-5 text-sm text-white rounded-full bg-errorLight">
        1
      </span>
    </span>,
    <span className="flex items-center gap-1">
      <span>Từ chối</span>
      <span className="flex items-center justify-center w-5 h-5 text-sm text-white rounded-full bg-errorLight">
        1
      </span>
    </span>,
    <span className="flex items-center gap-1">
      <span>Thùng rác</span>
      <span className="flex items-center justify-center w-5 h-5 text-sm text-white rounded-full bg-errorLight">
        1
      </span>
    </span>,
  ];

  return (
    <>
      <div className="w-full pb-5 rounded-lg lg:rounded-t-lg">
        <div className="flex items-center justify-between px-5 pt-3 pb-3 bg-white rounded-t-lg dark:bg-primaryColorDark">
          <Typography variant="h2" className="text-sm font-medium dark:text-white">
            Kho Cá Nhân
          </Typography>

          <Link to={'/warehouse/add'}>
            <Button className="h-8 gap-2 px-4 py-1">
              <AddIcon width="20" color="white" />
              <span>Đăng tin</span>
            </Button>
          </Link>
        </div>
        <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 px-5"></div>
        <div className="flex items-center justify-between w-full p-5 bg-white dark:bg-primaryColorDark">
          <div className="w-[576px]">
            <TabList items={STOCKSOWN_TABS} name="StocksOwn" defaultIndex={0} />
          </div>
          <div className="flex w-full md:w-[294px]">
            <Input
              className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark "
              placeholder="Nhập đ/c, SĐT, seri sổ"
            />
            <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
              <SearchIcon color="white" />
            </button>
          </div>
        </div>

        <TabPanel name="StocksOwn" tabIndex={0}>
          <div className="px-5 py-4 -mt-2 bg-white dark:bg-primaryColorDark rounded-b-l">
            <FilterStocksOwn onChange={() => {}} />
          </div>
          <OwnBook />
        </TabPanel>
        <TabPanel name="StocksOwn" tabIndex={1}>
          <div className="px-5 py-4 -mt-2 bg-white dark:bg-primaryColorDark rounded-b-l">
            <FilterStocksOwn onChange={() => {}} />
          </div>
        </TabPanel>
        <TabPanel name="StocksOwn" tabIndex={2}>
          <div className="px-5 py-4 -mt-2 bg-white dark:bg-primaryColorDark rounded-b-l">
            <FilterStocksOwn onChange={() => {}} />
          </div>
        </TabPanel>
        <TabPanel name="StocksOwn" tabIndex={3}>
          <div className="px-5 py-4 -mt-2 bg-white dark:bg-primaryColorDark rounded-b-l">
            <FilterStocksOwn onChange={() => {}} />
          </div>
        </TabPanel>
      </div>
    </>
  );
};
