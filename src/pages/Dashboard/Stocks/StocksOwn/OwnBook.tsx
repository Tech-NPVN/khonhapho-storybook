import { Tag } from '@/components/DataDisplay/Tag';
import { Button, ClockIcon, EyeIcon, EyeOffIcon, EyeSolidIcon } from '@/components/General';
import { useState } from 'react';

export const OwnBook = () => {
  const [showEye, setShowEye] = useState<boolean>(false);
  return (
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
  );
};
