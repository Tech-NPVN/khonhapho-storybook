import { ReportIcon } from '@/components/General';
import { ReactNode, useState } from 'react';
import WarehouseReport from '../Reports/WarehouseReport';
import { IPosting } from '../const';

export const ReportsButton = ({ data, children }: { data: IPosting; children?: ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-center w-full">
      <button
        className="flex items-center"
        onClick={() => {
          setShow(true);
        }}
      >
        <ReportIcon />
        {children}
      </button>
      <WarehouseReport
        data={data}
        show={show}
        onClose={() => {
          setShow(false);
        }}
      />
    </div>
  );
};
