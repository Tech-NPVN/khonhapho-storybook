import { Avatar } from '@/components/DataDisplay';
import { Button } from '@/components/General';
import { useState } from 'react';
import { ModalGuestAppointment } from './ModalGuestAppointment';

export const HouseViewHistory = ({ items }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCancelModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div
        className="flex justify-between gap-2 p-3 bg-[#FFFFCB] rounded-md cursor-pointer"
        onClick={handleCancelModal}
      >
        <Avatar src={items.avatar} width={40} height={40} alt="lkll" />
        <div className="flex flex-col gap-2">
          <div className="text-sm cursor-pointer grow line-clamp-3">
            <span className="font-semibold">Bạn</span> đã đặt lịch dẫn khách xem nhà vào lúc{' '}
            <b>15:23 - 16/05/2024</b> tại địa chỉ{' '}
            <span>
              250.12.25 Khương Trung 50 3 3.5 6.3 tỷ Thanh Xuân HĐ ĐC Trần Thành Lâm NPHN-6268,
              0927749999, X3,...
            </span>
            <span className="font-semibold text-blue-400">Xem thêm</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-blue-400">10 phút trước</div>
            <div className="flex items-center gap-1">
              <div className="text-xs font-semibold truncate max-w-[200px]">Bạn đã tạo mới</div>
              <Button type="button" className="h-6 text-sm font-normal w-11">
                Xem
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalGuestAppointment show={showModal} onCancel={handleCancelModal} items={items} />
      )}
    </>
  );
};
