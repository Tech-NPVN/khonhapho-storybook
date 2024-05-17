import { SelectForm, Form } from '@/components/DataEntry';
import { Button } from '@/components/General';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  DISTRICT_OPTIONS,
  FEATURES_OPTIONS,
  IPlaceOptions,
  PLACE_OPTIONS,
  RANGE_PRICE_OPTIONS,
} from './select';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

type Props = {
  isOpenCollapse: boolean;
  setIsOpenCollapse: (value: boolean) => void;
};

const FormCaring = (props: Props) => {
  const { isOpenCollapse, setIsOpenCollapse } = props;

  const formOption = {
    value: z.string(),
    label: z.string(),
    disable: z.boolean().optional(),
  };

  const CaringFormSchema = z.object({
    city: z.array(z.object(formOption)).refine((value) => value.length > 0, {
      message: 'Yêu cầu nhập trường này',
    }),
    district: z.array(z.object(formOption)).refine((value) => value.length > 0, {
      message: 'Yêu cầu nhập trường này',
    }),
    range_price: z.array(z.object(formOption)).refine((value) => value.length > 0, {
      message: 'Yêu cầu nhập trường này',
    }),
    featuresSelected: z.array(z.object(formOption)),
  });

  const form = useForm<z.infer<typeof CaringFormSchema>>({
    resolver: zodResolver(CaringFormSchema),
    defaultValues: {
      city: [],
      district: [],
      range_price: [],
      featuresSelected: [],
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}>
          <div>
            <SelectForm<z.infer<typeof CaringFormSchema>>
              name="city"
              value={form.watch('city')}
              options={PLACE_OPTIONS}
              placeholder="Tỉnh/Thành phố"
              label="Chọn khu vực"
              required
              multiple
            />
          </div>

          <div className="my-4">
            <SelectForm<z.infer<typeof CaringFormSchema>>
              name="district"
              value={form.watch('district')}
              options={DISTRICT_OPTIONS}
              disabled={form.watch('city').length === 0}
              className={`my-4 ${form.watch('city').length === 0 ? 'bg-gray-300' : ''} `}
              placeholder="Quận/Huyện"
              required
              multiple
            />
          </div>

          <div className="my-4">
            <SelectForm<z.infer<typeof CaringFormSchema>>
              name="range_price"
              value={form.watch('range_price')}
              options={RANGE_PRICE_OPTIONS}
              placeholder="Khoảng giá"
              label="Chọn phân khúc"
              required
              multiple
            />
          </div>

          <div>
            <SelectForm<z.infer<typeof CaringFormSchema>>
              name="featuresSelected"
              value={form.watch('featuresSelected')}
              placeholder="Bỏ trống đồng nghĩa với chọn tất cả"
              options={FEATURES_OPTIONS}
              label="Chọn đặc điểm"
              multiple
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button className="w-[98px]" type="submit">
              Cập nhật
            </Button>
            <Button
              className="w-[72px] bg-primaryColorLight 
         hover:text-primaryButtonHoverLight
         hover:bg-primaryColorLight text-textPrimaryLight border border-[#28282] hover:border-primaryButtonHoverLight
         dark:hover:primaryButtonHoverDark"
              onClick={() => setIsOpenCollapse(false)}
            >
              Đóng
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default FormCaring;
