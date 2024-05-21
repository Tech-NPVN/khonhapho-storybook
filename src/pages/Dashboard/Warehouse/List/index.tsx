import { Switch } from '@/components/DataEntry';
import {
  Button,
  ClockIcon,
  DeleteIcon,
  EyeOffIcon,
  MessageIcon,
  NotificationIcon,
  PinIcon,
  ReportIcon,
} from '@/components/General';
import { useOutsideClickClose } from '@/hooks/useOutsideClickClose';
import {
  ITableHeader,
  STATUS_LABEL,
  TABLE_DATA,
  TABLE_HEADER,
} from '@/pages/Dashboard/Warehouse/const';
import { useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx';
import WarehouseFilter from '../Filter';

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
  useEffect(() => {
    const tb_header = {
      ...TABLE_HEADER,
      ...JSON.parse(localStorage.getItem('warehouse_table-header') || JSON.stringify(TABLE_HEADER)),
    };
    setTableHeader(tb_header);
  }, []);

  return (
    <div className="mt-5">
      <div className="mt-3">
        <WarehouseFilter
          onChange={(value) => {
            console.log(value);
          }}
        />
      </div>
      <div className="relative mt-5">
        <Button
          variant={'outline'}
          startIcon={<EyeOffIcon />}
          className="border-secondaryColorDark/30 dark:border-white/30 text-secondaryColorDark dark:text-white"
          onClick={() => {
            setShowModalCustomViewRow(true);
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
                  isChecked={val[1].show ?? false}
                  onChange={() => {
                    setTableHeader((prev) => {
                      const newData = {
                        ...prev,
                        [val[0]]: { ...val[1], show: !val[1]?.show },
                      };
                      localStorage.setItem('warehouse_table-header', JSON.stringify(newData));
                      return newData;
                    });
                  }}
                />
                <label className="inline-block ms-2 dark:text-white" htmlFor={val[0]}>
                  {val[1].title}
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
                    newTableHeader[tb[0]] = { ...tb[1], show: true };
                  });
                  localStorage.setItem('warehouse_table-header', JSON.stringify(newTableHeader));
                  setTableHeader(newTableHeader);
                }}
              >
                Đặt lại
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-5 ">
        <div className="overflow-x-scroll w-[calc(100%_-_40px)]">
          <table className="w-full table-auto pr-[40px]">
            <thead>
              <tr className=" bg-[#E5E6E8] dark:bg-[#525354] dark:text-white font-medium">
                {Object.entries(tableHeader).map((header) =>
                  header[1]?.show && header[0] != 'view' ? (
                    <td
                      className={clsx(
                        'uppercase font-medium text-nowrap text-[0.75rem] py-2 px-2',
                        header[1].text_align === 'center' ? 'text-center ' : '',
                        header[1]?.show ? '' : 'hidden',
                      )}
                      style={{
                        minWidth: header[1].min_width ? header[1].min_width + 'px' : 'auto',
                      }}
                      key={header[1].title}
                    >
                      {header[1].title}
                    </td>
                  ) : null,
                )}
                {tableHeader.view?.show && (
                  <td
                    className={clsx(
                      'absolute w-[45px] bg-[#E5E6E8] right-[0]  dark:bg-[#525354] dark:text-white',
                      'uppercase font-medium text-nowrap text-[0.75rem] py-2 px-2',
                      tableHeader.view.text_align === 'center' ? 'text-center ' : '',
                    )}
                  >
                    {tableHeader.view.title}
                  </td>
                )}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((data) => (
                <tr
                  key={data.id}
                  className={
                    ' text-sm h-9 [&>td]:even:bg-[#f0f0f0] dark:text-white dark:[&>td]:bg-black dark:[&>td]:even:bg-[#3A3B3C] '
                  }
                >
                  {tableHeader.save?.show ? (
                    <td>
                      <div className="flex justify-center">
                        <PinIcon />
                      </div>
                    </td>
                  ) : null}
                  {tableHeader.book?.show ? (
                    <td>
                      <div className="flex justify-center">
                        <ClockIcon />
                      </div>
                    </td>
                  ) : null}
                  {tableHeader.time?.show ? <td className="text-center">{data.time}</td> : null}

                  {tableHeader.status?.show && (
                    <td className="flex justify-center items-center h-9 px-2">
                      <StatusTag status={data.status} />
                    </td>
                  )}
                  {tableHeader.address?.show ? (
                    <td className="px-2">
                      <span className="line-clamp-1">{data.address}</span>
                    </td>
                  ) : null}

                  {tableHeader.streets?.show ? (
                    <td className="px-2">
                      <span className="line-clamp-1">{data.streets}</span>
                    </td>
                  ) : null}
                  {tableHeader.district?.show ? (
                    <td className="px-2">
                      <span className="line-clamp-1">{data.district}</span>
                    </td>
                  ) : null}
                  {tableHeader.spec?.show ? (
                    <td className="px-2">
                      <span className="line-clamp-1">{data.spec}</span>
                    </td>
                  ) : null}
                  {tableHeader.price?.show ? (
                    <td className="px-2">
                      <span className="text-nowrap">{data.price}</span>
                    </td>
                  ) : null}
                  {tableHeader.unit?.show ? (
                    <td className="px-2">
                      <span className="text-nowrap">{data.unit}</span>
                    </td>
                  ) : null}
                  {tableHeader.owner?.show ? (
                    <td className="px-2">
                      <span className="text-nowrap dark:text-[#74cf5a]">{data.owner}</span>
                    </td>
                  ) : null}
                  {tableHeader.contact?.show ? (
                    <td className="px-2">
                      <span className="text-nowrap flex">
                        <a className="text-linkLight" href={'tel:' + data.contact.phone}>
                          {data.contact.phone}
                        </a>
                        <div className="w-4 text-center mx-2">
                          {data.contact?.zalo ? (
                            <a className="text-linkLight" href={data.contact.zalo} target="_blank">
                              <NotificationIcon />
                            </a>
                          ) : (
                            <span>-</span>
                          )}
                        </div>
                        <div className="w-4 text-center mx-2">
                          {data.contact?.message ? (
                            <a
                              className="text-linkLight"
                              href={data.contact.message}
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
                  {tableHeader.property_feature?.show ? (
                    <td className="px-2">
                      <span className="line-clamp-1">{data.property_feature}</span>
                    </td>
                  ) : null}
                  {tableHeader.report?.show ? (
                    <td className="px-2">
                      <div className="flex justify-center">
                        <ReportIcon />
                      </div>
                    </td>
                  ) : null}
                  {tableHeader.view?.show ? (
                    <td className="absolute right-0 w-[40px] h-9 flex justify-center items-center px-2">
                      <DeleteIcon />
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
