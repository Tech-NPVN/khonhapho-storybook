import { IOption, Input, Select } from '@/components/DataEntry';
import {
  Button,
  DoubleArrowDownIcon,
  DoubleArrowUpIcon,
  ResetIcon,
  Typography,
} from '@/components/General';
import {
  CITY,
  DISTRICT,
  ITEM_STATUS,
  PRICE_ABOUT,
  PROPERTY_FEATURE,
  PROPERTY_TYPE,
  STREET,
  UNIT,
} from '@/pages/Dashboard/Warehouse/const';
import { useState } from 'react';

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
  user_name?: IOption;
}

const OPTIONS = [
  { value: 'Tin nổi bật', label: 'Tin nổi bật' },
  { value: 'Tin mới nhất', label: 'Tin mới nhất' },
  { value: 'Tin cũ nhất', label: 'Tin cũ nhất' },
  { value: 'Giá cao nhất', label: 'Giá cao nhất' },
  { value: 'Giá thấp nhất', label: 'Giá thấp nhất' },
] as IOption[];

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

function FilterStocksOwn({ onChange }: Props) {
  const [selected, setSelected] = useState<IOption>();
  const [filter, setFilter] = useState<IFilter>({
    price_min,
    price_max,
  });
  const [showMore, setShowMore] = useState(false);
  const handleChange = (data: IFilter) => {
    setFilter({ ...data });
    const dataClone = { ...data };
    if (!data.price_min?.value || data.price_min?.value < 0) delete dataClone.price_min;
    if (!data.price_max?.value || data.price_max?.value < 0) delete dataClone.price_max;
    onChange?.(dataClone);
  };
  return (
    <>
      <div className="flex flex-wrap w-full gap-1">
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
              handleChange({ ...filter, district: value as IOption });
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

        {showMore && (
          <>
            <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
              <Select placeholder="Dự án/Chung cư"></Select>
            </div>
          </>
        )}

        <div className="w-[calc(50%_-_4px)] md:w-[calc(33.33%_-_4px)] lg:w-[calc(25%_-_4px)] xl:w-[calc(20%_-_4px)]">
          <Button
            className="w-full"
            variant={'outline'}
            onClick={() => {
              setFilter({});
              handleChange({});
            }}
          >
            <ResetIcon />
            Đặt lại
          </Button>
        </div>
        <div className="flex justify-end w-full">
          <Button
            startIcon={showMore ? <DoubleArrowUpIcon /> : <DoubleArrowDownIcon />}
            variant="outline"
            className="relative h-8 px-4 font-normal border-none text-secondaryColorDark dark:text-secondaryColorLightD2"
            onClick={() => {
              setShowMore((prev) => !prev);
            }}
          >
            {showMore ? 'Thu gọn' : 'Mở rộng'}
            <div className="flex items-center justify-center">
              <span className="absolute inline-flex w-2 h-2 top-1 right-2.5 rounded-full opacity-75 animate-ping bg-successLight dark:bg-successDark"></span>
              <span className="absolute w-2 h-2 rounded-full top-1 right-2.5 bg-successLight dark:bg-successDark"></span>
            </div>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <Typography
          variant="span"
          className="text-sm font-semibold text-secondaryColorDark dark:text-secondaryColorLight"
        >
          Hiện đang có 1 tin Chờ duyệt
        </Typography>
        <div className="lg:w-[200px] w-full">
          <Select
            options={OPTIONS}
            value={selected ?? OPTIONS[0]}
            onChange={(value) => {
              setSelected && setSelected(value as IOption);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default FilterStocksOwn;
