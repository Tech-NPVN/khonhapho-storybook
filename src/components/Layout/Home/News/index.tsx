import { Avatar } from '@/components/DataDisplay';
import { Input } from '@/components/DataEntry';
import { CommentIcon, HeartIcon, SearchIcon } from '@/components/General';
import UserPost from './UserPost';
import UserPostSkeleton from './UserPostSkeleton';
import { useState } from 'react';
import { Modal } from '@/components/Feedback';

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
  const [isShowComment, setIsShowComment] = useState<boolean>(false);
  return (
    <div className="h-full md:w-[920px]">
      <div className="flex justify-end mt-6">
        <div className="flex w-[294px]">
          <Input
            className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark w-[254px]"
            placeholder="Nhập nội dung tìm kiếm"
          />
          <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
            <SearchIcon color="white" />
          </button>
        </div>
      </div>

      {/* Đáng chú ý */}
      <div className="mt-6">
        <h2 className="text-[#000] dark:text-[#fff]">Đáng chú ý</h2>

        <div className="flex gap-4 overflow-hidden">
          {data.map((item) => {
            return (
              <div
                className="mt-3 px-3 py-4 bg-white dark:bg-primaryColorDark min-w-[320px] h-[278px] rounded-md"
                key={item.id}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Avatar
                      alt="avatar"
                      height={40}
                      width={40}
                      src={item.avatarSrc}
                      className="cursor-pointer"
                    />
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

                  <div>
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
                          <span className="ml-2">{criteria.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="my-2 "></hr>
                  <div className="flex items-center">
                    <button className="flex items-center gap-2  justify-center w-[50%]">
                      <HeartIcon />
                      <p className="dark:text-textSecondaryDark">Thích</p>
                    </button>

                    <button className="flex items-center gap-2 justify-center w-[50%]">
                      <CommentIcon />
                      <p className="dark:text-textSecondaryDark">Bình luận</p>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* End đáng chú ý */}

      {new Array(3).fill(0).map((item, index) => {
        return (
          <>
            <UserPost
              key={index}
              isShowComment={isShowComment}
              setIsShowComment={setIsShowComment}
            />
          </>
        );
      })}

      <Modal
        open={isShowComment}
        onCancel={() => setIsShowComment(false)}
        title="Bình luận"
        className=""
        styleTitle="textPrimaryLight dark:text-textPrimaryDark"
      >
        {Array(8)
          .fill(0)
          .map((_) => {
            return (
              <div className="flex gap-2 mt-4 ">
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
                      <p className="dark:text-textPrimaryDark text-textPrimaryLight">
                        Coffin Dance
                      </p>
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
            );
          })}
      </Modal>

      <UserPostSkeleton />
    </div>
  );
};

export default NewsHome;
