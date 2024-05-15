import { Avatar } from '@/components/DataDisplay';
import { Tag } from '@/components/DataDisplay/Tag';
import { Input } from '@/components/DataEntry';
import {
  AlarmClock,
  CheckIcon,
  CommentIcon,
  CopyIcon,
  CounterClockwiseClock,
  EyeIcon,
  HeartIcon,
  MessageIcon,
  PhoneIcon,
  PinSolidIcon,
  ReportIcon,
  SendIcon,
  ShareIcon,
  SuitableIcon,
  Typography,
} from '@/components/General';
import { useCopyToClipboard } from '@/hooks/useCopyToClipBoard';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { useState } from 'react';

const UserPostCaring = () => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const [index, setIndex] = useState(3);

  return (
    <div className="mt-6 bg-[#FFFFFF] dark:bg-primaryColorDark dark:text-textPrimaryDark min-h-[426px] rounded-md px-6 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar
            alt="avatar"
            height={40}
            width={40}
            src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
          />
          <div className="">
            <h3 className="text-[14px] dark:text-[#74CF5A]">Nhà Phố Việt Nam</h3>
            <div className="flex gap-2 items-center text-textSecondaryLight text-[14px]">
              <span className="dark:text-textSecondaryDark">8 giờ trước</span>
              <span className="dark:text-linkDark">·</span>
              <span className="dark:text-linkDark">Quy định và Hướng dẫn</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center ">
            <Tag color="errorDark">Sổ đỏ/sổ hồng</Tag>
            <Tag>Hạ chào</Tag>
          </div>
          <Typography
            variant="span"
            className="text-[12px] text-textSecondaryLight dark:text-textSecondaryDark flex justify-end"
          >
            2 tháng trước
          </Typography>
        </div>
      </div>

      <div>
        <Typography variant="p">
          5.75 tỷ -{' '}
          <Typography variant="span" className="text-red-300">
            79tr/m²
          </Typography>{' '}
          - Mặt phố, Thuê ở, Dòng tiền
        </Typography>

        <p className="mt-4">Coffin Dance</p>

        <div className="flex gap-2 text-linkLight dark:text-linkDark flex-wrap">
          <p>#ctnnguyenphuongnam</p>
          <p>#nphn</p>
          <p>#khoi</p>
          <p>#khoi</p>
          <p>#khoi</p>
          <p>#khoi</p>
          <p>#khoi</p>
          <p>#khoi</p>
          <p>#khoi</p>
          <p>#khoi</p>
        </div>

        <div className="flex justify-between items-center">
          <Tag
            className={`[&>span]:flex [&>span]:gap-0.5 [&>span]:text-[12px] min-w-[56px]  [&>span]:items-center ${isCopied ? '[&>span]:cursor-not-allowed' : '[&>span]:cursor-pointer'}`}
            onClick={() => copyToClipboard('Coffin Dance')}
          >
            {isCopied ? (
              <>
                <CheckIcon width="14" height="14" />
                <p>Đã sao chép</p>
              </>
            ) : (
              <>
                <CopyIcon width="14" height="14" />
                <p>Chép</p>
              </>
            )}
          </Tag>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <SuitableIcon />
              <Typography variant="p">Khách phù hợp</Typography>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <CounterClockwiseClock />
              <Typography variant="p">Lịch sử chỉnh sửa</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="flex my-2 -mx-6 justify-between overflow-hidden ">
        {Array(4)
          .fill(0)
          .map((_) => {
            return (
              <img
                src="https://s3-alpha-sig.figma.com/img/adcc/9585/df02f2f8cf70b913523a76aa5f8c5203?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=idvkWHqyk10ZJcT8bexclO2iW9Bu~~l-LJlzllFPPiyYPXpZZ6UuZ~Mj2oBUQfViwGbfjDzGwUonQHscA02wEdJ1Z4h3jEc2Sh7sBeVEAVemAkwxzRsoSgSQRwBXwB7OBwllgWzboBMDD2fkEN8VI~6-OL~YI6gvcUEL3BadNhEgjQW-xymrtsH4w4XY7OpjfaeFUZAfdJ~QOxemycb~e8~6FKYYn8aDGBmFdtiMULi~c-P7CjYDiW0NZ5B09oTECsIbd3E0otzhuBCkRO-2Cs-bCOLWhxm9ieeEKs6Sf0xaIokut2NLeqYSZ-mE0XTcf0cF9Kc9PUS0U5X~Xl1pDg__"
                className="object-contain"
                width={225}
                height={225}
              />
            );
          })}
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-4 text-[14px]">
          <div className="flex items-center gap-2">
            <EyeIcon />
            <span>200</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartIcon />
            <span>200</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[14px]">
          <div className="flex items-center gap-2 cursor-pointer">
            <PhoneIcon />
            <span className="hidden md:block">Điện thoại</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <HeartIcon />
            <span className="hidden md:block">Zalo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <MessageIcon />
            <span className="hidden md:block">Messenger</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <AlarmClock />
            <span>Đặt lịch</span>
          </div>
          <Tag className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span]:cursor-pointer">
            <AlarmClock />
            <span>Đặt lịch</span>
          </Tag>
          <div className="flex items-center gap-2 cursor-pointer">
            <PinSolidIcon />
            <span>Lưu</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <ReportIcon />
            <span>Báo cáo dẫn khách</span>
          </div>
        </div>
      </div>

      <ul className="mt-2 border flex items-center  border-[#D9D9D9] h-[46px] border-r-0	 border-l-0	w-full">
        <li style={{ width: '33%' }}>
          <button className="flex items-center gap-2  justify-center h-[32px] py-2 px-4 w-full">
            <HeartIcon color="#F95E73" />
            <p>Thích</p>
          </button>
        </li>

        <li style={{ width: '33%' }}>
          <button
            className="flex items-center gap-2 justify-center h-[32px] w-full"
            // onClick={() => setIsShowComment(true)}
          >
            <CommentIcon />
            <p>Bình luận</p>
          </button>
        </li>

        <li style={{ width: '33%' }}>
          <Popover className="relative">
            <PopoverButton className="flex items-center justify-center gap-2 h-[32px] py-2 px-4 w-full">
              <ShareIcon />
              <p className="text-[14px]">Chia sẻ</p>
            </PopoverButton>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel anchor="bottom" className="flex flex-col mt-2 shadow-xl">
                <div
                  className="bg-white py-2 px-4 flex items-center gap-4 rounded-md cursor-pointer w-[300px] shadow-2xl"
                  style={{
                    boxShadow:
                      '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <CopyIcon />
                  <p className="text-[14px]">Sao chép liên kết</p>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
        </li>
      </ul>

      <div className="md:flex hidden gap-2 mt-4">
        <Avatar
          alt="avatar"
          height={40}
          width={40}
          src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
        />
        <div className="flex flex-col ">
          <div className="px-2 py-2 bg-[#F3F4F6] dark:bg-secondaryColorDark rounded-md">
            <div>
              <div className="flex gap-2 items-center text-black text-[14px] font-semibold dark:text-[#74CF5A]">
                <h3 className="text-[14px]">Nhà Phố Việt Nam</h3>
                <span>·</span>
                <span>Quy định và Hướng dẫn</span>
              </div>
              <p className="text-primaryTextDark">Coffin Dance</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 dark:text-textSecondaryDark text-[12px]">
            <button>Thích</button>
            <button>Trả lời</button>
            <p>3 ngày trước</p>
            <p>Đã chỉnh sửa</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <Avatar
          alt="avatar"
          height={40}
          width={40}
          src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
        />

        <Input name="comment" suffixIcon={<SendIcon />} placeholder="Viết bình luận..." />
      </div>
    </div>
  );
};

export default UserPostCaring;
