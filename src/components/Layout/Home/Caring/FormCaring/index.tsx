import { Select } from '@/components/DataEntry';
import { Button, Typography } from '@/components/General';
import { useState } from 'react';
import {
  DISTRICT_OPTIONS,
  FEATURES_OPTIONS,
  IPlaceOptions,
  PLACE_OPTIONS,
  RANGE_PRICE_OPTIONS,
} from './select';
import { Transition } from '@headlessui/react';

type Props = {
  isOpenCollapse: boolean;
  setIsOpenCollapse: (value: boolean) => void;
};

const FormCaring = (props: Props) => {
  const { isOpenCollapse, setIsOpenCollapse } = props;
  const [selected, setSelected] = useState<IPlaceOptions[]>([]);
  const [districtSelected, setDistrictSelected] = useState<IPlaceOptions[]>([]);
  const [rangePriceSelected, setRangePriceSelected] = useState<IPlaceOptions[]>([]);
  const [featuresSelected, setFeaturesSelected] = useState<IPlaceOptions[]>([]);
  console.log('selected: ', selected);
  console.log('districtSelected: ', districtSelected);
  console.log('rangePriceSelected: ', rangePriceSelected);
  console.log('featuresSelected: ', featuresSelected);
  return (
    <>
      <Transition
        appear
        show={isOpenCollapse}
        enter="transition-opacity"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div>
          <label className="">
            <span className="text-errorLight mr-1 ">*</span>Chọn một khu vực
          </label>
          <Select
            placeholder="Chọn tỉnh/thành phố"
            options={PLACE_OPTIONS}
            className="mt-2"
            value={selected}
            //@ts-ignore
            onChange={setSelected}
            multiple
          ></Select>

          {selected.length === 0 && (
            <p className="my-2 text-errorLight mr-1 text-[14px]">Yêu cầu nhập trường này</p>
          )}

          <Select
            placeholder="Quận/Huyện"
            options={DISTRICT_OPTIONS}
            value={districtSelected}
            className={`my-4 ${selected.length === 0 ? 'bg-gray-300' : ''} `}
            disabled={selected.length === 0}
            //@ts-ignore
            onChange={setDistrictSelected}
            multiple
          ></Select>

          {districtSelected.length === 0 && (
            <p className="my-2 text-errorLight mr-1 text-[14px]">Yêu cầu nhập trường này</p>
          )}

          <label>
            <span className="text-errorLight mr-1 ">*</span>Chọn phân khúc
          </label>

          <Select
            placeholder="Khoảng giá"
            options={RANGE_PRICE_OPTIONS}
            value={rangePriceSelected}
            className="my-4"
            //@ts-ignore
            onChange={setRangePriceSelected}
            multiple
          ></Select>

          {rangePriceSelected.length === 0 && (
            <p className="my-2 text-errorLight mr-1 text-[14px]">Yêu cầu nhập trường này</p>
          )}

          <label>Chọn đặc điểm</label>
          <Select
            placeholder="Bỏ trống đồng nghĩa với chọn tất cả"
            options={FEATURES_OPTIONS}
            value={featuresSelected}
            className="my-4"
            //@ts-ignore
            onChange={setFeaturesSelected}
            multiple
          ></Select>

          <div className="flex justify-end gap-2">
            <Button className="w-[98px]">Cập nhật</Button>
            <Button
              className="w-[72px] bg-primaryColorLight 
         hover:text-primaryButtonHoverLight
         hover:bg-primaryColorLight text-textPrimaryLight border border-[#28282] hover:border-primaryButtonHoverLight
         dark:hover:primaryButtonHoverDark
         "
              onClick={() => setIsOpenCollapse(false)}
            >
              Đóng
            </Button>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default FormCaring;
