import { IOption } from '@/components/DataEntry';
import { useState } from 'react';
import { LIST_POST_DEMO, SORT_OPTIONS } from '../const';
import { WarehousePosting } from './WarehousePosting';

function WarehouseDetails() {
  const [sort, setSort] = useState<IOption>(SORT_OPTIONS[0]);
  return (
    <>
      {LIST_POST_DEMO.map((data, index) => (
        <div key={data.id} className="mt-5">
          <WarehousePosting data={data} />
        </div>
      ))}
    </>
  );
}

export default WarehouseDetails;
