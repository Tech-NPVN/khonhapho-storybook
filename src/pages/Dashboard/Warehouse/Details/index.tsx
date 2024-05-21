import { WAREHOUSE_DETAILS } from '../const';
import Posting from './Posting';

function WarehouseDetails() {
  return (
    <>
      {WAREHOUSE_DETAILS.map((_, index) => (
        <Posting key={index} />
      ))}
    </>
  );
}

export default WarehouseDetails;
