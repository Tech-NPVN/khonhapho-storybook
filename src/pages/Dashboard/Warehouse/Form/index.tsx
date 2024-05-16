import { Form, IOption, InputForm, RequiredSymbolLabel, SelectForm } from '@/components/DataEntry';
import { TextareaForm } from '@/components/DataEntry/Textarea';
import { Button, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const PROPERTY_TYPE = [
  { label: 'Thổ cư', value: '1' },
  { label: 'Chung cư', value: '2' },
  { label: 'Dự án', value: '3' },
] as IOption[];

const PROPERTY_FEATURE = [
  { label: 'Mặt Phố', value: '1' },
  { label: 'Kinh Doanh', value: '2' },
  { label: 'Thời Trang', value: '3' },
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

const STREET = [
  { label: 'Đường số 1', value: '1' },
  { label: 'Đường số 2', value: '2' },
  { label: 'Đường số 3', value: '3' },
] as IOption[];

const BONUS = [
  { label: '%', value: '1' },
  { label: 'Triệu', value: '2' },
  { label: 'Tỷ', value: '3' },
] as IOption[];

const LEGAL_STATUS = [
  { label: 'Sổ đỏ/Sổ hồng', value: '1' },
  { label: 'Chưa sổ/Chờ cấp sổ', value: '2' },
  { label: 'Có sổ - Thiếu seri sổ', value: '3' },
] as IOption[];

const formOption = {
  value: z.string(),
  label: z.string(),
  disable: z.boolean().optional(),
};
function WarehouseForm() {
  const FormSchema = z.object({
    property_type: z.object(
      {
        value: z.string(),
        label: z.string(),
        disable: z.boolean().optional(),
      },
      { message: 'Bạn phải mục chọn này' },
    ),
    property_feature: z.array(z.object(formOption)).refine((value) => value.length > 0, {
      message: 'Bạn phải mục chọn này',
    }),
    address: z.object({
      city: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
      district: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
      street: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
      apartment_number: z.string({ message: 'Bạn phải nhập mục này' }),
    }),
    project: z.string().optional(),
    spec: z.string({ message: 'Bạn phải nhập mục này' }),
    bonus: z.object({
      value: z.number({ message: 'Bạn phải nhập mục này' }).min(1, 'Giá trị này phải lớn hơn 0'),
      type: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
    }),
    contract_type: z.number({ message: 'Bạn phải nhập mục này' }),
    bonus_referral: z.number({ message: 'Bạn phải nhập mục này' }),
    title: z.string({ message: 'Bạn phải nhập mục này' }),
    content: z.string({ message: 'Bạn phải nhập mục này' }),
    legal_status: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
    number_certificate: z.string({ message: 'Bạn phải nhập mục này' }),
    owner_phone: z.string({ message: 'Bạn phải nhập mục này' }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      property_feature: [],
      bonus: {
        type: BONUS[0],
      },
    },
  });

  return (
    <div className="w-full rounded-lg min-h-96 bg-white dark:bg-primaryColorDark">
      <div className="px-6 w-full py-4">
        <Typography variant="h2" className="text-lg uppercase font-medium dark:text-white">
          Kho Tài Nguyên
        </Typography>
      </div>
      <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
      <div className="px-6 w-full py-3">
        <Form {...form}>
          <form
            className="flex pt-4 flex-wrap"
            onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
          >
            <div className="flex flex-1 justify-between flex-wrap">
              <div className="flex w-full">
                <div className="flex-1 me-2">
                  <label
                    htmlFor="copy-button"
                    className="inline-block w-full mb-4 text-sm dark:text-white"
                  >
                    Nhân bản tin đăng
                  </label>
                  <div className="w-full">
                    <Button className="rounded-[10px] w-full" type="button" id="copy-button">
                      Chọn tin
                    </Button>
                  </div>
                </div>
                <div className="flex-1 ms-2">
                  <label
                    htmlFor="property_type"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Loại hình
                  </label>
                  <div className="mt-[3px]">
                    <SelectForm<z.infer<typeof FormSchema>>
                      name="property_type"
                      value={form.watch('property_type')}
                      options={PROPERTY_TYPE}
                      placeholder="Tình trạng"
                      className="rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-2">
                <label
                  htmlFor="property_feature"
                  className="inline-block mb-3 text-sm dark:text-white"
                >
                  <RequiredSymbolLabel />
                  Đặc điểm
                </label>
                <div>
                  <SelectForm<z.infer<typeof FormSchema>>
                    name="property_feature"
                    value={form.watch('property_feature')}
                    options={PROPERTY_FEATURE}
                    placeholder="Đặc điểm"
                    className="rounded-[10px]"
                    multiple
                  />
                </div>
              </div>
              <div className="w-full flex mt-2">
                <div className="flex-1 me-2">
                  <label
                    htmlFor="address.city"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Thành phố
                  </label>
                  <div>
                    <SelectForm<z.infer<typeof FormSchema>>
                      name="address.city"
                      value={form.watch('address.city')}
                      options={CITY}
                      placeholder="Chọn thành phố"
                      className="rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="flex-1 ms-2">
                  <label
                    htmlFor="address.district"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Quận huyện
                  </label>
                  <div>
                    <SelectForm<z.infer<typeof FormSchema>>
                      name="address.district"
                      value={form.watch('address.district')}
                      options={DISTRICT}
                      placeholder="Chọn Quận/Huyện"
                      className="rounded-[10px]"
                      disabled={!form.watch('address.city')}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex mt-2">
                <div className="flex-1 me-2">
                  <label
                    htmlFor="address.street"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Đường
                  </label>
                  <div>
                    <SelectForm<z.infer<typeof FormSchema>>
                      name="address.street"
                      value={form.watch('address.street')}
                      options={STREET}
                      placeholder="Chọn Đường"
                      className="rounded-[10px]"
                      disabled={!form.watch('address.district')}
                    />
                  </div>
                </div>
                <div className="flex-1 ms-2">
                  <label
                    htmlFor="address.apartment_number"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Ngõ, hẻm, số nhà, số phòng
                  </label>
                  <div>
                    <InputForm<z.infer<typeof FormSchema>>
                      name="address.apartment_number"
                      value={form.watch('address.apartment_number')}
                      placeholder="Nhập Ngõ, hẻm, số nhà, số phòng"
                      className="rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-2">
                <label htmlFor="project" className="inline-block mb-3 text-sm dark:text-white">
                  Dự án/Khu đô thị/Chung cư
                </label>
                <div>
                  <InputForm<z.infer<typeof FormSchema>>
                    name="project"
                    value={form.watch('project')}
                    placeholder="VD: Vinhomes Ocean Pack"
                    className="rounded-[10px]"
                    disabled={!form.watch('address.district')}
                  />
                </div>
              </div>
              <div className="w-full flex mt-2">
                <div className="flex-1 me-2">
                  <label
                    htmlFor="property_feature"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Thông số nhà
                  </label>
                  <div>
                    <InputForm<z.infer<typeof FormSchema>>
                      name="address.street"
                      value={form.watch('spec')}
                      placeholder="Nhập thông số nhà"
                      className="rounded-[10px]"
                      disabled={!form.watch('property_type')}
                    />
                  </div>
                </div>
                <div className="flex-1 ms-2">
                  <label
                    htmlFor="bonus.value"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Hoa hồng
                  </label>
                  <div className="flex ">
                    <div className="flex-1">
                      <InputForm<z.infer<typeof FormSchema>>
                        type="number"
                        name="bonus.value"
                        value={form.watch('bonus.value')}
                        className="rounded-[10px] rounded-e-none "
                        min={1}
                      />
                    </div>
                    <div className="min-w-24">
                      <SelectForm<z.infer<typeof FormSchema>>
                        name="bonus.type"
                        value={form.watch('bonus.type')}
                        options={BONUS}
                        className="rounded-[10px] rounded-s-none ring-e-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex mt-2">
                <div className="flex-1 me-2">
                  <label
                    htmlFor="property_feature"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Loại hợp đồng
                  </label>
                  <div>
                    <SelectForm<z.infer<typeof FormSchema>>
                      name="address.street"
                      value={form.watch('address.street')}
                      options={STREET}
                      placeholder="Chọn Đường"
                      className="rounded-[10px]"
                      disabled={!form.watch('address.district')}
                    />
                  </div>
                </div>
                <div className="flex-1 ms-2">
                  <label
                    htmlFor="bonus_referral"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    Cầu đối tác
                  </label>
                  <div className="flex">
                    <div className="flex-1">
                      <InputForm<z.infer<typeof FormSchema>>
                        type="number"
                        name="bonus_referral"
                        value={form.watch('bonus_referral')}
                        placeholder="Không có thì bỏ trống"
                        className="rounded-[10px] rounded-e-none"
                      />
                    </div>
                    <div className="border-s-0 border w-10 text-center leading-9 rounded-[10px] rounded-s-none">
                      %
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-2">
                <label htmlFor="project" className="inline-block mb-3 text-sm dark:text-white">
                  <RequiredSymbolLabel />
                  Tiêu đề (Tự động)
                </label>
                <div className="border-[1px] border-black/5 dark:border-white/10 px-2 py-3">
                  Đường A3 200 10 500 10 tỷ Quận 12 Hồ Chí Minh HĐ TK Trọng Sa Đoạ HANOICODE,
                  0389619050, nguồn TK Trọng Sa Đoạ, 9 đến 15, #ĐC1
                  <br /> Mô tả: #duonga3, #quan129den15, #tktrongsadoacode, #hanoicode, #duan
                </div>
              </div>
              <div className="w-full mt-2">
                <label htmlFor="project" className="inline-block mb-3 text-sm dark:text-white">
                  <RequiredSymbolLabel />
                  Nội dung
                </label>
                <div className="">
                  <TextareaForm<z.infer<typeof FormSchema>>
                    name="content"
                    value={form.watch('content')}
                    placeholder="Nhập nội dung"
                    className="rounded-[10px]"
                    minRows={10}
                  />
                </div>
              </div>
              <div className="w-full flex mt-2">
                <div className="flex-1 me-2">
                  <label
                    htmlFor="legal_status"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Pháp lý
                  </label>
                  <div>
                    <SelectForm<z.infer<typeof FormSchema>>
                      name="legal_status"
                      value={form.watch('legal_status')}
                      options={LEGAL_STATUS}
                      placeholder="Chọn pháp lý"
                      className="rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="flex-1 mx-2">
                  <label
                    htmlFor="property_feature"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Serial sổ
                  </label>
                  <div>
                    <InputForm<z.infer<typeof FormSchema>>
                      name="number_certificate"
                      value={form.watch('number_certificate')}
                      placeholder="Được công ty bảo mật"
                      className="rounded-[10px]"
                      disabled={
                        !form.watch('legal_status') || form.watch('legal_status').value !== '1'
                      }
                    />
                  </div>
                </div>
                <div className="flex-1 mx-2">
                  <label
                    htmlFor="owner_phone"
                    className="inline-block mb-3 text-sm dark:text-white"
                  >
                    <RequiredSymbolLabel />
                    Số điện thoại chủ nhà
                  </label>
                  <div>
                    <InputForm<z.infer<typeof FormSchema>>
                      name="owner_phone"
                      type="phone"
                      value={form.watch('owner_phone')}
                      placeholder="Được công ty bảo mật"
                      className="rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="w-full mt-3 justify-center flex">
              <Button type="submit" className="w-72">
                Đăng Tin
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default WarehouseForm;
