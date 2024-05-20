import { TabRenderProps, Tabs } from '@/components/DataDisplay';
import { Tag } from '@/components/DataDisplay/Tag';
import { Input, Select } from '@/components/DataEntry';
import {
  AddIcon,
  Button,
  ClockIcon,
  DoubleArrowDownIcon,
  DoubleArrowUpIcon,
  EyeIcon,
  EyeOffIcon,
  EyeSolidIcon,
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
  const [showEye, setShowEye] = useState<boolean>(false);
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
    <>
      <div className="w-full px-5 pt-3 pb-5 bg-white rounded-lg lg:rounded-t-lg dark:bg-primaryColorDark">
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
      {/* tạo component OwnBook */}
      <div className="my-5 bg-white rounded-lg dark:bg-primaryColorDark">
        <div className="flex flex-col h-full md:flex-row">
          <div className="flex w-full gap-1 h-72 md:w-72 shrink-0 md:p-3">
            <a href="#" className="relative w-full h-full">
              <img
                src="https://assets-cdn.khonhapho.com/test/2024_05_14/hoang-hon-1715759067344.jpeg?class=stock&quality=70&auto_optimize=high&width=300&height=300"
                alt="aasa"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 z-[1] transition-all ease-out hover:bg-black/50"></div>
            </a>
            <a href="#" className="relative w-full h-full">
              <img
                src="https://assets-cdn.khonhapho.com/test/2024_05_14/hoang-hon-1715759067344.jpeg?class=stock&quality=70&auto_optimize=high&width=300&height=300"
                alt="aasa"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 z-[1] transition-all ease-out hover:bg-black/50"></div>
            </a>
          </div>
          <div className="md:w-[calc(100%_-_288px)] grow min-h-72 flex-1 flex flex-col gap-3 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs opacity-75 text-secondaryColorDark dark:text-white">
                <ClockIcon width="13" height="13" />
                <span>15/05/2024 07:45:20</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="hidden md:block h-[22px] text-xs text-errorLight border border-errorLight font-semibold bg-errorLight/10 px-2">
                  Sổ đỏ/sổ hồng
                </Tag>
                <div className="opacity-75 text-[13px] font-semibold whitespace-nowrap hidden md:block">
                  <span className="mr-1 dark:text-white">Mã số: </span>
                  <a
                    target="_blank"
                    href="/warehouse/detail/29654"
                    className="font-semibold no-underline text-infoLight/60"
                  >
                    #29654
                  </a>
                </div>
                <Tag className="h-[22px] text-xs px-2 text-textPrimaryLight dark:text-white border border-dividerDark/30 dark:border-white font-semibold bg-dividerLight/10">
                  Bán mạnh
                </Tag>
                <div>Setting</div>
              </div>
            </div>

            <div className="w-full overflow-x-auto hidden-scroll">
              <div className="inline-flex px-2 py-1 space-x-2 text-sm rounded-md w-fit bg-slate-200/60 dark:bg-secondaryColorDark whitespace-nowrap dark:text-white">
                <span className="font-bold whitespace-nowrap">221021.02 tỷ</span>
                <span> - </span>
                <div className="font-semibold">2.210.210tr/m²</div>
                <span> - </span>
                <div className="">
                  <span>Mặt phố, Cửa hàng, Kinh doanh, Thời trang</span>
                </div>
              </div>
            </div>

            <div className="m-0 font-semibold leading-6 whitespace-pre-line text-clip md:text-sm dark:text-white">
              32 Chung cư Hancom Đường Bưởi 100 3 10 221021.02 tỷ Tây Hồ Hà Nội HĐ TK Hoàng Văn Anh
              HANOICODE, 0366760872, X3, nguồn ĐT1, trên 100, #ĐC1
              <br />
              Mô tả:
              <a
                href="/warehouse/?hashtag=duongbuoi&amp;propertyId=29654"
                target="_blank"
                className="text-infoLight"
              >
                #duongbuoi
              </a>
            </div>

            <div className="w-full overflow-x-auto text-sm leading-5 dark:text-white hidden-scroll">
              đâssdsdasdasdasdsdaasdagfđfgdfgdfgdfgdfgdfgdfgdfgdfgsdfgsdádasdasd
            </div>

            <div className="flex items-center w-full space-x-3 overflow-x-auto md:hidden">
              <Tag className="h-[22px] text-xs text-errorLight border border-errorLight font-semibold bg-errorLight/10 px-2">
                Sổ đỏ/sổ hồng
              </Tag>
              <div className="opacity-75 text-[13px] font-semibold whitespace-nowrap">
                <span className="mr-1 dark:text-white">Mã số: </span>
                <a
                  target="_blank"
                  href="/warehouse/detail/29654"
                  className="font-semibold no-underline text-infoLight/60"
                >
                  #29654
                </a>
              </div>
            </div>

            <div className="bg-secondaryColorDark/10 dark:bg-secondaryColorDark px-4 py-2 rounded-md w-full md:w-fit min-w-[320px]">
              <div className="flex items-center gap-2 text-sm dark:text-white">
                <span className="flex-shrink-0 w-24">SĐT chủ nhà: </span>
                <div className="w-full max-w-[110px] flex items-center justify-between space-x-2">
                  <a
                    className="font-semibold text-infoLight/85"
                    target="_blank"
                    href="tel:0378934237"
                  >
                    {!showEye ? '0366760872'.replace(/^.{7}/, '********') : '0366760872'}
                  </a>
                  <button
                    type="button"
                    className="text-xs"
                    onClick={() => setShowEye((prev) => !prev)}
                  >
                    {!showEye ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm md:flex-row">
                <span className="flex-shrink-0 w-24 whitespace-nowrap dark:text-white">Lý do:</span>
                <span className="font-semibold leading-5 whitespace-pre-line text-errorLight">
                  fdjlkdsdfh
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between pt-2">
              <div className="flex items-center space-x-2 shrink-0">
                <div className="flex items-center gap-1 dark:text-white">
                  <EyeSolidIcon width="18" height="18" />
                  <span>3</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-end">
                <div className="">
                  <button type="button" className="px-2">
                    <div className="flex items-center gap-2 text-sm">
                      <ClockIcon />
                      <span className="hidden md:block dark:text-white">Lịch sử chỉnh sửa</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
        <div className="flex justify-between gap-3 p-3 md:justify-end ">
          <Button
            className="w-full h-8 px-4 py-1 font-normal md:w-14 border-errorLight dark:border-secondaryColorDark text-errorLight dark:text-errorDark dark:bg-secondaryColorDark"
            variant="outline"
          >
            Xoá
          </Button>
          <Button
            className="w-full h-8 px-4 py-1 font-normal md:w-14 border-dividerDark/50 dark:bg-secondaryColorDark dark:border-secondaryColorDark text-primaryColorDark dark:text-white"
            variant="outline"
          >
            Sửa
          </Button>
          <Button className="w-full h-8 px-4 py-1 font-normal md:w-14">Xem</Button>
        </div>
      </div>
    </>
  );
};
