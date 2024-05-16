import { Modal } from '@/components/Feedback';
import { ExternalLinkAltIcon } from '@/components/General';
import { useState } from 'react';

type TModalHelp = {
  label?: string;
  title?: string;
  children?: React.ReactNode;
};

export const ModalHelp = ({
  label = 'Lý do không lọc Diện tích/Mặt tiền/Hướng',
  title = 'Lý do không lọc Diện tích/Mặt tiền/Hướng',
  children,
  ...props
}: TModalHelp) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <div
        className="flex gap-1 text-xs font-normal cursor-pointer text-infoLight hover:underline"
        onClick={handleShowModal}
      >
        {label}
        <ExternalLinkAltIcon width="8" height="8" color="#1677FF" />
      </div>
      <Modal
        open={showModal}
        onCancel={handleShowModal}
        title={title}
        width={650}
        className="h-full"
        {...props}
      >
        {children}
      </Modal>
    </div>
  );
};
