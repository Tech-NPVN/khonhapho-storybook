import { DeleteIcon } from '@/components/General';
import { useState } from 'react';
import { IPosting } from '../const';
import { PostingDetails } from './Details';

export const ViewButton = ({ data }: { data: IPosting }) => {
  const [show, setShow] = useState(false);
  return (
    <button
      onClick={() => {
        setShow(true);
      }}
    >
      <DeleteIcon />
      <PostingDetails
        data={data}
        show={show}
        onClose={() => {
          setShow(false);
        }}
      />
    </button>
  );
};
