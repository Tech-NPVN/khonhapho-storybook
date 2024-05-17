import { Modal } from '@/components/Feedback';
import { Button, NextSolidIcon, Typography } from '@/components/General';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useState } from 'react';
import FormCaring from './FormCaring';
import UserPostCaring from './UserPostCaring';

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
        <div className="px-4 py-3 rounded-md bg-primaryColorLight dark:bg-primaryColorDark text-textPrimaryLight dark:text-textPrimaryDark">
          <div
            className="flex items-center gap-2 cursor-pointer "
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
          .map((_, i) => {
            return (
              <div className="mt-6" key={`post_${i}`}>
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
        <div className="flex items-center gap-2 mt-2">
          <NextSolidIcon />
          <Typography variant="h2" className="text-[14px] md:text-base">
            Bạn hãy chọn khu vực và phân khúc mình đang bán để được thông báo khi có hàng mới lên.
          </Typography>
        </div>
        <div className="flex justify-end w-full">
          <Button className="mt-[10px] right-0" onClick={handleCloseNotice}>
            Hoàn thành
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Caring;
