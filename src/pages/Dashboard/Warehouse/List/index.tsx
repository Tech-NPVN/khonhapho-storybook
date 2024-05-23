import { IOption, Select, Switch } from '@/components/DataEntry';
import {
  ArrowDownArrowUpIcon,
  Button,
  ClockIcon,
  EyeOffIcon,
  MessageIcon,
  NotificationIcon,
  PinIcon,
  ReportIcon,
} from '@/components/General';
import { useOutsideClickClose } from '@/hooks/useOutsideClickClose';
import {
  ITableHeader,
  LIST_POST_DEMO,
  SORT_OPTIONS,
  STATUS_LABEL,
  TABLE_HEADER_LIST,
} from '@/pages/Dashboard/Warehouse/const';
import { useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx';
import WarehouseFilter from '../Filter';
import { dateToStringDate } from '../helpers';
import { ViewButton } from './ViewButton';

export const StatusTag = ({ status }: { status: keyof typeof STATUS_LABEL }) => {
  switch (status) {
    case 1:
      return (
        <div className="border-[1px] border-[#1c7f18] bg-[#1c7f18] text-white text-center rounded-md text-[12px] px-1">
          {STATUS_LABEL[status]?.label}
        </div>
      );
    case 2:
      return (
        <div className="border-[1px] border-[#ffbb96] bg-[#fff2e8] text-[#d4380d] text-center rounded-md text-[12px] px-1">
          {STATUS_LABEL[status]?.label}
        </div>
      );
    case 3:
      return (
        <div className="border-[1px] border-[#d4380d] bg-[#fff2e8] text-[#d4380d] text-center rounded-md text-[12px] px-1">
          {STATUS_LABEL[status]?.label}
        </div>
      );
    case 4:
      return (
        <div className="border-[1px] border-[#FF0000] bg-[#FF0000] text-white text-center rounded-md text-[12px] px-1">
          {STATUS_LABEL[status]?.label}
        </div>
      );
    case 5:
      return (
        <div className="border-[1px] border-[#FF0000] bg-[#FF0000] text-white text-center rounded-md text-[12px] px-1">
          {STATUS_LABEL[status]?.label}
        </div>
      );
    case 6:
      return (
        <div className="border-[1px] border-[#ff5500] bg-[#ff5500] text-white text-center rounded-md text-[12px] px-1">
          {STATUS_LABEL[status]?.label}
        </div>
      );
    default:
      return (
        <div className="border-[1px] border-dividerDark bg-black/20 text-center rounded-md text-[12px] px-1">
          {STATUS_LABEL[status]?.label}
        </div>
      );
  }
};
function WarehouseList() {
  const [tableHeader, setTableHeader] = useState<ITableHeader>({});
  const [showModalCustomViewRow, setShowModalCustomViewRow] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClickClose(modalRef, () => {
    setShowModalCustomViewRow(false);
  });
  const [sort, setSort] = useState<IOption>(SORT_OPTIONS[1]);
  useEffect(() => {
    const tb_header = {
      ...TABLE_HEADER_LIST,
    };
    const tb_header_local = JSON.parse(localStorage.getItem('warehouse_table-header_list') ?? '{}');
    Object.entries(tb_header_local).forEach(
      (header) => (tb_header[header[0]].hidden = header[1] == true),
    );
    setTableHeader(tb_header);
  }, []);
  const saveHeader = (data: ITableHeader) => {
    const cloneData = {} as {
      [key: string]: boolean;
    };
    Object.entries(data).forEach((tbh) => {
      cloneData[tbh[0]] = tbh[1].hidden == true;
    });
    localStorage.setItem('warehouse_table-header_list', JSON.stringify(cloneData));
  };
  console.log(tableHeader);
  return (
    <div className="mt-5">
      <div className="mt-3">
        <WarehouseFilter
          onChange={(value) => {
            console.log(value);
          }}
        />
      </div>
      <div className="relative mt-5 w-full flex justify-between">
        <Button
          variant={'outline'}
          startIcon={<EyeOffIcon />}
          className="border-secondaryColorDark/30 dark:border-white/30 text-secondaryColorDark dark:text-white"
          onClick={() => {
            setShowModalCustomViewRow((prev) => !prev);
          }}
        >
          Ẩn cột
        </Button>
        <div
          ref={modalRef}
          className={clsx(
            'absolute min-h-[200px] w-[400px] p-4 bg-white dark:bg-[#2e2e2e] border-[1px] border-black shadow-lg z-20 rounded-lg top-[56px]',
            showModalCustomViewRow ? 'block' : 'hidden',
          )}
        >
          <div className="w-full flex flex-wrap relative">
            {Object.entries(tableHeader).map((val) => (
              <div className="w-[50%]" key={val[0]}>
                <Switch
                  id={val[0]}
                  isChecked={val[1]?.hidden ? false : true}
                  onChange={() => {
                    setTableHeader((prev) => {
                      const newData = {
                        ...prev,
                        [val[0]]: { ...val[1], hidden: !val[1]?.hidden },
                      };
                      saveHeader(newData);
                      return newData;
                    });
                  }}
                />
                <label className="inline-block ms-2 dark:text-white" htmlFor={val[0]}>
                  {val[1]?.title}
                </label>
              </div>
            ))}
            <div className="w-full flex mt-4">
              <Button
                className="w-full"
                onClick={() => {
                  const arrTB = Object.entries(tableHeader);
                  const newTableHeader = { ...tableHeader };
                  arrTB.forEach((tb) => {
                    newTableHeader[tb[0]] = { ...tb[1], hidden: false };
                  });
                  saveHeader(newTableHeader);
                  setTableHeader(newTableHeader);
                }}
              >
                Đặt lại
              </Button>
            </div>
          </div>
        </div>
        <div className="min-w-[200px]">
          <Select
            value={sort}
            options={SORT_OPTIONS}
            onChange={(value) => setSort(value as IOption)}
            placeholder="..."
            customIcon={<ArrowDownArrowUpIcon width="8" className="me-2" />}
          ></Select>
        </div>
      </div>
      <div className="relative mt-5 ">
        <div className="overflow-x-scroll w-[calc(100%_-_40px)]">
          <table className="w-full table-auto pr-[40px]">
            <thead>
              <tr className=" bg-[#E5E6E8] dark:bg-[#525354] dark:text-white font-medium">
                {Object.entries(tableHeader).map((header) =>
                  !header[1]?.hidden && header[0] != 'view' ? (
                    <td
                      className={clsx(
                        'uppercase font-medium text-nowrap text-[0.75rem] py-2 px-2',
                        header[1]?.text_align === 'center' ? 'text-center ' : '',
                        header[1]?.hidden ? 'hidden' : '',
                      )}
                      style={{
                        minWidth: header[1]?.min_width ? header[1]?.min_width + 'px' : 'auto',
                      }}
                      key={header[1]?.title}
                    >
                      {header[1]?.title}
                    </td>
                  ) : null,
                )}
                {!tableHeader.view?.hidden && (
                  <td
                    className={clsx(
                      'absolute w-[45px] bg-[#E5E6E8] right-[0]  dark:bg-[#525354] dark:text-white',
                      'uppercase font-medium text-nowrap text-[0.75rem] py-2 px-2',
                      tableHeader.view?.text_align === 'center' ? 'text-center ' : '',
                    )}
                  >
                    {tableHeader.view?.title}
                  </td>
                )}
              </tr>
            </thead>
            <tbody>
              {Object.entries(tableHeader).length > 0 &&
                LIST_POST_DEMO.map((data) => (
                  <tr
                    key={data.id}
                    className={
                      ' text-sm h-9 [&>td]:even:bg-[#f0f0f0] dark:text-white dark:[&>td]:bg-black dark:[&>td]:even:bg-[#3A3B3C] '
                    }
                  >
                    {!tableHeader.save?.hidden ? (
                      <td>
                        <div className="flex justify-center">
                          <PinIcon />
                        </div>
                      </td>
                    ) : null}
                    {!tableHeader.book?.hidden ? (
                      <td>
                        <div className="flex justify-center">
                          <ClockIcon />
                        </div>
                      </td>
                    ) : null}
                    {!tableHeader.time?.hidden ? (
                      <td className="text-center">{dateToStringDate(new Date(data.created_ad))}</td>
                    ) : null}

                    {!tableHeader.status?.hidden && (
                      <td className="flex justify-center items-center h-9 px-2">
                        <StatusTag status={data.status} />
                      </td>
                    )}
                    {!tableHeader.address?.hidden ? (
                      <td className="px-2">
                        <span className="line-clamp-1">{data.address.details}</span>
                      </td>
                    ) : null}

                    {!tableHeader.streets?.hidden ? (
                      <td className="px-2">
                        <span className="line-clamp-1">{data.address.street}</span>
                      </td>
                    ) : null}
                    {!tableHeader.district?.hidden ? (
                      <td className="px-2">
                        <span className="line-clamp-1">{data.address.district}</span>
                      </td>
                    ) : null}
                    {!tableHeader.spec?.hidden ? (
                      <td className="px-2">
                        <span className="line-clamp-1">
                          {data.spec.price}
                          {data.spec.area}
                        </span>
                      </td>
                    ) : null}
                    {!tableHeader.price?.hidden ? (
                      <td className="px-2">
                        <span className="text-nowrap">{data.spec.price}</span>
                      </td>
                    ) : null}
                    {!tableHeader.unit?.hidden ? (
                      <td className="px-2">
                        <span className="text-nowrap">{data.spec.price_unit}</span>
                      </td>
                    ) : null}
                    {!tableHeader.owner?.hidden ? (
                      <td className="px-2">
                        <span className="text-nowrap dark:text-[#74cf5a]">
                          {data.owner.fullName}
                        </span>
                      </td>
                    ) : null}
                    {!tableHeader.contact?.hidden ? (
                      <td className="px-2">
                        <span className="text-nowrap flex">
                          <a className="text-linkLight" href={'tel:' + data.owner.phone}>
                            {data.owner.phone}
                          </a>
                          <div className="w-4 text-center mx-2">
                            {data.owner?.zalo ? (
                              <a className="text-linkLight" href={data.owner.zalo} target="_blank">
                                <NotificationIcon />
                              </a>
                            ) : (
                              <span>-</span>
                            )}
                          </div>
                          <div className="w-4 text-center mx-2">
                            {data.owner?.message ? (
                              <a
                                className="text-linkLight"
                                href={data.owner.message}
                                target="_blank"
                              >
                                <MessageIcon />
                              </a>
                            ) : (
                              <span>-</span>
                            )}
                          </div>
                        </span>
                      </td>
                    ) : null}
                    {!tableHeader.property_feature?.hidden ? (
                      <td className="px-2">
                        <span className="line-clamp-1">{data.property_feature}</span>
                      </td>
                    ) : null}
                    {!tableHeader.report?.hidden ? (
                      <td className="px-2">
                        <div className="flex justify-center">
                          <ReportIcon />
                        </div>
                      </td>
                    ) : null}
                    {!tableHeader.view?.hidden ? (
                      <td className="absolute right-0 w-[40px] h-9 flex justify-center items-center px-2">
                        <ViewButton data={data} />
                      </td>
                    ) : null}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WarehouseList;
