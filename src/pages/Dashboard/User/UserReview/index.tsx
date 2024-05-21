import { NoResult } from '@/common/components';
import { Input } from '@/components/DataEntry';
import { AddIcon, SearchIcon, Typography } from '@/components/General';
import clsx from 'clsx';

type TListHistoryReportGuide = {
  time_report?: string;
  fullNameOwner?: string;
  fullNameCustomer?: string;
  time_customer_house?: string;
  address_customer_house?: string;
  review?: string;
};

const columms = [
  { label: 'time_report', value: 'Thời gian báo cáo', status: true },
  { label: 'fullNameCustomer', value: 'Họ tên khách', status: true },
  { label: 'time_customer_house', value: 'Thời gian khách xem nhà', status: true },
  { label: 'address_customer_house', value: 'Địa chỉ dẫn khách xem', status: true },
  { label: 'review', value: 'Xem', status: true },
];

const listHistoryReportOwner: TListHistoryReportGuide[] = [];

const renderRowValue = (
  key: keyof TListHistoryReportGuide,
  row: TListHistoryReportGuide,
): string | React.ReactElement => {
  switch (key) {
    case 'time_report':
      return <span>{row.time_report}</span>;
    case 'fullNameCustomer':
      return <span>{row.fullNameCustomer || '-'}</span>;
    case 'time_customer_house':
      return <span>{row.time_customer_house || '-'}</span>;
    case 'address_customer_house':
      return <p>{row.address_customer_house || ''}</p>;
    case 'review':
      return <AddIcon />;
    default:
      return typeof row[key];
  }
};

export const UserReview = () => {
  return (
    <div className="w-full px-6 py-3 bg-white rounded-lg h-96 dark:bg-primaryColorDark">
      <div className="flex items-center justify-between pb-3">
        <Typography variant="h2" className="text-sm font-medium dark:text-white">
          Lịch sử báo cáo dẫn khách
        </Typography>
      </div>
      <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
      <div className="flex justify-end">
        <div className="flex w-full md:w-[294px] mt-4">
          <Input
            className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark "
            placeholder="Nhập nội dung tìm kiếm"
          />
          <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
            <SearchIcon color="white" />
          </button>
        </div>
      </div>

      {/* table */}
      <div className="w-full mt-5 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              {columms.map((columm) => (
                <th
                  key={columm.label}
                  className="px-1 py-2 text-base font-semibold text-left uppercase"
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
                    {renderRowValue(col.label as keyof TListHistoryReportGuide, history)}
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
  );
};
