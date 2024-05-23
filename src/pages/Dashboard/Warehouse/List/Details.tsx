import { AngleNextIcon, AnglePrevIcon, CloseIcon } from '@/components/General';
import { useOutsideClickClose } from '@/hooks/useOutsideClickClose';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { WarehousePosting } from '../Details/WarehousePosting';
import { IPosting } from '../const';
export const PostingDetails = ({
  show = false,
  onClose,
  data,
}: {
  show?: boolean;
  onClose?: () => void;
  data: IPosting;
}) => {
  const [index, setIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = () => {
    onClose?.();
  };
  useOutsideClickClose(modalRef, handleCloseModal);

  return (
    <>
      <Transition appear show={show}>
        <Dialog
          onClose={() => {
            console.log('Close modal 1');
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleCloseModal();
            console.log('Close modal');
          }}
        >
          <DialogPanel>
            <div
              className={`fixed top-0 left-0 w-full flex justify-center  items-center content-center bg-[rgba(0,0,0,0.5)] z-50 overflow-auto h-full`}
            >
              <TransitionChild
                enter="ease-in duration-200"
                enterFrom="opacity-50 scale-50"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-0"
              >
                <div
                  ref={modalRef}
                  className={clsx(
                    'h-full w-full lg:h-[95vh] lg:w-[90vw] xl:w-[80vw] lg:rounded-xl overflow-x-hidden overflow-y-auto lg:overflow-hidden relative',
                    'bg-primaryColorLight dark:bg-primaryColorDark',
                  )}
                >
                  <div className="w-full h-full flex relative flex-wrap">
                    <button
                      className="absolute hidden lg:block top-7 left-7 z-40"
                      onClick={handleCloseModal}
                    >
                      <CloseIcon width="20" color="white" height="20" />
                    </button>
                    <div className="lg:hidden div sticky top-0 right-0 left-0 w-full h-[50px] bg-white dark:bg-secondaryColorDark z-50 ">
                      <div className="w-full h-full relative flex justify-center items-center">
                        <button className="absolute left-5" onClick={handleCloseModal}>
                          <AnglePrevIcon color="#" className="fill-black dark:fill-white" />
                        </button>
                        <span className="font-medium dark:text-white">
                          {data.owner.position} {data.owner.fullName} • {data.owner.group}
                        </span>
                      </div>
                    </div>
                    <div className=" w-full lg:w-1/2 h-[40vh] lg:h-[100%] relative overflow-hidden">
                      <div
                        className={clsx('h-full flex items-center ease-in-out duration-300')}
                        style={{
                          width: `calc(100% * ${data?.images.length})`,
                          transform: `translateX(-${(100 * index) / (data?.images ? data?.images?.length : 1)}%)`,
                        }}
                      >
                        {data?.images.map((img, i) => (
                          <div
                            key={img}
                            className="bg-black h-full flex justify-center content-center items-center"
                            style={{
                              width: `${(1 / data?.images.length) * 100}%`,
                            }}
                          >
                            <img src={data?.images[i]} className="w-full object-cover" alt="..." />
                          </div>
                        ))}
                      </div>
                      <div className={clsx('absolute top-1/2 -translate-y-1/2 left-3 prev', '')}>
                        <button
                          disabled={index == 0}
                          className="disabled:opacity-35 px-1 py-3 rounded-md hover:bg-black/30"
                          onClick={() => {
                            setIndex((prev) => prev - 1);
                          }}
                        >
                          <AnglePrevIcon width="40" height="40" color="#" className="fill-white" />
                        </button>
                      </div>
                      <div className={clsx('absolute top-1/2 -translate-y-1/2 right-3 next', '')}>
                        <button
                          disabled={index == (data?.images ? data?.images?.length : 1) - 1}
                          className="disabled:opacity-35 px-1 py-3 rounded-md hover:bg-black/30"
                          onClick={() => {
                            setIndex((prev) => prev + 1);
                          }}
                        >
                          <AngleNextIcon width="40" height="40" color="#" className="fill-white" />
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <WarehousePosting type="modal" data={data} />
                    </div>
                  </div>
                </div>
              </TransitionChild>
            </div>
          </DialogPanel>
        </Dialog>
      </Transition>
    </>
  );
};
