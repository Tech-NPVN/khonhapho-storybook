<<<<<<< HEAD
import { NoResult } from '@/common/components';
=======
>>>>>>> 522d27545bf9bc0e891a9b384c27d32245ad6345
import { Tag } from '@/components/DataDisplay/Tag';
import { Modal } from '@/components/Feedback';
import { CameraIcon, SendIcon, Typography } from '@/components/General';
import { TLichXemNha } from '.';

type TModalAppointment = {
  show?: boolean;
  onCancel?: () => void;
  items: TLichXemNha;
};

export const ModalGuestAppointment = ({ show, onCancel, items }: TModalAppointment) => {
  return (
    <Modal
      open={show}
      onCancel={onCancel}
      title="LỊCH HẸN DẪN KHÁCH"
      className="mb-0 w-[560px] !p-5"
    >
      <div className=" h-[calc(var(--window-height)_-_60px)] md:h-[calc(var(--window-height)_-_110px)] flex flex-col relative">
        <div className="px-3 pt-3 space-y-2">
          <div className="flex justify-between">
            <a href="/user/4420" target="_blank" className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <img alt="dffasdfdsdf" src={items.avatar} className="object-cover w-full h-full" />
              </div>
              <Typography variant="span" className="text-sm font-semibold">
                {items.name}
              </Typography>
            </a>
            <Tag className="border-[#FBBD23] border text-[#FBBD23] bg-[#FFF2D1] text-xs px-2.5 py-[2px] h-6 cursor-pointer">
              Chờ xác nhận
            </Tag>
          </div>
          <div>
            <Typography variant="span" className="text-sm">
              Vào lúc:{' '}
            </Typography>
            <Typography variant="span" className="text-sm font-semibold">
              {items.time}
            </Typography>
          </div>
          <div>
            <Typography variant="span" className="text-sm">
              Tại địa chỉ:{' '}
            </Typography>
            <Typography variant="span" className="text-sm font-semibold">
              {items.address} Mô tả:{' '}
              {items?.desc?.map((c, index) => (
                <span key={`mo_ta_${index}`}>
                  <a href={c} className="text-infoLight">
                    #{c}
                  </a>
                  {items && items.desc && index < items.desc.length - 1 ? <span>, </span> : ''}
                </span>
              ))}
            </Typography>
          </div>
          <div>
            <Typography variant="span" className="text-sm">
              Ghi chú:{' '}
            </Typography>
            <Typography variant="span" className="text-sm font-semibold">
              {items.note}
            </Typography>
          </div>
        </div>
        <div className="my-3 border-b"></div>
        <div className="px-3 py-2 overflow-auto min-h-[380px] flex flex-end">
          <div className="flex flex-col items-center justify-end flex-1 gap-5">
            <NoResult title="Không có kết quả nào trên hệ thống!" />
          </div>
        </div>
        <div className="flex items-center px-3 py-2 space-x-2">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <img
              alt="dffasdfdsdf"
              src="https://assets-cdn.khonhapho.com/test/2024_05_02/ngokhong-toy-1714731801769.jpeg?quality=70&amp;auto_optimize=high&amp;height=50&amp;width=50"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-2.5 py-2 m-0 w-full rounded-xl flex flex-col justify-center gap-1 bg-gray-100 h-[78px]">
            <div className="flex items-center justify-between flex-1 w-full rounded-xl">
              <input
                type="text"
                placeholder="Nhắn tin"
                className="flex-1 bg-transparent outline-none"
              />
              <button type="submit" className="flex items-center justify-center">
                <SendIcon />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center ant-btn css-h2e6id ant-btn-text ant-btn-icon-only"
                >
                  <CameraIcon width="20" height="20" />
                </button>
                <input
                  accept="image/*, image/heic, image/heif"
                  className="invisible hidden w-0 h-0"
                  type="file"
                />
                <button
                  type="button"
                  className="flex items-center justify-center ant-btn css-h2e6id ant-btn-text ant-btn-icon-only"
                >
                  <CameraIcon width="20" height="20" />
                </button>
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center ant-btn css-h2e6id ant-btn-text ant-btn-icon-only"
                  >
                    <CameraIcon width="20" height="20" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
