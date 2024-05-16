import { Modal } from '@/components/Feedback';
import { Button, NextSolidIcon, Typography } from '@/components/General';
import { useState } from 'react';
import UserPostCaring from './UserPostCaring';
import FormCaring from './FormCaring';
import { useWindowSize } from '@/hooks/useWindowSize';

const Caring = () => {
  const [isShowNotice, setIsShowNotice] = useState<boolean>(true);
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const handleCloseNotice = () => {
    setIsShowNotice(false);
  };
  const [index, setIndex] = useState(3);
  const windowSize = useWindowSize();

  return (
    <>
      <div className="mt-6">
        <div className="py-3 px-4 rounded-md bg-primaryColorLight dark:bg-primaryColorDark text-textPrimaryLight dark:text-textPrimaryDark">
          <div
            className="flex gap-2 items-center cursor-pointer "
            onClick={() => setIsOpenCollapse(!isOpenCollapse)}
          >
            <NextSolidIcon />
            <Typography
              variant="h2"
              className=" text-[14px] md:text-base text-textPrimaryLight dark:text-textPrimaryDark"
            >
              Chọn tiêu chí nhận thông báo kho hàng
            </Typography>
          </div>
          {isOpenCollapse && (
            <FormCaring isOpenCollapse={isOpenCollapse} setIsOpenCollapse={setIsOpenCollapse} />
          )}
        </div>

        {/* <div className="flex flex-col items-center gap-2 mt-6">
          <img src="/no-result-image.svg" />
          <Typography
            variant="p"
            className="text-sm text-textPrimaryLight dark:text-textPrimaryDark"
          >
            Không có kết quả nào trên hệ thống!
          </Typography>
        </div> */}
        {Array(index)
          .fill(0)
          .map((_) => {
            return (
              <div className="mt-6">
                <UserPostCaring />
              </div>
            );
          })}
      </div>
      <Modal
        open={isShowNotice}
        showLine={false}
        title="Chú ý"
        className={`${windowSize.width < 736 ? 'w-[90%]' : ''}`}
        onCancel={handleCloseNotice}
        disableInteractOutside={true}
      >
        <div className="flex gap-2 items-center mt-2">
          <NextSolidIcon />
          <Typography variant="h2" className="text-[14px] md:text-base">
            Bạn hãy chọn khu vực và phân khúc mình đang bán để được thông báo khi có hàng mới lên.
          </Typography>
        </div>
        <div className="w-full flex justify-end">
          <Button className="mt-[10px] right-0" onClick={handleCloseNotice}>
            Hoàn thành
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Caring;
