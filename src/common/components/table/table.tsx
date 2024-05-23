import { NoResult } from '../no-result';

export type Alignment = 'center' | 'left' | 'right' | 'justify' | 'char';
export type KeyValues = {
  [key: string]: any;
};

export type ItemTableProps<T> = {
  key?: keyof T | string;
  header: string;
  alignment?: Alignment;
  index?: number;
  cnRow?: string;
  render?: (value: T, index: number) => React.ReactNode;
  onClick?: (value: T, event: React.MouseEvent<HTMLTableCellElement>) => void;
};

export type TableProps<T> = {
  columns: readonly ItemTableProps<T>[];
  rows: readonly T[];
  itemsPerPage?: number;
  total?: number;
  isLoading?: boolean;
  pageIndex?: number;
  setPageIndex?: (page: number) => void;
  className?: string;
};

export const Table = <T extends KeyValues>({
  columns,
  rows,
  itemsPerPage,
  total,
  isLoading,
  pageIndex,
  setPageIndex,
  className,
}: TableProps<T>) => {
  return (
    <div className={`flex flex-col min-w-0 break-words bg-transparent border-0 ${className}`}>
      {isLoading && <></>}
      <div className="table-responsive h-full">
        <table className="table table-flush text-slate-950 w-full h-full" id="datatable">
          <thead className="thead-light bg-tertiaryColorLight dark:bg-tertiaryColorDark">
            <tr>
              {columns.map((item) => (
                <th
                  key={item.header}
                  align={item.alignment ?? 'left'}
                  className={`px-3 py-2 text-xs font-semibold dark:text-white uppercase ${item.cnRow}`}
                >
                  {item.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows && rows.length > 0 ? (
              rows.map((row, i) => (
                <tr
                  key={i}
                  className={`hover:bg-secondaryColorLightD2 dark:hover:bg-secondaryColorDark transition-all ${i % 2 ? 'bg-secondaryColorLightD2 dark:bg-secondaryColorDark' : 'bg-tranparent dark:bg-primaryColorDark'}`}
                >
                  {columns.map((item, index) => (
                    <td
                      key={item.header}
                      align={item.alignment}
                      onClick={(event) => item.onClick && item?.onClick(row, event)}
                      className={`${item.cnRow} font-normal leading-normal text-xs px-3 py-1 dark:text-white`}
                    >
                      {item?.render ? item.render(row, index) : row[item?.key as string] ?? '-'}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td align="center" colSpan={columns.length ?? 0}>
                  <NoResult />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
