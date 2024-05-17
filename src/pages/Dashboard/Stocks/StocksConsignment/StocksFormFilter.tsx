import { Form, Input, IOption, SelectForm } from '@/components/DataEntry';
import { Button, ResetIcon, SearchIcon } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const PROPERTY_TYPE = [
  { label: 'Nhà mặt phố', value: '1' },
  { label: 'Nhà riêng', value: '2' },
  { label: 'Nhà biệt thự - liền kề', value: '3' },
  { label: 'Đất thổ cư - đất ở', value: '4' },
  { label: 'Khu nghỉ dưỡng', value: '5' },
  { label: 'Căn hộ, chung cư', value: '6' },
  { label: 'Khách sạn', value: '7' },
] as IOption[];

const CITY = [
  { label: 'Hà Nội', value: '1' },
  { label: 'Đà Nẵng', value: '2' },
  { label: 'Hồ Chí Minh', value: '3' },
  { label: 'Bắc Kạn', value: '4' },
  { label: 'Bạc Liêu', value: '5' },
  { label: 'An Giang', value: '6' },
  { label: 'Thái Bình', value: '7' },
  { label: 'Bến Tre', value: '8' },
  { label: 'Bà Rịa - Vũng Tàu', value: '9' },
] as IOption[];

const DISTRICT = [
  { label: 'Bắc Từ Liêm', value: '1' },
  { label: 'Cầu Giấy', value: '2' },
  { label: 'Hồ Hoàn Kiếm', value: '3' },
] as IOption[];

const PRICE = [
  { label: 'Dưới 3 tỷ', value: 'Dưới 3 tỷ' },
  { label: 'Từ 3 tỷ đến 6 tỷ', value: 'Từ 3 tỷ đến 6 tỷ' },
  { label: 'Từ 6 tỷ đến 9 tỷ', value: 'Từ 6 tỷ đến 9 tỷ' },
  { label: 'Từ 9 tỷ đến 15 tỷ', value: 'Từ 9 tỷ đến 15 tỷ' },
  { label: 'Từ 15 tỷ đến 25 tỷ', value: 'Từ 15 tỷ đến 25 tỷ' },
  { label: 'Từ 25 tỷ đến 35 tỷ', value: 'Từ 25 tỷ đến 35 tỷ' },
  { label: 'Từ 35 tỷ đến 50 tỷ', value: 'Từ 35 tỷ đến 50 tỷ' },
] as IOption[];

const UNIT = [
  { label: 'Dưới 30 m2', value: 'Dưới 30 m2' },
  { label: '30 - 50 m2', value: '30 - 50 m2' },
  { label: '50 - 80 m2', value: '50 - 80 m2' },
  { label: '80 - 100 m2', value: '80 - 100 m2' },
  { label: '100 - 150 m2', value: '100 - 150 m2' },
  { label: '150 - 200 m2', value: '150 - 200 m2' },
  { label: 'Trên 200 m2', value: 'Trên 200 m2' },
];

const formOption = {
  value: z.string(),
  label: z.string(),
};

const ConsignmentFormSchema = z.object({
  property_type: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
  district: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
  city: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
  price_range: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
  area_range: z.object(formOption, { message: 'Bạn phải mục chọn này' }),
});

export const StocksFormFilter = () => {
  const formConsignment = useForm<z.infer<typeof ConsignmentFormSchema>>({
    resolver: zodResolver(ConsignmentFormSchema),
    defaultValues: {},
  });
  return (
    <div className="mt-5">
      <Form {...formConsignment}>
        <form
          onSubmit={formConsignment.handleSubmit((data) => console.log(data))}
          className="flex flex-col gap-5"
        >
          <div className="flex w-full">
            <Input
              className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark "
              placeholder="Nhập nội dung tìm kiếm"
            />
            <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
              <SearchIcon color="white" />
            </button>
          </div>
          <div>
            <SelectForm<z.infer<typeof ConsignmentFormSchema>>
              name="property_type"
              value={formConsignment.watch('property_type')}
              options={PROPERTY_TYPE}
              placeholder="Loại hình"
              className="rounded-[10.5px]"
            />
          </div>
          <div>
            <SelectForm<z.infer<typeof ConsignmentFormSchema>>
              name="city"
              value={formConsignment.watch('city')}
              options={CITY}
              placeholder="Thành phố"
              className="rounded-[10.5px]"
            />
          </div>
          <div>
            <SelectForm<z.infer<typeof ConsignmentFormSchema>>
              name="district"
              value={formConsignment.watch('district')}
              options={DISTRICT}
              disabled={!formConsignment.watch('city')}
              placeholder="Quận huyện"
              className="rounded-[10.5px]"
            />
          </div>
          <div>
            <SelectForm<z.infer<typeof ConsignmentFormSchema>>
              name="price_range"
              value={formConsignment.watch('price_range')}
              options={PRICE}
              placeholder="Khoảng giá"
              className="rounded-[10.5px]"
            />
          </div>
          <div>
            <SelectForm<z.infer<typeof ConsignmentFormSchema>>
              name="area_range"
              value={formConsignment.watch('area_range')}
              options={UNIT}
              placeholder="Khoảng diện tích"
              className="rounded-[10.5px]"
            />
          </div>
          <Button
            variant="outline"
            startIcon={<ResetIcon />}
            className="w-full text-primaryColorDark border-dividerLight"
            onClick={() => {
              formConsignment.reset();
            }}
            type="button"
          >
            Đặt lại
          </Button>
        </form>
      </Form>
    </div>
  );
};
