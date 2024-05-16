import { Avatar } from '@/components/DataDisplay';
import { Form, IOption, Input, InputForm, SelectForm } from '@/components/DataEntry';
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

const CITY = [
  { label: 'Hà Nội', value: '1' },
  { label: 'Đà Nẵng', value: '2' },
  { label: 'Hồ Chí Minh', value: '3' },
] as IOption[];

const DISTRICT = [
  { label: 'Bắc Từ Liêm', value: '1' },
  { label: 'Cầu Giấy', value: '2' },
  { label: 'Hồ Hoàn Kiếm', value: '3' },
] as IOption[];

const formOption = {
  value: z.string(),
  label: z.string(),
  disable: z.boolean().optional(),
};

export const Urgently = () => {
  const [isCreatePost, setIsCreatePost] = useState<boolean>(false);
  const [isShowComment, setIsShowComment] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(3);

  const fetchNextApi = () => {
    setIndex((prevIndex) => prevIndex + 3);
    setIsLoading(false);
  };
  const { isLoading, setIsLoading, loaderRef } = useIntersectionObserver(fetchNextApi);

  const FormSchema = z.object({
    city: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
    district: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
    finance: z
      .string({ message: 'Bạn phải mục chọn này' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
    acreage: z
      .string({ message: 'Bạn phải mục chọn này' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
    purpose: z
      .string({ message: 'Bạn phải mục chọn này' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
    request: z
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
              <div className="mb-5">
                <SelectForm<z.infer<typeof FormSchema>>
                  name="city"
                  options={CITY}
                  placeholder="Chọn thành phố"
                  className="rounded-[10px]"
                  label="Thành phố"
                  required
                />
              </div>
              <div className="mb-5">
                <SelectForm<z.infer<typeof FormSchema>>
                  name="district"
                  options={DISTRICT}
                  placeholder="Chọn Quận/Huyện"
                  className="rounded-[10px]"
                  label="Quận/Huyện"
                  required
                  disabled={!form.watch('city')}
                />
              </div>
              <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:gap-4 flex-wrap">
                <div className="w-full sm:flex-1 mb-5">
                  <InputForm<z.infer<typeof FormSchema>>
                    name="finance"
                    placeholder="10 - 12 tỷ"
                    className="rounded-[10px]"
                    label="Tài chính"
                    required
                  />
                </div>
                <div className="w-full sm:flex-1 mb-5">
                  <InputForm<z.infer<typeof FormSchema>>
                    name="acreage"
                    placeholder="40 - 6m2"
                    className="rounded-[10px]"
                    label="Diện tích"
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <TextareaForm<z.infer<typeof FormSchema>>
                  name="purpose"
                  placeholder="Mua để ở, kinh doanh,..."
                  className="rounded-[10px]"
                  minRows={4}
                  label="Mục đích"
                  required
                />
              </div>
              <div className="mb-5">
                <TextareaForm<z.infer<typeof FormSchema>>
                  name="request"
                  placeholder="Mặt đường, trong ngõ,..."
                  className="rounded-[10px]"
                  minRows={4}
                  label="Yêu cầu"
                  required
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
