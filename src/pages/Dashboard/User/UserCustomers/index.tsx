import { NoResult } from '@/common/components';
import { TabList, TabPanel } from '@/components/DataDisplay/TabsV2';
import {
  CheckboxForm,
  Form,
  Input,
  InputForm,
  RequiredSymbolLabel,
  SelectForm,
  TextareaForm,
} from '@/components/DataEntry';
import { Modal, ModalHelp } from '@/components/Feedback';
import { AddIcon, Button, SearchIcon, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type TListHistoryReportOwner = {
  review?: string;
  request?: string;
  evaluate?: string;
  time?: string;
  fullName_customer?: string;
  birthday?: string;
  financing_max?: string;
  area?: string;
  direction?: string;
  purpose?: string;
  finance_ready?: string;
  buying_home?: string;
  understand?: string;
  respect?: string;
  needed?: string;
  interact?: string;
};

const columms = [
  { label: 'request', value: 'YÊU CẦU' },
  { label: 'evaluate', value: 'ĐÁNH GIÁ' },
  { label: 'time', value: 'THỜI GIAN' },
  { label: 'fullName_customer', value: 'HỌ VÀ TÊN KHÁCH' },
  { label: 'birthday', value: 'N.SINH' },
  { label: 'financing_max', value: 'T.C TỐI ĐA' },
  { label: 'area', value: 'KHU VỰC' },
  { label: 'direction', value: 'HƯỚNG NHÀ' },
  { label: 'purpose', value: 'MỤC ĐÍCH MUA' },
  { label: 'finance_ready', value: 'TC SẴN SÀNG' },
  { label: 'buying_home', value: 'MUA HỤT NHÀ' },
  { label: 'understand', value: 'HIỂU THỊ TRƯỜNG' },
  { label: 'respect', value: 'TÔN TRỌNG MG' },
  { label: 'needed', value: 'CẦN MUA GẤP' },
  { label: 'interact', value: 'T.TÁC' },
];

const listHistoryReportOwner: TListHistoryReportOwner[] = [];

const renderRowValue = (
  key: keyof TListHistoryReportOwner,
  row: TListHistoryReportOwner,
): string | React.ReactElement => {
  switch (key) {
    case 'request':
      return <span>{row.request}</span>;
    case 'evaluate':
      return <span>{row.evaluate}</span>;
    case 'time':
      return <span>{row.time}</span>;
    case 'fullName_customer':
      return <span>{row.fullName_customer}</span>;
    case 'birthday':
      return <span>{row.birthday}</span>;
    case 'financing_max':
      return <span>{row.financing_max}</span>;
    case 'area':
      return <span>{row.area}</span>;
    case 'direction':
      return <span>{row.direction}</span>;
    case 'purpose':
      return <span>{row.purpose}</span>;
    case 'finance_ready':
      return <span>{row.finance_ready}</span>;
    case 'buying_home':
      return <span>{row.buying_home}</span>;
    case 'understand':
      return <span>{row.understand}</span>;
    case 'respect':
      return <span>{row.respect}</span>;
    case 'needed':
      return <span>{row.needed}</span>;
    case 'interact':
      return <span>{row.interact}</span>;
    default:
      return typeof row[key];
  }
};

const FormAddNotificationCustomer = z.object({
  fullname_customer: z.string({ message: 'Yêu cầu nhập trường này' }),
  cmnd: z.string({ message: 'Yêu cầu nhập trường này' }),
  yearBirthday: z.string({ message: 'Yêu cầu nhập trường này' }),
  phone: z.string().optional(),
  address: z.string().optional(),
  financing_max: z.string({ message: 'Yêu cầu nhập trường này' }),
  address_buying: z.object(
    {
      value: z.string(),
      label: z.string(),
    },
    { message: 'Yêu cầu nhập trường này' },
  ),
  district: z.object(
    {
      value: z.string(),
      label: z.string(),
    },
    { message: 'Yêu cầu nhập trường này' },
  ),
  direction: z.object(
    {
      value: z.string(),
      label: z.string(),
    },
    { message: 'Yêu cầu nhập trường này' },
  ),
  purpose: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .optional(),
  financing_ready: z.boolean().optional(),
  buying_home: z.boolean().optional(),
  understand: z.boolean().optional(),
  respect: z.boolean().optional(),
  needed: z.boolean().optional(),
  description: z.string().optional(),
});

const HUONG_NHA = [
  { value: 'Chưa rõ', label: 'Chưa rõ' },
  { value: 'Không quan trọng', label: 'Không quan trọng' },
  { value: 'Bắc', label: 'Bắc' },
  { value: 'Nam', label: 'Nam' },
  { value: 'Đông', label: 'Đông' },
  { value: 'Tây', label: 'Tây' },
];

const MUC_DICH_MUA = [
  { value: 'Chưa rõ', label: 'Chưa rõ' },
  { value: 'Mua để ở', label: 'Mua để ở' },
  { value: 'Mua để kinh doanh', label: 'Mua để kinh doanh' },
  { value: 'Mua để ở và kinh doanh', label: 'Mua để ở và kinh doanh' },
  { value: 'Mua để giữ tiền', label: 'Mua để giữ tiền' },
  { value: 'Mua để đầu tư dòng tiền', label: 'Mua để đầu tư dòng tiền' },
];

export const UserCustomers = () => {
  const [showModalAdd, setshowModalAdd] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormAddNotificationCustomer>>({
    resolver: zodResolver(FormAddNotificationCustomer),
    defaultValues: {
      direction: HUONG_NHA[0],
    },
  });

  const handleModalAddCustomer = () => {
    setshowModalAdd((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="px-5 py-3 bg-white rounded-t-lg dark:bg-primaryColorDark">
        <div className="flex justify-between pb-3 ">
          <div>
            <Typography variant="h2" className="text-sm font-medium uppercase dark:text-white">
              QUẢN LÝ KHÁCH HÀNG
            </Typography>
            <ModalHelp
              label="18 Câu truy vấn khách hàng"
              title="18 CÂU TRUY VẤN KHÁCH HÀNG QUA CUỘC GỌI ĐẦU TIÊN"
              className="font-semibold"
            >
              <div className="px-5 py-5">
                <ol className="space-y-1.5 list-decimal">
                  <li>
                    <strong>Anh chị tìm nhà lâu chưa?</strong>
                  </li>
                  <li>
                    <strong>Anh chị ở gần khu vực này không?</strong>
                  </li>
                  <li>
                    <strong>Em có mấy căn ở đấy anh chị hỏi căn nhà nào?</strong> <br /> (Khi khách
                    hỏi đến nhà ảo thì mình nói nhà chưa sổ hoặc đang quy hoạch để đẩy khách sang
                    căn mình có)
                  </li>
                  <li>
                    <strong>Chị mua để ở hay đầu tư kinh doanh?</strong>
                  </li>
                  <li>
                    <strong>
                      Sao anh chị cần mua nhà khu vực này? Em cần biết nhu cầu của anh chị để tìm
                      nhà sát với tiêu chí của anh chị.
                    </strong>
                  </li>
                  <li>
                    <strong>Có cần mua gấp không?</strong>
                  </li>
                  <li>
                    <strong>Anh chị mua để tự kinh doanh hay cho thuê?</strong>
                  </li>
                  <li>
                    <strong>Anh chị cần bao nhiêu phòng ngủ?</strong>
                  </li>
                  <li>
                    <strong>Nhà có bao nhiêu người?</strong>
                  </li>
                  <li>
                    <strong>
                      Anh chị có quan trọng hướng không? Nếu có, anh chị hợp hướng gì?
                    </strong>
                  </li>
                  <li>
                    <strong>Tầm tài chính bao nhiêu?</strong>
                  </li>
                  <li>
                    <strong>Mua cho ai?</strong>
                    <br /> (Khách nói mua cho người khác hoặc đi xem hộ thì cho next luôn)
                  </li>
                  <li>
                    <strong>Mua nhà này bao nhiêu người quyết định?</strong>
                    <br /> (Nếu người quyết định họ sẽ nói rõ vấn đề họ không ưng về căn nhà)
                  </li>
                  <li>
                    <strong>Có cần vay hay không?</strong>
                  </li>
                  <li>
                    <strong>Mua trượt nhà nào chưa?</strong>
                    <br /> (Nếu rồi thì họ có nhu cầu mua nhà thật và tìm hiểu căn họ mua trượt khi
                    gặp để sát nhu cầu)
                  </li>
                  <li>
                    <strong>Đi xem nhà vào giờ nào?</strong>
                    <br /> (Nên tránh giờ tắc đường Không nên dẫn ngay sau cuộc gọi mà phải từ 30
                    phút trở lên để có thời gian khảo sát lại và tìm hiểu kỹ thông tin căn nhà khi
                    gặp khách)
                  </li>
                  <li>
                    <strong>Có kiêng thóp hậu, đường đâm, ngõ cụt không?</strong> <br />
                    (Nếu khách kiêng đường đâm là họ kiêng cả thóp hậu)
                  </li>
                  <li>
                    <strong>Nhà cũ có được không hay nhà mới ở luôn.</strong>
                    <br />
                    (Nếu khách nói sao hỏi nhiều thế thì trả lời khách là em làm như vậy cũng chỉ
                    muốn giúp anh chị mua được nhà ưng ý và khách thật họ luôn lắng nghe mình nói,
                    còn Môi giới chỉ là hỏi mấy câu rồi nhanh chóng cúp máy vì sợ tốn tiền.)
                  </li>
                </ol>
              </div>
            </ModalHelp>
          </div>

          <Button className="h-8 px-4 py-1" onClick={handleModalAddCustomer}>
            <AddIcon width="20" color="white" />
            <span>Thêm mới</span>
          </Button>

          <Modal
            open={showModalAdd}
            onCancel={handleModalAddCustomer}
            title="THÔNG TIN KHÁCH HÀNG"
            disableInteractOutside
            className="lg:w-[850px] w-full"
          >
            <div>
              <p className="my-3 text-sm italic">
                Hỗ trợ quản lý khách hàng tốt hơn. Tìm nhà cho khách chính xác hơn. Báo cáo dẫn
                khách nhanh hơn. Tương tác Đầu chủ - Đầu khách - Trưởng phòng tối ưu hơn.
              </p>
              <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm line-clamp-1 md:w-[250px]"
                      htmlFor="fullname_customer"
                    >
                      <RequiredSymbolLabel />
                      Họ và tên khách hàng
                    </label>
                    <div className="flex-1">
                      <InputForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="fullname_customer"
                        id="fullname_customer"
                        value={form.watch('fullname_customer')}
                        placeholder="Điền họ và tên"
                        className="flex-1 w-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label className="text-sm md:w-[250px] flex items-center" htmlFor="cmnd">
                      <RequiredSymbolLabel />
                      <div>
                        CMND hoặc Thẻ căn cước của khách <br />
                        <span>(Hoàn toàn được bảo mật)</span>
                      </div>
                    </label>
                    <div className="flex-1">
                      <InputForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="cmnd"
                        id="cmnd"
                        value={form.watch('cmnd')}
                        placeholder="Điền số CMND hoặc Thẻ căn cước"
                        className="flex-1 w-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label className="text-sm line-clamp-1 md:w-[250px]" htmlFor="yearBirthday">
                      <RequiredSymbolLabel />
                      Năm sinh khách
                    </label>
                    <div className="flex-1">
                      <InputForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="yearBirthday"
                        id="yearBirthday"
                        value={form.watch('yearBirthday')}
                        placeholder="Điền năm sinh"
                        className="flex-1 w-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label className="text-sm md:w-[250px] flex items-center gap-1" htmlFor="phone">
                      <span className="text-transparent">*</span>
                      <div>
                        SĐT khách <br />
                        <span>(Hoàn toàn được bảo mật)</span>
                      </div>
                    </label>
                    <div className="flex-1">
                      <InputForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="phone"
                        id="phone"
                        value={form.watch('phone')}
                        placeholder="Điền số điện thoại"
                        className="flex-1 w-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm md:w-[250px] flex items-center gap-1"
                      htmlFor="address"
                    >
                      <span className="text-transparent">*</span>
                      Nơi khách ở
                    </label>
                    <div className="flex-1">
                      <InputForm<z.infer<typeof FormAddNotificationCustomer>>
                        id="address"
                        name="address"
                        value={form.watch('address')}
                        placeholder="VD: Thái Thịnh, Đống Đa "
                        className="flex-1 w-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label className="text-sm line-clamp-1 md:w-[250px]" htmlFor="financing_max">
                      <RequiredSymbolLabel />
                      Tài chính tối đa
                    </label>
                    <div className="flex-1">
                      <InputForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="financing_max"
                        id="financing_max"
                        value={form.watch('financing_max')}
                        placeholder="Tài chính tối đa"
                        className="flex-1 w-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label className="text-sm line-clamp-1 md:w-[250px]" htmlFor="address_buying">
                      <RequiredSymbolLabel />
                      Khu vực cần mua
                    </label>
                    <div className="flex-1">
                      <SelectForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="address_buying"
                        placeholder="Tỉnh/thành phố"
                        className="flex-1 w-full rounded-md"
                        options={[{ value: 'Hà nội', label: 'Hà Nội' }]}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label className="text-sm line-clamp-1 md:w-[250px]" htmlFor="district">
                      <RequiredSymbolLabel />
                      Quận/Huyện
                    </label>
                    <div className="flex-1">
                      <SelectForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="district"
                        placeholder="Quận/Huyện"
                        className="flex-1 w-full rounded-md"
                        options={[{ value: 'Tây Hồ', label: 'Tây Hồ' }]}
                        disabled={!form.watch('address_buying')}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm md:w-[250px] flex items-center gap-1"
                      htmlFor="direction"
                    >
                      <span className="text-transparent">*</span>
                      Hướng nhà
                    </label>
                    <div className="flex-1">
                      <SelectForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="direction"
                        placeholder="Hướng nhà"
                        className="flex-1 w-full rounded-md"
                        options={HUONG_NHA}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm md:w-[250px] flex items-center gap-1"
                      htmlFor="purpose"
                    >
                      <span className="text-transparent">*</span>
                      Mục đích mua
                    </label>
                    <div className="flex-1">
                      <SelectForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="purpose"
                        placeholder="Mục đích mua"
                        className="flex-1 w-full rounded-md"
                        options={MUC_DICH_MUA}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm md:w-[250px] flex items-center gap-1"
                      htmlFor="financing_ready"
                    >
                      <span className="text-transparent">*</span>
                      Tài chính sẵn sàng?
                    </label>
                    <div className="flex-1">
                      <CheckboxForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="financing_ready"
                        id="financing_ready"
                        label="Sẵn sàng"
                        variant={'success'}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm md:w-[250px] flex items-center gap-1"
                      htmlFor="buying_home"
                    >
                      <span className="text-transparent">*</span>
                      Đã mua hụt nhà?
                    </label>
                    <div className="flex-1">
                      <CheckboxForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="buying_home"
                        id="buying_home"
                        label="Đã từng"
                        variant={'success'}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm md:w-[250px] flex items-center gap-1"
                      htmlFor="understand"
                    >
                      <span className="text-transparent">*</span>
                      Hiểu thị trường?
                    </label>
                    <div className="flex-1">
                      <CheckboxForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="understand"
                        id="understand"
                        label="Đã hiểu"
                        variant={'success'}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm md:w-[250px] flex items-center gap-1"
                      htmlFor="respect"
                    >
                      <span className="text-transparent">*</span>
                      Tôn trọng Môi giới?
                    </label>
                    <div className="flex-1">
                      <CheckboxForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="respect"
                        label="Tôn trọng"
                        variant={'success'}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm md:w-[250px] flex items-center gap-1"
                      htmlFor="needed"
                    >
                      <span className="text-transparent">*</span>
                      Cần mua gấp?
                    </label>
                    <div className="flex-1">
                      <CheckboxForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="needed"
                        label="Cần mua gấp"
                        variant={'success'}
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between w-full gap-5 mt-5">
                    <label
                      className="text-sm md:w-[250px] flex items-center gap-1"
                      htmlFor="description"
                    >
                      <span className="text-transparent">*</span>
                      Ghi chú yêu cầu
                    </label>
                    <div className="flex-1">
                      <TextareaForm<z.infer<typeof FormAddNotificationCustomer>>
                        name="description"
                        placeholder="Mặt đường, trong ngõ 4 phòng ngủ, có ban công, gara ôtô ..."
                      />
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-black/5 dark:bg-white/10 mt-5"></div>
                  <div className="flex justify-end w-full gap-5 mt-3 ">
                    <Button
                      type="submit"
                      className="w-[72px] h-10 border-secondaryColorDark/25 text-secondaryColorDark dark:text-secondaryColorLight"
                      variant={'outline'}
                      onClick={handleModalAddCustomer}
                    >
                      Đóng
                    </Button>
                    <Button type="submit" className="w-[72px] h-10">
                      Thêm
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </Modal>
        </div>
        <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-5">
          <div className="md:w-[316px] w-full">
            <TabList
              name="user-customers"
              items={['Đang tìm mua', 'Đã mua nhà']}
              defaultIndex={0}
              className="font-normal"
            />
          </div>
          <div className="flex w-full md:w-[294px]">
            <Input
              className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark "
              placeholder="Nhập nội dung tìm kiếm"
            />
            <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
              <SearchIcon color="white" />
            </button>
          </div>
        </div>
      </div>
      <TabPanel name="user-customers" tabIndex={0}>
        <div className="bg-white">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  {columms.map((columm) => (
                    <th
                      key={columm.label}
                      className="px-1 py-2 text-sm font-semibold text-left uppercase"
                    >
                      {columm.value}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {listHistoryReportOwner.map((history, index) => (
                  <tr
                    key={`history_${index}`}
                    className={clsx('text-sm', {
                      'bg-secondaryColorLightD2 dark:bg-primaryColorDark': index % 2 !== 0,
                      'bg-primaryColorLight dark:bg-secondaryColorDarkD2': index % 2 === 0,
                    })}
                  >
                    {columms.map((col, k) => (
                      <td className="px-1.5 py-1 text-left break-words" key={`th_key_${k}`}>
                        {renderRowValue(col.label as keyof TListHistoryReportOwner, history)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {listHistoryReportOwner.length <= 0 && (
              <div className="justify-center w-full p-3">
                <NoResult title="Không có kết quả nào trên hệ thống!" />
              </div>
            )}
          </div>
        </div>
      </TabPanel>
      <TabPanel name="user-customers" tabIndex={1}>
        <div className="bg-white">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  {columms.map((columm) => (
                    <th
                      key={columm.label}
                      className="px-1 py-2 text-sm font-semibold text-left uppercase"
                    >
                      {columm.value}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {listHistoryReportOwner.map((history, index) => (
                  <tr
                    key={`history_${index}`}
                    className={clsx('text-sm', {
                      'bg-secondaryColorLightD2 dark:bg-primaryColorDark': index % 2 !== 0,
                      'bg-primaryColorLight dark:bg-secondaryColorDarkD2': index % 2 === 0,
                    })}
                  >
                    {columms.map((col, k) => (
                      <td className="px-1.5 py-1 text-left break-words" key={`th_key_${k}`}>
                        {renderRowValue(col.label as keyof TListHistoryReportOwner, history)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {listHistoryReportOwner.length <= 0 && (
              <div className="justify-center w-full p-3">
                <NoResult title="Không có kết quả nào trên hệ thống!" />
              </div>
            )}
          </div>
        </div>
      </TabPanel>
    </div>
  );
};
