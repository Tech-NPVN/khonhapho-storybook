import { Input } from '@/components/DataEntry';
import { CopyIcon } from '@/components/General';
import { formatDate } from '@/utils/formatDate';
import { clsx } from 'clsx';
import { LIST_POST_DEMO, TABLE_HEADER_LIST } from './const';

function ReferralList() {
  return (
    <div className="mt-5">
      <div className="overflow-x-scroll">
        <table className="w-full min-w-[800px] table-auto">
          <thead>
            <tr className="bg-[#E5E6E8] dark:bg-[#525354]">
              {Object.entries(TABLE_HEADER_LIST).map((header) => (
                <td
                  className={clsx(
                    'font-semibold dark:text-white text-nowrap text-sm py-2 px-2',
                    header[1]?.text_align && `text-${header[1]?.text_align}`,
                  )}
                  style={{
                    minWidth: header[1]?.min_width ? header[1]?.min_width + 'px' : 'auto',
                  }}
                  key={header[1]?.title}
                >
                  {header[1]?.title}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {LIST_POST_DEMO.map((data) => (
              <tr
                key={data.id}
                className={
                  'border-b border-solid border-[rgba(217,217,217,0.5)] dark:text-white text-sm h-12 text-center'
                }
              >
                <td>
                  <div className="line-clamp-1 flex items-center w-full md:w-[180px]">
                    <Input
                      value={data.referralCode}
                      readOnly
                      className="rounded-e-none rounded-s-lg dark:bg-primaryColorDark dark:text-textPrimaryDark w-[calc(100%-40px)] text-base"
                    />
                    <button className="flex items-center justify-center w-10 h-10 rounded-s-none rounded-e-lg border border-solid border-[#e5e7eb] dark:border-textSecondaryDark  focus:border-primaryButtonLight">
                      <CopyIcon color="black" className="text-primaryButtonLight" />
                    </button>
                  </div>
                </td>
                <td>
                  <span className="line-clamp-1">{data.user}</span>
                </td>
                <td>
                  <span className="line-clamp-1">{data.position}</span>
                </td>
                <td>
                  <span className="line-clamp-1">{data.branch}</span>
                </td>
                <td>
                  <span className="line-clamp-1">{data.department}</span>
                </td>
                <td>
                  <span className="line-clamp-1">
                    {data.status ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
                  </span>
                </td>
                <td>
                  <span className="line-clamp-1">{formatDate(data.created_at)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReferralList;
