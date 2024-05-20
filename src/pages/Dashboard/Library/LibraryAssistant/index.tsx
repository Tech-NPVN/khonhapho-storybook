import { Avatar } from '@/components/DataDisplay';
import { Form, Input, SelectForm, Upload } from '@/components/DataEntry';
import { TextareaForm } from '@/components/DataEntry/Textarea';
import { Modal } from '@/components/Feedback';
import { Button, SearchIcon } from '@/components/General';
import UserPost from '@/components/Layout/Home/News/UserPost';
import UserPostSkeleton from '@/components/Layout/Home/News/UserPostSkeleton';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const LibraryAssistant = () => {
  const [isCreatePost, setIsCreatePost] = useState<boolean>(false);
  const [isShowComment, setIsShowComment] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(3);

  const fetchNextApi = () => {
    setIndex((prevIndex) => prevIndex + 3);
    setIsLoading(false);
  };
  const { isLoading, setIsLoading, loaderRef } = useIntersectionObserver(fetchNextApi);

  const FormSchema = z.object({
    categoryTrain: z.object({}, { message: 'Bạn phải mục chọn này' }),
    title: z
      .string({ message: 'Bạn phải mục chọn này' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
    content: z
      .string({ message: 'Bạn phải mục chọn này' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <div className="mx-auto max-w-[920px]">
      <div className="w-full mb-4 py-[10px] px-5 rounded-[10px] bg-[#fff] dark:bg-primaryColorDark dark:text-textPrimaryDark">
        <div className="font-semibold text-xl leading-[29px] mb-[10px] dark:text-white">
          Tạo bài viết
        </div>
        <div className="flex items-center justify-between py-[17px] px-0 gap-2">
          <Avatar
            height={42}
            width={42}
            shape="circle"
            src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
            alt=""
          />
          <button
            onClick={() => setIsCreatePost(true)}
            className="rounded-[20px] dark:bg-[rgba(58,59,60,1)] dark:text-textPrimaryDark bg-[rgba(243,244,246,1)] w-full py-[10px] px-[18px] text-left text-[rgba(0,0,0,0.5)] font-normal text-base leading-5"
          >
            Bắt đầu một bài viết...
          </button>
        </div>
      </div>
      <div className="">
        <div className="flex md:justify-end mt-6">
          <div className="flex w-full md:w-[294px]">
            <Input
              className="rounded-e-none rounded-s-lg dark:bg-primaryColorDark dark:text-textPrimaryDark md:w-[254px]"
              placeholder="Nhập nội dung tìm kiếm"
            />
            <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
              <SearchIcon color="white" />
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          {new Array(index).fill(0).map((_, index) => {
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
        </div>
      </div>
      <Modal
        open={isCreatePost}
        onCancel={() => setIsCreatePost(false)}
        title="Tạo bài viết"
        className="max-w-[652px] w-full"
        isDivided={false}
        okText="Đăng"
        cancelText="Huỷ"
        centerTitle
        styleTitle="normal-case font-semibold text-lg textPrimaryLight dark:text-textPrimaryDark"
      >
        <div>
          <Form {...form}>
            <form
              className="flex flex-col"
              onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
            >
              <div className="flex items-center gap-2 mb-5">
                <Avatar
                  alt="Avatar"
                  height={40}
                  width={40}
                  src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
                />
                <div className="flex flex-col">
                  <h3 className="text-[16px] font-semibold leading-5 dark:text-white">
                    Nhà Phố Việt Nam
                  </h3>
                  <p className="text-[14px] font-normal leading-[18px] dark:text-white">
                    Tin thông báo vụ chốt
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <TextareaForm<z.infer<typeof FormSchema>>
                  name="title"
                  placeholder="Tiêu đề bài viết..."
                  className="rounded-[10px]"
                  minRows={4}
                />
              </div>
              <div className="mb-5">
                <TextareaForm<z.infer<typeof FormSchema>>
                  name="content"
                  placeholder="Nội dung bài viết..."
                  className="rounded-[10px]"
                  minRows={14}
                />
              </div>
              <div className="mb-5">
                <SelectForm<z.infer<typeof FormSchema>>
                  name="categoryTrain"
                  options={[]}
                  placeholder="Chọn danh mục đào tạo"
                  className="rounded-[10px]"
                  required
                />
              </div>
              <div className="flex flex-row mb-5">
                <p className="text-sm font-normal mt-5 mr-4 dark:text-white">Ảnh:</p>
                <Upload
                  className="w-[118px] h-[118px]"
                  previewImage={[]}
                  setPreviewImage={() => {}}
                />
              </div>

              <div className="flex items-center justify-end mb-5 mx-6">
                <Button type="submit">Đăng</Button>
              </div>
            </form>
          </Form>
        </div>
      </Modal>
      <div ref={loaderRef}>{isLoading && <UserPostSkeleton />}</div>
    </div>
  );
};
