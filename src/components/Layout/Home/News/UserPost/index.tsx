import { Avatar } from '@/components/DataDisplay';
import { Input } from '@/components/DataEntry';
import {
  CommentIcon,
  EyeIcon,
  HeartIcon,
  MessageIcon,
  PhoneIcon,
  SendIcon,
  ShareIcon,
} from '@/components/General';

const UserPost = () => {
  return (
    <div className="mt-6 bg-[#FFFFFF] dark:bg-primaryColorDark dark:text-textPrimaryDark min-h-[426px] rounded-md px-6 py-6">
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

      <button>chép</button>

      <div className="flex gap-2 text-linkLight dark:text-linkDark">
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

      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <EyeIcon />
            <span>200</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartIcon />
            <span>200</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <span>Điện thoại</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartIcon />
            <span>Zalo</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageIcon />
            <span>Messenger</span>
          </div>
        </div>
      </div>

      <div className="mt-2 border flex items-center border-[#D9D9D9] h-[46px] border-r-0	 border-l-0	">
        <button className="flex items-center gap-2  justify-center w-[50%]">
          <HeartIcon />
          <p>Thích</p>
        </button>

        <button className="flex items-center gap-2 justify-center w-[50%]">
          <CommentIcon />
          <p>Bình luận</p>
        </button>

        <button className="flex items-center gap-2 justify-center w-[50%]">
          <ShareIcon />
          <p>Chia sẻ</p>
        </button>
      </div>

      <div className="flex gap-2 mt-4">
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
