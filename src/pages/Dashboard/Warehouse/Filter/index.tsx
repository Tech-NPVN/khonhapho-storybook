import { IOption, Input, Select } from '@/components/DataEntry';
import { Button, ResetIcon } from '@/components/General';
import { useState } from 'react';
import {
  CITY,
  DISTRICT,
  GROUPS,
  ITEM_STATUS,
  PRICE_ABOUT,
  PROPERTY_FEATURE,
  PROPERTY_TYPE,
  STREET,
  UNIT,
} from '../const';
interface Props {
  onChange: (any: object) => void;
}
interface IPrice {
  value: number;
  label?: string;
  disabled?: boolean;
  unit?: IOption;
}
interface IFilter {
  status?: IOption;
  price_min?: IPrice;
  price_max?: IPrice;
  property_type?: IOption;
  street?: IOption;
  district?: IOption;
  city?: IOption;
  price_about?: IOption;
  property_feature?: IOption[];
  branch?: IOption;
  group?: IOption;
  user_name?: string;
}
const price_min = {
  label: 'Giá tối thiểu',
  value: -1,
  unit: UNIT[0],
} as IPrice;
const price_max = {
  label: 'Giá tối thiểu',
  value: -1,
  unit: UNIT[0],
} as IPrice;
function WarehouseFilter({ onChange }: Props) {
  const [filter, setFilter] = useState<IFilter>({
    price_min,
    price_max,
  });
  const handleChange = (data: IFilter) => {
    setFilter({ ...data });
    const dataClone = { ...data };
    if (!data.price_min?.value || data.price_min?.value < 0) delete dataClone.price_min;
    if (!data.price_max?.value || data.price_max?.value < 0) delete dataClone.price_max;
    onChange?.(dataClone);
  };
  return (
    <div className="w-full flex flex-wrap gap-1">
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select
          placeholder="Hiện trạng"
          options={[{ value: 'all', label: 'Tất cả' }, ...ITEM_STATUS]}
          value={filter?.status as IOption}
          onChange={(value) => {
            handleChange({ ...filter, status: value as IOption });
          }}
        ></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select
          placeholder="Loại hình"
          options={[{ value: 'all', label: 'Tất cả' }, ...PROPERTY_TYPE]}
          value={filter?.property_type as IOption}
          onChange={(value) => {
            handleChange({ ...filter, property_type: value as IOption });
          }}
        ></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select
          placeholder="Tỉnh/Thành phố"
          options={CITY}
          value={filter?.city as IOption}
          onChange={(value) => {
            handleChange({ ...filter, city: value as IOption });
          }}
        ></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select
          placeholder="Quận/Huyện"
          disabled={!filter.city}
          options={DISTRICT}
          value={filter?.district as IOption}
          onChange={(value) => {
            handleChange({ ...filter, city: value as IOption });
          }}
        ></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select
          placeholder="Đường/Phố"
          disabled={!filter.district}
          options={STREET}
          value={filter?.street as IOption}
          onChange={(value) => {
            setFilter({ ...filter, street: value as IOption });
          }}
        ></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)] flex">
        <Input
          className="rounded-md rounded-e-none"
          placeholder="Giá tối thiểu"
          type="number"
          min={0}
          onChange={(e) => {
            handleChange({
              ...filter,
              price_min: {
                ...filter.price_min,
                value: +e.target.value,
              },
            });
          }}
        />
        <div className="w-[120px]">
          <Select
            className="rounded-s-none "
            options={UNIT}
            value={filter.price_min?.unit ?? UNIT[0]}
            onChange={(value) => {
              if (filter.price_min?.value !== -1)
                handleChange({
                  ...filter,
                  price_min: {
                    ...filter.price_min,
                    unit: value as IOption,
                  } as IPrice,
                });
              else
                setFilter((prev) => ({
                  ...prev,
                  price_min: {
                    ...prev.price_min,
                    unit: value as IOption,
                  } as IPrice,
                }));
            }}
          ></Select>
        </div>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)] flex">
        <Input
          className="rounded-md rounded-e-none"
          placeholder="Giá tối đa"
          type="number"
          min={0}
          onChange={(e) => {
            handleChange({
              ...filter,
              price_min: {
                ...filter.price_min,
                value: +e.target.value,
              },
            });
          }}
        />
        <div className="w-[120px]">
          <Select
            className="rounded-s-none "
            options={UNIT}
            value={filter.price_min?.unit ?? UNIT[0]}
            onChange={(value) => {
              if (filter.price_min?.value !== -1)
                handleChange({
                  ...filter,
                  price_min: {
                    ...filter.price_min,
                    unit: value as IOption,
                  } as IPrice,
                });
              else
                setFilter((prev) => ({
                  ...prev,
                  price_min: {
                    ...prev.price_min,
                    unit: value as IOption,
                  } as IPrice,
                }));
            }}
          ></Select>
        </div>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select
          placeholder="Khoảng giá"
          options={PRICE_ABOUT}
          onChange={(value) => {
            handleChange({
              ...filter,
              price_about: value as IOption,
            });
          }}
        ></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select
          placeholder="Đặc điểm BĐS"
          options={PROPERTY_FEATURE}
          value={filter.property_feature}
          onChange={(value) => {
            handleChange({
              ...filter,
              property_feature: value as IOption[],
            });
          }}
          limit={1}
          multiple
        ></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select placeholder="Dự án/Chung cư"></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select
          placeholder="Chi nhánh"
          options={CITY}
          onChange={(value) => {
            handleChange({
              ...filter,
              branch: value as IOption,
            });
          }}
        ></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Select
          placeholder="Phòng ban"
          options={GROUPS}
          onChange={(value) => {
            handleChange({
              ...filter,
              group: value as IOption,
            });
          }}
        ></Select>
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Input
          placeholder="Tên tài khoản"
          className="rounded-lg"
          value={filter.user_name ?? ''}
          onChange={(e) => {
            handleChange({
              ...filter,
              user_name: e.target.value,
            });
          }}
        />
      </div>
      <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
        <Button
          className="w-full"
          onClick={() => {
            setFilter({});
            handleChange({});
          }}
        >
          <ResetIcon />
          Đặt lại
        </Button>
      </div>
    </div>
  );
}

export default WarehouseFilter;
