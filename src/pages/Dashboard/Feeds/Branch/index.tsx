import { Avatar } from '@/components/DataDisplay';
import { Input } from '@/components/DataEntry';
import {
  Button,
  CameraIcon,
  CommentIcon,
  HeartIcon,
  SearchIcon,
  SendIcon,
  Typography,
} from '@/components/General';

import { useState } from 'react';
import { Modal } from '@/components/Feedback';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import UserPost from '@/components/Layout/Home/News/UserPost';
import UserPostSkeleton from '@/components/Layout/Home/News/UserPostSkeleton';
import CreatePost from '../CreatePost';

export const FeedBranch = () => {
  const [isShowComment, setIsShowComment] = useState<boolean>(false);
  const [index, setIndex] = useState(3);

  const fetchNextApi = () => {
    setIndex((prevIndex) => prevIndex + 3);
    setIsLoading(false);
  };
  const { isLoading, setIsLoading, loaderRef } = useIntersectionObserver(fetchNextApi);

  return (
    <div className="h-full md:w-[920px] mx-auto -mt-[15px]">
      <CreatePost />

      <div className="flex items-center justify-between mt-5">
        <Typography variant="h2" className="text-[14px]">
          Đáng chú ý
        </Typography>
        <Button className="w-[90px] h-10 bg-primaryColorLight text-primaryColorDark dark:text-primaryColorLight dark:bg-primaryColorDark">
          Tìm kiếm
        </Button>
      </div>

      <div className="mt-5 w-[326px]">
        <Typography variant="h2" className="text-[#000] dark:text-[#fff] hidden md:block ">
          Đáng chú ý
        </Typography>

        <div className="hidden md:flex gap-4 overflow-hidden ">
          <div className="mt-3 px-3 py-4 bg-white dark:bg-primaryColorDark min-w-[320px]  rounded-md">
            <div className="flex items-center gap-2">
              <Avatar
                alt="avatar"
                height={40}
                width={40}
                src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
                className="cursor-pointer"
              />
              <h3 className="text-[14px] text-[#000] dark:text-textPrimaryDark">
                Nhà Phố Việt Nam
              </h3>
            </div>

            <div className="mt-4 ">
              <p className="text-textPrimaryLight dark:text-textPrimaryDark font-semibold text-[14px]">
                THÔNG BÁO: CƠ CHẾ DÀNH CHO CẤP GIÁM ĐỐC, TRƯỞNG PHÒNG CHI NHÁNH...
              </p>
            </div>

            <div className="w-full flex justify-center my-2 bg-tertiaryColorLight dark:tertiaryColorDark">
              <img
                width={86}
                height={56}
                src="https://s3-alpha-sig.figma.com/img/3cd3/0a08/5a4179162dd65d95c95060bf64be1572?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lUfPz5IWUAyY6uHxPUylewN6kZ4wXraps0tEX99OpenCJvxK9wI2Q6XaV3inSoNrhty4h-JHfl8jcbgXtP91UO4NbpPlZcAndSqJycEKNz9f~meR7fPqUDYpCjIsIo~0M3Bpc-bZFgmNmoi75YdHwZatUy6seg8AjRcPr364e5ODwJlWcDK~Ek-50kHv4AUZUUI-MGXJqPPDKdhDBNkgFXbKm8e4hRav4mXDgQ08b4EfJwoZmk4ixf1cHjq25IL5PAd9ewxazS0rEHoR15X2MtzMtGiEn8gqAIaQWHLSwLIgl9qcrW9jJmXSlqZ92NovBd5nFDJXOLLIOcieT4ui8w__"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-1 dark:text-textPrimaryDark"></div>

            <hr className="my-2 "></hr>
            <div className="flex items-center">
              <button className="flex items-center gap-2  justify-center w-[50%]">
                <HeartIcon />
                <p className="dark:text-secondaryColorLight text-secondaryColorDark">Thích</p>
              </button>
              <button className="flex items-center gap-2  justify-center w-[50%]">
                <CommentIcon />
                <p className="dark:text-secondaryColorLight text-secondaryColorDark">Bình luận</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:justify-end  mt-6">
        <div className="flex w-full md:w-[294px]">
          <Input
            className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark md:w-[254px]"
            placeholder="Nhập nội dung tìm kiếm"
          />
          <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
            <SearchIcon color="white" />
          </button>
        </div>
      </div>

      {new Array(index).fill(0).map((item, index) => {
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
        className="w-full md:w-1/2"
        isDivided={true}

        // styleTitle="textPrimaryLight dark:text-textPrimaryDark"
      >
        <div>
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
                          <span className="hidden md:block">·</span>
                          <span className="hidden md:block">Quy định và Hướng dẫn</span>
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
          <hr className="-mx-8 my-4"></hr>
          <div className="flex gap-2 w-full">
            <Avatar
              alt="avatar"
              height={40}
              width={40}
              src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
            />
            <div className="w-full relative border  rounded-md bg-primaryColorLight dark:bg-primaryColorDark">
              <Input placeholder="Viết bình luận" className="border-none bg-transparent" />
              <div className="flex items-center justify-between gap-1 p-2">
                <div className="flex items-center gap-1">
                  <CameraIcon className="cursor-pointer" />
                  <CameraIcon className="cursor-pointer" />
                  <CameraIcon className="cursor-pointer" />
                  <CameraIcon className="cursor-pointer" />
                </div>
                <SendIcon className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div ref={loaderRef}>{isLoading && <UserPostSkeleton />}</div>
    </div>
  );
};
