import { Avatar } from '@/components/DataDisplay';
import { Input, InputForm } from '@/components/DataEntry';
import {
  Button,
  CommentIcon,
  EyeIcon,
  HeartIcon,
  MessageIcon,
  PhoneIcon,
  SearchIcon,
  SendIcon,
  ShareIcon,
} from '@/components/General';

const data = [
  {
    id: 1,
    avatarSrc:
      'https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__',
    name: 'Nhà Phố Việt Nam',
    time: '8',
    category: 'Quy định và Hướng dẫn',
    criteria: [
      { label: 'Khu vực:', value: 'Hà Nội' },
      { label: 'Quận:', value: 'Ba Đình' },
      { label: 'Tài chính:', value: '15 tỷ' },
      { label: 'Diện tích:', value: '55m2' },
    ],
  },
  {
    id: 2,
    avatarSrc:
      'https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__',
    name: 'Nhà Phố Việt Nam',
    time: '8',
    category: 'Quy định và Hướng dẫn',
    criteria: [
      { label: 'Khu vực:', value: 'Hà Nội' },
      { label: 'Quận:', value: 'Ba Đình' },
      { label: 'Tài chính:', value: '15 tỷ' },
      { label: 'Diện tích:', value: '55m2' },
    ],
  },
  {
    id: 3,
    avatarSrc:
      'https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__',
    name: 'Nhà Phố Việt Nam',
    time: '8',
    category: 'Quy định và Hướng dẫn',
    criteria: [
      { label: 'Khu vực:', value: 'Hà Nội' },
      { label: 'Quận:', value: 'Ba Đình' },
      { label: 'Tài chính:', value: '15 tỷ' },
      { label: 'Diện tích:', value: '55m2' },
    ],
  },
  // Add more data objects here if needed
];

const NewsHome = () => {
  return (
    <div>
      <div className="h-full md:w-[920px] " data-mode="dark">
        <div className="flex justify-end mt-6">
          <div className="flex w-[294px]">
            <Input
              className="rounded-e-none bg-[#FFFFFF] dark:bg-secondaryColorDark w-[254px]"
              placeholder="Nhập nội dung tìm kiếm"
            />
            <Button className="rounded-s-none">
              <SearchIcon color="#FFFFFF" className="" />
            </Button>
          </div>
        </div>

        {/* Đáng chú ý */}
        <div className="mt-6">
          <h2 className="text-[#000] dark:text-[#fff]">Đáng chú ý</h2>

          <div className="flex gap-4 overflow-hidden">
            {data.map((item, index) => {
              return (
                <>
                  <div className="mt-3 px-3 py-4 bg-white dark:bg-primaryColorDark min-w-[320px] h-[278px] rounded-md">
                    <div>
                      <div className="flex gap-2 items-center">
                        <Avatar alt="avatar" height={40} width={40} src={item.avatarSrc} />
                        <div className="">
                          <h3 className="text-[14px] text-[#000] dark:text-textPrimaryDark">
                            {item.name}
                          </h3>
                          <div className="flex gap-2 items-center text-textSecondaryLight dark:text-textSecondaryDark text-[14px]">
                            <span>{item.time} giờ trước</span>
                            <span>·</span>
                            <span>Quy định và Hướng dẫn</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 ">
                        <p className="text-textPrimaryLight dark:text-textPrimaryDark font-semibold text-[16px]">
                          Tôi có khách cần mua gấp, kính nhờ anh chị em tìm hộ giúp tôi. Tiêu chí
                          khách:
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 dark:text-textPrimaryDark">
                        {item.criteria.map((criteria, index) => (
                          <div key={index}>
                            <span className="text-textPrimaryLight dark:text-textPrimaryDark font-semibold text-[16px]">
                              {criteria.label}
                            </span>
                            <span>{criteria.value}</span>
                          </div>
                        ))}
                      </div>

                      <hr className="my-2 "></hr>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2  justify-center w-[50%]">
                          <HeartIcon />
                          <p className="dark:text-textSecondaryDark">Thích</p>
                        </div>

                        <div className="flex items-center gap-2 justify-center w-[50%]">
                          <CommentIcon />
                          <p className="dark:text-textSecondaryDark">Bình luận</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* End đáng chú ý */}

        <div className="mt-6 bg-[#FFFFFF] dark:bg-primaryColorDark dark:text-textPrimaryDark min-h-[426px] rounded-md px-6 py-6">
          <div className="flex gap-2 items-center">
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

          <div className="flex mt-4 justify-between">
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <EyeIcon />
                <span>200</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartIcon />
                <span>200</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
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
            <div className="flex items-center gap-2  justify-center w-[50%]">
              <HeartIcon />
              <p>Thích</p>
            </div>

            <div className="flex items-center gap-2 justify-center w-[50%]">
              <CommentIcon />
              <p>Bình luận</p>
            </div>

            <div className="flex items-center gap-2 justify-center w-[50%]">
              <ShareIcon />
              <p>Chia sẻ</p>
            </div>
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
              <div className="dark:text-textSecondaryDark flex gap-4 mt-2 items-center">
                <p>Thích</p>
                <p>Trả lời</p>
                <p>3 ngày trước</p>
                <p>Đã chỉnh sửa</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex  gap-2">
            <Avatar
              alt="avatar"
              height={40}
              width={40}
              src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
            />

            <Input name="comment" suffixIcon={<SendIcon />} placeholder='Viết bình luận...'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
