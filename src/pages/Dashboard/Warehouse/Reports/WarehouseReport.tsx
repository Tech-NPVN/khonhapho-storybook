import { Form, InputForm, RequiredSymbolLabel, Textarea, Upload } from '@/components/DataEntry';
import { RadioForm } from '@/components/DataEntry/Radio';
import { Modal } from '@/components/Feedback';
import { Button } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { IPosting } from '../const';

const PurposeOptions = [
  {
    value: '0',
    label: 'Mua để ở',
  },
  {
    value: '1',
    label: 'Mua để kinh doanh',
  },
  {
    value: 'other',
    label: 'Khác',
    input_value: '',
  },
];
const FEEDBACK_OPTIONS = [
  {
    value: '0',
    label: 'Khách thích nhà - vị trí nhà hoặc hẹn người nhà đi xem lại',
  },
  {
    value: '1',
    label: 'Khách suy nghĩ thêm',
  },
  {
    value: '2',
    label: 'Khách không thích nhà - vị trí nhà',
    input_value: '',
  },
  {
    value: 'other',
    label: 'Khác',
    input_value: '',
  },
];
const HOST_REVIEW = [
  {
    value: '0',
    label: 'Vui vẻ hợp tác',
  },
  {
    value: '1',
    label: 'Thái độ và không Hợp tác',
  },
  {
    value: 'other',
    label: 'Khác',
    input_value: '',
  },
];
function WarehouseReport({
  show = false,
  onClose,
  data,
}: {
  show?: boolean;
  onClose?: () => void;
  data: IPosting;
}) {
  const FormSchema = z.object({
    customer_info: z.object({
      full_name: z
        .string({ message: 'Bạn phải nhập mục này' })
        .trim()
        .refine((val) => val.length > 0, { message: 'Bạn phải nhập mục này' }),
      citizen_identification_number: z
        .string({ message: 'Bạn phải nhập mục này' })
        .refine((val) => val.length > 0, { message: 'Bạn phải nhập mục này' }),
      address: z.string().optional(),
      time: z
        .string({ message: 'Bạn phải nhập mục này' })
        .refine((val) => val.length > 0, { message: 'Bạn phải nhập mục này' }),
    }),
    purpose: z
      .object(
        {
          value: z.string(),
          label: z.string(),
          input_value: z.string().optional(),
        },
        { message: '-' },
      )
      .refine((item) => (item.value === 'other' && item.input_value) || item.value !== 'other', {
        message: ' ',
      }),
    feedback: z
      .object(
        {
          value: z.string(),
          label: z.string(),
          input_value: z.string().optional(),
        },
        { message: '-' },
      )
      .refine((item) => (item.value === 'other' && item.input_value) || item.value !== 'other', {
        message: ' ',
      }),
    host_review: z
      .object(
        {
          value: z.string(),
          label: z.string(),
          input_value: z.string().optional(),
        },
        { message: '-' },
      )
      .refine((item) => (item.value === 'other' && item.input_value) || item.value !== 'other', {
        message: ' ',
      }),

    guest_comments: z.string().optional(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      purpose: PurposeOptions[0],
      feedback: FEEDBACK_OPTIONS[0],
      host_review: HOST_REVIEW[0],
    },
  });

  return (
    <div>
      <Modal
        open={show}
        onCancel={() => {
          onClose?.();
        }}
        className="w-[850px]"
        title="BÁO CÁO DẪN KHÁCH DẾN ĐẦU CHỦ"
        disableInteractOutside
      >
        <ul className="list-disc text-sm mt-3 dark:text-white">
          <li>
            Để đẩm bảo quyền lợi cho Chuyên viên Đầu khách, giải quyết việc khiếu nại trùng khách,
            cắt cầu v.v... Yêu cầu Chuyên viên Báo cáo lại cho Đầu chủ sau khi dẫn khách.
          </li>
          <li>
            Thông tin Khách hàng sẽ được bảo mật. Đầu khách báo cáo thông tin khách xem nhà đến Đầu
            chủ theo mẫu bên dưới:
          </li>
          <li>
            Lưu ý: Đầu khách kiểm tra lại nội dung thông tin trước khi gửi và tên của Đầu chủ cần
            gửi báo cáo.
          </li>
        </ul>
        <Form {...form}>
          <form
            className="flex pt-4 flex-wrap"
            onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
          >
            <div className="flex items-center justify-between w-full gap-5">
              <label
                htmlFor="customer_info.full_name"
                className="leading-8 text-sm dark:text-white min-w-52"
              >
                <RequiredSymbolLabel />
                Họ và tên khách xem nhà
              </label>
              <div className="flex-1">
                <InputForm<z.infer<typeof FormSchema>>
                  name="customer_info.full_name"
                  value={form.watch('customer_info.full_name')}
                  placeholder="Họ và tên"
                  className="rounded-[6px] h-8 w-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 mt-3">
              <label
                htmlFor="customer_info.citizen_identification_number"
                className="leading-8 text-sm dark:text-white min-w-52"
              >
                <RequiredSymbolLabel />
                CMND hoặc Thẻ căn cước
              </label>
              <div className="flex-1">
                <InputForm<z.infer<typeof FormSchema>>
                  name="customer_info.citizen_identification_number"
                  value={form.watch('customer_info.citizen_identification_number')}
                  placeholder="CMND/CCCD"
                  className="rounded-[6px] h-8 w-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 mt-3">
              <label
                htmlFor="customer_info.address"
                className="leading-8 text-sm dark:text-white min-w-52"
              >
                <span className="text-transparent">* </span>Địa chỉ khách ở
              </label>
              <div className="flex-1">
                <InputForm<z.infer<typeof FormSchema>>
                  name="customer_info.address"
                  value={form.watch('customer_info.address')}
                  placeholder="VD: Hà Đông, Từ Liêm"
                  className="rounded-[6px] h-8 w-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 mt-3">
              <label
                htmlFor="customer_info.full_name"
                className="leading-8 text-sm dark:text-white min-w-52"
              >
                <RequiredSymbolLabel />
                Thời gian khách xem nhà
              </label>
              <div className="flex-1">
                <InputForm<z.infer<typeof FormSchema>>
                  name="customer_info.time"
                  value={form.watch('customer_info.time')}
                  placeholder="Thời gian khách xem nhà"
                  className="rounded-[6px] h-8 w-full"
                />
              </div>
            </div>
            <div className="flex items-start justify-between w-full gap-5 mt-3">
              <label
                htmlFor="customer_info.full_name"
                className="leading-8 text-sm dark:text-white min-w-52"
              >
                <RequiredSymbolLabel />
                Mục đích mua của khách
              </label>
              <div className="flex-1">
                <RadioForm<z.infer<typeof FormSchema>>
                  options={PurposeOptions}
                  name="purpose"
                  className="rounded-[6px] w-full"
                />
              </div>
            </div>
            <div className="flex items-start justify-between w-full gap-5 mt-3">
              <label
                htmlFor="customer_info.full_name"
                className="leading-8 text-sm dark:text-white min-w-52"
              >
                <RequiredSymbolLabel />
                Phản hồi của khách
              </label>
              <div className="flex-1">
                <RadioForm<z.infer<typeof FormSchema>>
                  options={FEEDBACK_OPTIONS}
                  name="feedback"
                  className="rounded-[6px] w-full"
                />
              </div>
            </div>
            <div className="flex items-start justify-between w-full gap-5 mt-3">
              <label
                htmlFor="customer_info.full_name"
                className="leading-8 text-sm dark:text-white min-w-52"
              >
                <RequiredSymbolLabel />
                Đánh giá Chủ nhà
              </label>
              <div className="flex-1">
                <RadioForm<z.infer<typeof FormSchema>>
                  options={HOST_REVIEW}
                  name="host_review"
                  className="rounded-[6px] w-full"
                />
              </div>
            </div>
            <div className="flex items-start justify-between w-full gap-5 mt-3">
              <label
                htmlFor="customer_info.full_name"
                className="leading-8 text-sm dark:text-white min-w-52"
              >
                <span className="text-transparent">* </span>
                Tải ảnh lên (tối đa 5 ảnh)
              </label>
              <div className="flex-1">
                <Upload
                  className="w-[90px] h-[90px]"
                  previewImage={[]}
                  setPreviewImage={() => {}}
                ></Upload>
              </div>
            </div>
            <div className="flex items-start justify-between w-full gap-5 mt-3">
              <label
                htmlFor="customer_info.full_name"
                className="leading-8 text-sm dark:text-white min-w-52"
              >
                <span className="text-transparent">* </span>Ý kiến của đầu khách
              </label>
              <div className="flex-1">
                <Textarea rows={6} placeholder="Ý kiến của đầu khách"></Textarea>
              </div>
            </div>
            <div className="flex justify-end gap-1 w-full mt-5">
              <Button variant={'outlineRed'} onClick={onClose}>
                Huỷ
              </Button>
              <Button type="submit">Xong</Button>
            </div>
          </form>
        </Form>
      </Modal>
    </div>
  );
}

export default WarehouseReport;
