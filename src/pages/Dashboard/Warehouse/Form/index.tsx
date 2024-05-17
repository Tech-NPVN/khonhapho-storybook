import { Form, Input, InputForm, RequiredSymbolLabel, SelectForm } from '@/components/DataEntry';
import { TextareaForm } from '@/components/DataEntry/Textarea';
import { Upload } from '@/components/DataEntry/Upload';
import { Modal } from '@/components/Feedback';
import { Button, SearchIcon, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  BONUS,
  CITY,
  DISTRICT,
  LEGAL_STATUS,
  PROPERTY_FEATURE,
  PROPERTY_TYPE,
  STREET,
} from '../const';

const formOption = {
  value: z.string(),
  label: z.string(),
  disable: z.boolean().optional(),
};
function WarehouseForm() {
  const [isShowSelect, setIsShowSelect] = useState(false);
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
    bonus_referral: z.number({ message: 'Bạn phải nhập mục này' }).optional(),
    title: z.string({ message: 'Bạn phải nhập mục này' }),
    content: z.string({ message: 'Bạn phải nhập mục này' }),
    legal_status: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
    number_certificate: z.string({ message: 'Bạn phải nhập mục này' }).optional(),
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
    <div className="w-full  rounded-lg min-h-96 bg-white dark:bg-primaryColorDark">
      <Modal
        className="w-[90vw] md:w-[700px]"
        open={isShowSelect}
        isDivided={false}
        title="Tin của bạn"
        onCancel={() => {
          setIsShowSelect(false);
        }}
        children={
          <div className="w-full mt-5 min-h-[300px]">
            <div className="w-full flex justify-end">
              <div className="flex">
                <div className="w-full flex-1 sm:min-w-[270px]">
                  <Input
                    className=" rounded-md rounded-e-none"
                    placeholder="Nhập đ/c, SĐT, seri sổ"
                  />
                </div>
                <button className="bg-green-600 text-white rounded-e-md w-12 flex justify-center items-center">
                  <SearchIcon className="fill-[white]" color="white" />
                </button>
              </div>
            </div>
          </div>
        }
      />
      <div className="px-6 w-full lg:w-[calc(100%_-_32px)] py-4">
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
            <div className="flex lg:flex-1 w-full flex-none justify-between flex-wrap me-2">
              <div className="flex w-full flex-wrap">
                <div className="sm:flex-1 w-full me-0 sm:me-2">
                  <label
                    htmlFor="copy-button"
                    className=" w-full mb-4 text-sm dark:text-white line-clamp-1"
                  >
                    Nhân bản tin đăng
                  </label>
                  <div className="w-full">
                    <Button
                      className="rounded-[8px] w-full"
                      type="button"
                      id="copy-button"
                      onClick={() => {
                        setIsShowSelect(true);
                      }}
                    >
                      Chọn tin
                    </Button>
                  </div>
                </div>
                <div className="sm:flex-1 w-full ms:0 sm:ms-2 mt-4 sm:mt-0">
                  <label
                    htmlFor="property_type"
                    className="mb-4 text-sm dark:text-white line-clamp-1"
                  >
                    <RequiredSymbolLabel />
                    Loại hình
                  </label>
                  <div className="">
                    <SelectForm<z.infer<typeof FormSchema>>
                      name="property_type"
                      value={form.watch('property_type')}
                      options={PROPERTY_TYPE}
                      placeholder="Tình trạng"
                      className="rounded-[10.5px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor="property_feature"
                  className="mb-3 text-sm dark:text-white line-clamp-1"
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
                    className="rounded-[10.5px]"
                    multiple
                  />
                </div>
              </div>
              <div className="w-full flex mt-4 flex-wrap sm:flex-nowrap">
                <div className="w-full sm:flex-1 me-0 sm:me-2">
                  <label
                    htmlFor="address.city"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
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
                      className="rounded-[10.5px]"
                    />
                  </div>
                </div>
                <div className="flex-1 ms-0 mt-4 sm:mt-0 sm:ms-2">
                  <label
                    htmlFor="address.district"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
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
                      className="rounded-[10.5px]"
                      disabled={!form.watch('address.city')}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex mt-4 flex-wrap sm:flex-nowrap">
                <div className="w-full sm:flex-1 me-0 sm:me-2">
                  <label
                    htmlFor="address.street"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
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
                <div className="flex-1 mt-4 sm:mt-0 sm:ms-2">
                  <label
                    htmlFor="address.apartment_number"
                    className=" mb-4 text-sm dark:text-white line-clamp-1"
                  >
                    <RequiredSymbolLabel />
                    Ngõ, hẻm, số nhà, số phòng
                  </label>
                  <div>
                    <InputForm<z.infer<typeof FormSchema>>
                      name="address.apartment_number"
                      value={form.watch('address.apartment_number')}
                      placeholder="Nhập Ngõ, hẻm, số nhà, số phòng"
                      className="rounded-[6px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-4">
                <label htmlFor="project" className=" mb-3 text-sm dark:text-white line-clamp-1">
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
              <div className="w-full flex mt-4 flex-wrap">
                <div className="w-full sm:flex-1 mt-0 sm:me-2">
                  <label
                    htmlFor="property_feature"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
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
                <div className="flex-1 mt-4 sm:mt-0 sm:ms-2">
                  <label
                    htmlFor="bonus.value"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
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
                        onChange={(e) => {
                          form.setValue('bonus.value', +e.target.value);
                          form.clearErrors('bonus.value');
                        }}
                        className="rounded-[10px] rounded-e-none "
                        min={1}
                      />
                    </div>
                    <div className="min-w-24">
                      <SelectForm<z.infer<typeof FormSchema>>
                        name="bonus.type"
                        value={form.watch('bonus.type')}
                        options={BONUS}
                        className="rounded-[10.5px] rounded-s-none ring-e-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex mt-2 flex-wrap">
                <div className="w-full sm:flex-1 sm:me-2">
                  <label
                    htmlFor="property_feature"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
                  >
                    <RequiredSymbolLabel />
                    Loại hợp đồng
                  </label>
                  <div>
                    <SelectForm<z.infer<typeof FormSchema>>
                      name="address.street"
                      value={form.watch('address.street')}
                      options={STREET}
                      placeholder="Loại hợp đồng"
                      className="rounded-[10.5px]"
                      disabled={!form.watch('address.district')}
                    />
                  </div>
                </div>
                <div className="flex-1 mt-4 sm:mt-0 sm:ms-2">
                  <label
                    htmlFor="bonus_referral"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
                  >
                    Cầu đối tác
                  </label>
                  <div className="flex">
                    <div className="flex-1">
                      <InputForm<z.infer<typeof FormSchema>>
                        type="number"
                        name="bonus_referral"
                        onChange={(e) => form.setValue('bonus_referral', +e.target.value)}
                        placeholder="Không có thì bỏ trống"
                        className="rounded-[10px] rounded-e-none"
                      />
                    </div>
                    <div className="border-s-0 border w-10 text-center leading-9 rounded-[10px] rounded-s-none dark:border-white/30 dark:text-white">
                      %
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-4">
                <label htmlFor="project" className=" mb-3 text-sm dark:text-white line-clamp-1">
                  <RequiredSymbolLabel />
                  Tiêu đề (Tự động)
                </label>
                <div className="border-[1px] border-black/5 rounded-[10px] dark:border-white/30 dark:text-white px-2 py-3">
                  Đường A3 200 10 500 10 tỷ Quận 12 Hồ Chí Minh HĐ TK Trọng Sa Đoạ HANOICODE,
                  0389619050, nguồn TK Trọng Sa Đoạ, 9 đến 15, #ĐC1
                  <br /> Mô tả: #duonga3, #quan129den15, #tktrongsadoacode, #hanoicode, #duan
                </div>
              </div>
              <div className="w-full mt-4">
                <label htmlFor="project" className=" mb-3 text-sm dark:text-white line-clamp-1">
                  <RequiredSymbolLabel />
                  Nội dung
                </label>
                <div>
                  <TextareaForm<z.infer<typeof FormSchema>>
                    name="content"
                    value={form.watch('content')}
                    placeholder="Nhập nội dung"
                    className="rounded-[10px]"
                    minRows={10}
                  />
                </div>
              </div>
              <div className="w-full flex mt-2 flex-wrap">
                <div className="w-full sm:flex-1 me-0 sm:me-2">
                  <label
                    htmlFor="legal_status"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
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
                      className="rounded-[10.5px]"
                    />
                  </div>
                </div>
                <div className="w-full sm:flex-1 mt-4 sm:mt-0 mx-0 sm:mx-2">
                  <label
                    htmlFor="property_feature"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
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
                <div className="w-full sm:flex-1 mt-4 sm:mt-0 ms-0 sm:ms-2">
                  <label
                    htmlFor="owner_phone"
                    className=" mb-3 text-sm dark:text-white line-clamp-1"
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
            <div className="flex-1 mt-5 lg:mt-0 flex ms-2 flex-wrap items-start content-start">
              <div className="w-full">
                <label className="w-full text-sm line-clamp-1" htmlFor="">
                  <RequiredSymbolLabel />
                  Ảnh (tối đa 12 ảnh)
                </label>
                <div className=" mt-3">
                  <Upload
                    className="!w-[100px] !h-[100px] dark:bg-white/10"
                    previewImage={[]}
                    setPreviewImage={() => {}}
                  />
                </div>
              </div>
              <div className="w-full mt-3">
                <label className="w-full text-sm line-clamp-1" htmlFor="">
                  <RequiredSymbolLabel />
                  Video (tối đa 4 video và không vượt quá 50MB/video):
                </label>
                <div className=" mt-3">
                  <Upload
                    className="!w-[100px] !h-[100px] dark:bg-white/10"
                    previewImage={[]}
                    setPreviewImage={() => {}}
                  />
                </div>
              </div>
              <div className="w-full mt-3">
                <label className="w-full text-sm line-clamp-1" htmlFor="">
                  <RequiredSymbolLabel />
                  Ảnh sổ đỏ pháp lý, hợp đồng trích thường (tối đa 20 ảnh)
                </label>
                <div className=" mt-3">
                  <Upload
                    className="!w-[100px] !h-[100px] dark:bg-white/10"
                    previewImage={[]}
                    setPreviewImage={() => {}}
                  />
                </div>
              </div>

              <div className="w-full mt-3">
                <label className="w-full text-sm line-clamp-1" htmlFor="">
                  <RequiredSymbolLabel />
                  Audio ghi âm pháp lý, hợp đồng trích thường (tối đa 4 audio):
                </label>
                <div className=" mt-3">
                  <Upload
                    className="!w-[100px] !h-[100px] dark:bg-white/10"
                    previewImage={[]}
                    setPreviewImage={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-10 mb-5 justify-center flex ">
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
