import { TabRenderProps, Tabs } from '@/components/DataDisplay';
import { Input, Select } from '@/components/DataEntry';
import {
  AddIcon,
  Button,
  DoubleArrowDownIcon,
  DoubleArrowUpIcon,
  SearchIcon,
  Typography,
} from '@/components/General';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StocksFormFilter } from '../StocksConsignment/StocksFormFilter';

interface IOption {
  value: string;
  label: string;
}

const OPTIONS = [
  { value: 'Tin nổi bật', label: 'Tin nổi bật' },
  { value: 'Tin mới nhất', label: 'Tin mới nhất' },
  { value: 'Tin cũ nhất', label: 'Tin cũ nhất' },
  { value: 'Giá cao nhất', label: 'Giá cao nhất' },
  { value: 'Giá thấp nhất', label: 'Giá thấp nhất' },
] as IOption[];

export const StocksOwn = () => {
  const [show, setShow] = useState<boolean>(false);
  const [selected, setSelected] = useState<IOption>();
  const windowSize = useWindowSize();

  const STOCKSOWN_TABS: TabRenderProps[] = [
    {
      name: 'Chờ duyệt',
      key: 'tab-1',
      children: <></>,
    },
    {
      name: 'Đã duyệt',
      key: 'tab-2',
      children: <></>,
    },
    {
      name: 'Từ chối',
      key: 'tab-3',
      children: <></>,
    },
    {
      name: 'Thùng rác',
      key: 'tab-4',
      children: <StocksFormFilter />,
    },
  ];

  return (
    <div className="w-full px-5 pt-3 pb-5 bg-white rounded-lg lg:rounded-t-lg h-96 dark:bg-primaryColorDark">
      <div className="flex items-center justify-between pb-3">
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
      <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
      <div className="flex items-center justify-between w-full mt-5">
        <Tabs
          tabs={STOCKSOWN_TABS}
          variantTab="fillGray"
          className="flex-1 px-3 text-sm !font-normal h-10 "
          widthTabList={windowSize.width > 567 ? 567 : 390}
        />
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

      <div className="flex justify-end my-3">
        <Button
          startIcon={show ? <DoubleArrowDownIcon /> : <DoubleArrowUpIcon />}
          variant="outline"
          className="relative h-8 px-4 font-normal border-none text-secondaryColorDark dark:text-secondaryColorLightD2"
        >
          {show ? 'Thu gọn' : 'Mở rộng'}
          <div className="flex items-center justify-center">
            <span className="absolute inline-flex w-2 h-2 top-1 right-2.5 rounded-full opacity-75 animate-ping bg-successLight dark:bg-successDark"></span>
            <span className="absolute w-2 h-2 rounded-full top-1 right-2.5 bg-successLight dark:bg-successDark"></span>
          </div>
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <Typography
          variant="span"
          className="text-sm font-semibold text-secondaryColorDark dark:text-secondaryColorLight"
        >
          Hiện đang có 1 tin Chờ duyệt
        </Typography>
        <div className="lg:w-[200px] w-full">
          <Select
            options={OPTIONS}
            value={selected ?? OPTIONS[0]}
            onChange={(value) => {
              setSelected && setSelected(value as IOption);
            }}
          />
        </div>
      </div>
    </div>
  );
};
