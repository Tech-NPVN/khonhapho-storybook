import { AngleNextIcon, AnglePrevIcon } from '@/components/General';
import clsx from 'clsx';
import { FunctionComponent } from 'react';

export interface IPaginationProps {
  current: number;
  totalCount: number;
  onChangePage: (page: number) => void;
  itemPerPage: number;
  onChangePageSize?: (size: number) => void;
  hiddenPageSize?: boolean;
}
const Pagination: FunctionComponent<IPaginationProps> = ({
  current,
  totalCount,
  onChangePage,
  onChangePageSize,
  hiddenPageSize,
  itemPerPage,
}) => {
  const to = itemPerPage * (current + 1) <= totalCount ? itemPerPage * (current + 1) : totalCount;
  const totalPages = Math.ceil(totalCount / itemPerPage);
  return (
    <div className="md:flex block items-center justify-between md:justify-end text-[12px] bg-white border-gray-200 sm:px-0 w-full">
      {totalCount > 0 && (
        <div className="flex items-center justify-between gap-3 md:justify-end ">
          {!hiddenPageSize && (
            <div className="items-center gap-3">
              <select
                value={itemPerPage}
                onChange={(e) => {
                  !!onChangePageSize && onChangePageSize(Number(e.target.value || 10));
                  onChangePage(0);
                }}
                className="py-[6px] px-[3px] text-[12px] border rounded-md"
              >
                <option value={5}>5 / trang</option>
                <option value={10}>10 / trang</option>
                <option value={20}>20 / trang</option>
                <option value={30}>30 / trang</option>
                <option value={40}>40 / trang</option>
              </select>
            </div>
          )}

          <div>
            {totalCount >= itemPerPage && (
              <nav className="flex items-center gap-2" aria-label="Pagination">
                <button
                  onClick={() => onChangePage(current - 1)}
                  disabled={current === 0}
                  className="relative inline-flex items-center text-2xl font-medium bg-white"
                >
                  <span className="sr-only">Previous</span>
                  <AnglePrevIcon
                    className={clsx('', { 'text-slate-400': current === 0 })}
                    aria-hidden="true"
                  />
                </button>
                {totalCount > 0 &&
                  [...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onChangePage(index)}
                      className={clsx(
                        'py-[1px] px-2 text-sm border rounded-md leading-5',
                        {
                          'text-successLight dark:text-successDark border-successLight dark:border-successDark font-semibold':
                            index === current,
                        },
                        { 'bg-white text-black border-none': index !== current },
                      )}
                    >
                      {index + 1}
                    </button>
                  ))}
                <button
                  onClick={() => onChangePage(current + 1)}
                  disabled={to === totalCount}
                  className="relative inline-flex items-center text-2xl font-medium bg-white"
                >
                  <span className="sr-only">Next</span>
                  <AngleNextIcon
                    className={clsx('', {
                      'text-slate-400': to === totalCount,
                    })}
                    aria-hidden="true"
                  />
                </button>
              </nav>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
