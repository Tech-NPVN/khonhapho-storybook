import { ExpandableText, NoResult } from '@/common/components';
import { Avatar } from '@/components/DataDisplay';
import { Tag } from '@/components/DataDisplay/Tag';
import {
  CheckboxForm,
  Form,
  IOption,
  InputForm,
  SelectForm,
  TextareaForm,
} from '@/components/DataEntry';
import { RadioForm, radioOption } from '@/components/DataEntry/Radio';
import { Modal } from '@/components/Feedback';
import {
  ArrowsExchangeIcon,
  ArrowsRotateIcon,
  Button,
  ClockIcon,
  CopyIcon,
  Typography,
} from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const radioOptions: radioOption[] = [
  { value: '1', label: 'Chính chủ' },
  { value: '2', label: 'Tin nhanh' },
];

const typeOptions = [
  { label: 'Nhà riêng', value: '1' },
  { label: 'Chung cư', value: '2' },
  { label: 'Đất thổ cư', value: '3' },
] as IOption[];

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
};

export const BelieveConsignment = () => {
  const [isShowFeedback, setIsShowFeedback] = useState(false);
  const [isShowEditBelieve, setIsShowEditBelieve] = useState(false);

  const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

  const FormSchema = z.object({
    believeType: z.object(formOption),
    type: z.object(formOption, { message: 'Bạn phải chọn mục này' }),
    city: z.object(formOption, { message: 'Bạn phải chọn mục này' }),
    district: z.object(formOption, { message: 'Bạn phải chọn mục này' }),
    address: z
      .string({ message: 'Bạn phải chọn mục này' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
    phone: z
      .string({ message: 'Bạn phải chọn mục này' })
      .regex(phoneRegex, { message: 'Số điện thoại không hợp lệ!' })
      .min(10, { message: 'Số điện thoại không hợp lệ!' })
      .max(11, { message: 'Số điện thoại không hợp lệ!' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
    price: z
      .number({ coerce: true, message: 'Bạn phải nhập mục này' })
      .refine((val) => val > 0, { message: 'Vui lòng không để trống' }),
    acreage: z
      .string({ message: 'Bạn phải nhập mục này' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
    isAccept: z.boolean().optional(),
    title: z
      .string({ message: 'Bạn phải nhập mục này' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
    content: z
      .string({ message: 'Bạn phải nhập mục này' })
      .refine((val) => val.trim().length > 0, { message: 'Vui lòng không để trống' }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      believeType: radioOptions[0],
    },
  });

  return (
    <>
      <div className="px-4 py-3 mb-5 bg-white dark:bg-[rgba(36,37,38,1)] rounded-lg shadow-sm">
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <Avatar
              width={32}
              height={32}
              alt="avatar-book"
              src="https://test.khonhapho.vn/images/logo/logo-background.jpg?height=100&width=100"
              shape="circle"
            />
            <div>
              <Typography variant="h4" className="text-base font-semibold">
                Nhà Phố Việt Nam
              </Typography>
              <Typography variant="p" className="flex items-center gap-1">
                <ClockIcon
                  width="12"
                  height="12"
                  className="dark:[&>path]:fill-[rgba(107,108,109,1)]"
                />
                <Typography variant="span" className="text-xs dark:text-[rgba(107,108,109,1)]">
                  12/03/2024 10:39:45
                </Typography>
              </Typography>
            </div>
          </div>
          <Tag className="h-[22px] px-2 py-1 text-xs text-white font-semibold bg-primaryButtonLight">
            Đất thổ cư - Đất ở
          </Tag>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <div className="text-base font-semibold text-infoLight dark:text-infoDark">
            Nhà 4 tầng đường Ngọc Trục, Q. - Giá 4.35 tỷ
          </div>
          <div className="flex">
            <div className="flex items-center flex-1 space-x-1">
              <Typography
                variant="span"
                className="text-sm text-primaryColorDark dark:text-primaryColorLight "
              >
                Giá:
              </Typography>
              <Typography
                variant="span"
                className="text-sm font-normal text-errorLight dark:text-errorDark"
              >
                9.2 tỷ
              </Typography>
            </div>
            <div className="flex items-center flex-1 space-x-1">
              <Typography
                variant="span"
                className="text-sm text-primaryColorDark dark:text-primaryColorLight "
              >
                Diện tích:
              </Typography>
              <Typography
                variant="span"
                className="text-sm font-normal text-errorLight dark:text-errorDark"
              >
                40 m²
              </Typography>
            </div>
          </div>
          <div className="space-x-1">
            <Typography
              variant="span"
              className="text-sm text-primaryColorDark dark:text-primaryColorLight "
            >
              SĐT:
            </Typography>
            <a
              href="tel:0941319666"
              className="text-sm font-semibold text-infoLight dark:text-infoDark hover:underline"
              target="_blank"
            >
              0941319666
            </a>
          </div>
          <div className="space-x-1">
            <Typography
              variant="span"
              className="text-sm text-primaryColorDark dark:text-primaryColorLight "
            >
              Địa chỉ:
            </Typography>
            <Typography
              variant="span"
              className="text-sm font-semibold text-primaryColorDark dark:text-primaryColorLight"
            >
              số 33 phố Trần Điền, Phường Định Công, Hoàng Mai, Hà Nội
            </Typography>
          </div>
          <div className="mt-2 text-sm text-primaryColorDark dark:text-primaryColorLight">
            <ExpandableText
              text="Nhà diện tích 40 m2, mới xây 5 tầng, 1 tum, mặt tiền 4,3m vuông đẹp, nhà 2 mặt ngõ, có thang máy, các tầng đều có điều hoà, nóng lạnh.
            Tầng 1: phòng khách, bếp; Tầng 2 có thể làm phòng khách hoặc phòng ngủ; Tầng 3, 4, 5: phòng ngủ WC khép kín; tầng 6: phòng thờ, sân phơi. Nhà đẹp, kiến trúc Âu hiện đại
            Sổ đỏ"
              maxLength={130}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <Button
            startIcon={<CopyIcon />}
            className="h-6 gap-1 px-2 py-1 font-normal text-primaryColorDark dark:text-primaryColorLight border-dividerLight dark:border-dividerDark dark:bg-secondaryColorDark"
            variant="outline"
          >
            Chép
          </Button>
          <div className="flex items-center justify-end flex-wrap gap-3">
            <Button
              onClick={() => setIsShowFeedback(true)}
              variant="outline"
              className="h-8 px-2 py-1 font-normal"
            >
              Xem phản hồi
            </Button>
            <Button variant="outlineRed" className="h-8 gap-1 px-2 py-1 font-normal">
              Xoá
            </Button>
            <Button
              onClick={() => setIsShowEditBelieve(true)}
              variant="outline"
              className="h-8 gap-1 px-2 py-1 font-normal"
            >
              Sửa
            </Button>
            <Button
              variant="outline"
              startIcon={<ArrowsExchangeIcon color={'#fff'} />}
              className="h-8 gap-1 px-2 py-1 font-normal bg-[rgba(13,116,144,1)] border-[rgba(13,116,144,1)] text-[#fff]"
            >
              Tin nhanh
            </Button>
          </div>
        </div>
      </div>
      <Modal
        open={isShowFeedback}
        onCancel={() => setIsShowFeedback(false)}
        title="Xem phản hồi"
        className="max-w-[560px] w-full !px-6 !py-5"
        isDivided={false}
        styleTitle="normal-case font-semibold text-base textPrimaryLight dark:text-textPrimaryDark"
      >
        <NoResult title="Bạn không được cấp quyền truy cập thông tin này!" className="!mt-0 mb-4" />
      </Modal>
      <Modal
        open={isShowEditBelieve}
        onCancel={() => setIsShowEditBelieve(false)}
        title="Sửa tin"
        className="max-w-[622px] w-full !p-5"
        isDivided={false}
        styleTitle="normal-case font-semibold text-base textPrimaryLight dark:text-textPrimaryDark"
        disableInteractOutside
      >
        <div>
          <Form {...form}>
            <form
              className="flex flex-col"
              onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
            >
              <div className="mb-5">
                <RadioForm<z.infer<typeof FormSchema>>
                  name="believeType"
                  options={radioOptions}
                  className="flex items-center gap-3 text-sm"
                />
              </div>
              <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:gap-4 flex-wrap">
                <div className="mb-5 w-full sm:flex-1">
                  <SelectForm<z.infer<typeof FormSchema>>
                    name="type"
                    options={typeOptions}
                    placeholder="Chọn loại hình nhà đất"
                    className="rounded-[10px]"
                    label="Loại hình nhà đất"
                    required
                  />
                </div>
                <div className="w-full sm:flex-1"></div>
              </div>
              <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:gap-4 flex-wrap">
                <div className="mb-5 w-full sm:flex-1">
                  <SelectForm<z.infer<typeof FormSchema>>
                    name="city"
                    options={CITY}
                    placeholder="Chọn thành phố"
                    className="rounded-[10px]"
                    label="Thành phố"
                    required
                  />
                </div>
                <div className="mb-5 w-full sm:flex-1">
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
              </div>

              <div className="mb-5">
                <InputForm<z.infer<typeof FormSchema>>
                  name="address"
                  placeholder="Nhập địa chỉ"
                  className="rounded-[10px] pr-0"
                  label="Địa chỉ"
                  required
                  suffixIcon={
                    <button className="flex items-center justify-center w-full max-w-[40px] h-10 rounded-s-none mr-[-1px] border-l border-solid dark:border-textSecondaryDark bg-[rgba(243,244,246,1)] dark:bg-secondaryColorDark rounded-e-lg">
                      <ArrowsRotateIcon color="#333" />
                    </button>
                  }
                />
              </div>
              <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:gap-4 flex-wrap">
                <div className="w-full sm:flex-1 mb-5">
                  <InputForm<z.infer<typeof FormSchema>>
                    name="phone"
                    placeholder="Nhập số điện thoại chủ nhà"
                    className="rounded-[10px]"
                    label="Số điện thoại chủ nhà"
                    required
                  />
                </div>
                <div className="w-full sm:flex-1"></div>
              </div>

              <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:gap-4 flex-wrap">
                <div className="w-full sm:flex-1 mb-5">
                  <InputForm<z.infer<typeof FormSchema>>
                    name="price"
                    placeholder="Nhập giá"
                    className="rounded-[10px]"
                    label="Giá"
                    required
                    description={
                      <p className="font-normal text-xs text-[rgba(0,0,0,0.5)] dark:text-[#fff]">
                        4.35 tỷ
                      </p>
                    }
                  />
                </div>
                <div className="w-full sm:flex-1 mb-5">
                  <InputForm<z.infer<typeof FormSchema>>
                    name="acreage"
                    placeholder="Nhập diện tích"
                    className="rounded-[10px]"
                    label="Diện tích"
                    required
                    description={
                      <p className="font-normal text-xs text-[rgba(0,0,0,0.5)] dark:text-[#fff]">
                        40m²
                      </p>
                    }
                  />
                </div>
              </div>
              <div className="mb-5">
                <CheckboxForm<z.infer<typeof FormSchema>>
                  name="isAccept"
                  label="Giá thoả thuận"
                  className={'text-sm font-normal'}
                />
              </div>

              <div className="mb-5">
                <InputForm<z.infer<typeof FormSchema>>
                  name="title"
                  placeholder="Nhập tiêu đề"
                  className="rounded-[10px]"
                  label="Tiêu đề"
                  required
                />
              </div>

              <div className="mb-3">
                <TextareaForm<z.infer<typeof FormSchema>>
                  name="content"
                  placeholder="Nhập nội dung"
                  className="rounded-[10px]"
                  minRows={6}
                  label="Nội dung"
                  required
                />
              </div>

              <div className="flex items-center justify-center">
                <Button type="submit" className="w-full max-w-[290px]">
                  Cập nhật
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Modal>
    </>
  );
};
