import { Avatar } from '@/components/DataDisplay';
import { Tag } from '@/components/DataDisplay/Tag';
import { Input } from '@/components/DataEntry';
import {
  CheckIcon,
  CommentIcon,
  CopyIcon,
  EyeIcon,
  HeartIcon,
  MessageIcon,
  PhoneIcon,
  SendIcon,
  ShareIcon,
} from '@/components/General';
import { useCopyToClipboard } from '@/hooks/useCopyToClipBoard';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';

type Props = {
  isShowComment: boolean;
  setIsShowComment: (value: boolean) => void;
};

const UserPost = (props: Props) => {
  const { setIsShowComment } = props;
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="mt-6 bg-[#FFFFFF] dark:bg-primaryColorDark -mx-6 md:mx-0 dark:text-textPrimaryDark md:min-h-[426px] rounded-md px-6 py-6">
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

      <p className="mt-4">Coffin Dance</p>

      <Tag
        className={`
        bg-tertiaryColorDark dark:bg-tertiaryColorLight cursor-pointer border [&>span]:flex [&>span]:gap-1 [&>span]:text-[12px] min-w-[56px]  [&>span]:items-center ${isCopied ? '[&>span]:cursor-not-allowed' : '[&>span]:cursor-pointer'} px-2`}
        onClick={() => copyToClipboard('Coffin Dance')}
      >
        {isCopied ? (
          <>
            <CheckIcon width="14" height="14" />
            <p className="dark:text-textPrimaryDark text-textPrimaryLight ">Đã sao chép</p>
          </>
        ) : (
          <>
            <CopyIcon width="14" height="14" />
            <p className="dark:text-textPrimaryDark text-textPrimaryLight ">Chép</p>
          </>
        )}
      </Tag>

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

      <div className="flex justify-between mt-4 text-[14px]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <EyeIcon color="#1677FF" />
            <span>200</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartIcon color="#FF4D4F" />
            <span>200</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <PhoneIcon color="#197D16" />
            <span className="hidden md:block">Điện thoại</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/9d24/9f6c/6b53792649a38af984e3a9140d78d33d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ka8nQ-MIIIvVwxd8pBj8Vfokpp11zuN1UAQsY5tPxgDU7GAteKYoDrTIngi-SKU5xprHEe0553Fjwp2cmyWPQGyGc7mYj4x3c-tdnAygGkqDq1QIKsSLqNqrYMlgCyOa6-TJ3KcMLZAr5GhCsi70Hy0y~sSoL0nl7F8g9FBQqO03WrVleXPNOXm9FLOd8zAPZX4OQaJVMzlWkJJZ51GStZ8BPWyuJXgXp5a4THcVzNp5CDYbdHJ~Id5AT0-W7GmRhkX6EIU2TrfZlKWXxLkQph60fLXKYWfgTyQxW9-dtXodIx8nm7-gAsxxc5ou~Nx8uupukzBOFUs6JX2Q1L~yGg__"
              alt=""
              width={16}
              height={16}
              className="rounded-md"
            />
            <span className="hidden md:block">Zalo</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageIcon />
            <span className="hidden md:block">Messenger</span>
          </div>
        </div>
      </div>

      <ul className="mt-2 border flex items-center text-[14px] border-[#D9D9D9] h-[46px] border-r-0	 border-l-0	w-full">
        <li style={{ width: '33%' }}>
          <button className="flex items-center gap-2  justify-center h-[32px] py-2 px-4 w-full">
            <HeartIcon />
            <p>Thích</p>
          </button>
        </li>

        <li style={{ width: '33%' }}>
          <button
            className="flex items-center gap-2 justify-center h-[32px] w-full"
            onClick={() => setIsShowComment(true)}
          >
            <CommentIcon />
            <p>Bình luận</p>
          </button>
        </li>

        <li style={{ width: '33%' }}>
          <Popover className="relative">
            <PopoverButton className="flex items-center justify-center gap-2 h-[32px] py-2  w-full">
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
                  className="bg-white py-2 px-4 flex items-center gap-2 md:gap-4 rounded-md cursor-pointer w-full md:w-[300px] shadow-2xl"
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

export default UserPost;
