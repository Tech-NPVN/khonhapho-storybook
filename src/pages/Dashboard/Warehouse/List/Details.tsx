import { AngleNextIcon, AnglePrevIcon } from '@/components/General';
import { useOutsideClickClose } from '@/hooks/useOutsideClickClose';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { WarehousePosting } from '../Details/WarehousePosting';
import { IPosting } from '../const';
export const PostingDetails = ({
  show = true,
  onClose,
  data,
}: {
  show?: boolean;
  onClose?: () => void;
  data: IPosting;
}) => {
  const handleCloseModal = () => {
    onClose?.();
  };
  const [index, setIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClickClose(modalRef, handleCloseModal);

  return (
    <Transition appear show={show}>
      <Dialog onClose={handleCloseModal} onClick={(e) => e.stopPropagation()}>
        <DialogPanel>
          <div
            className={`fixed top-0 left-0 w-full flex justify-center  items-center content-center bg-[rgba(0,0,0,0.5)] z-50 overflow-auto h-full`}
          >
            <TransitionChild
              enter="ease-in duration-300"
              enterFrom="opacity-50"
              enterTo="opacity-100"
              leave="ease-out duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                ref={modalRef}
                className={clsx(
                  'h-[95vh] w-[80vw] rounded-xl overflow-hidden relative',
                  'bg-primaryColorLight dark:bg-primaryColorDark',
                )}
              >
                <div className="w-full max-h-full flex relative">
                  <div className="relative md:w-1/2 full overflow-hidden">
                    <div
                      className={clsx('h-full flex ease-in-out duration-300')}
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
                  <div className="w-1/2">
                    <WarehousePosting type="modal" data={data} />
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </DialogPanel>
      </Dialog>
    </Transition>
  );
};
