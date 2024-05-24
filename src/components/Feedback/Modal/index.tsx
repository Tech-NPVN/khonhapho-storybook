import { Button, CloseIcon } from '@/components/General';
import { useOutsideClickClose } from '@/hooks/useOutsideClickClose';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { HTMLAttributes, ReactNode, useRef } from 'react';

type ModalProps = HTMLAttributes<HTMLDivElement> & {
  closedIcon?: ReactNode;
  cancelText?: string;
  okText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  open?: boolean;
  footer?: boolean;
  centered?: boolean;
  title?: string;
  width?: number;
  height?: number;
  children?: ReactNode;
  disableInteractOutside?: boolean;
  styleTitle?: string;
  isDivided?: boolean;
  centerTitle?: boolean;
  showLine?: boolean;
};

export const Modal = ({
  className,
  children,
  width,
  height,
  closedIcon,
  cancelText,
  okText,
  onOk,
  open = false,
  title,
  footer = false,
  onCancel,
  showLine = true,
  disableInteractOutside,
  centered,
  styleTitle = 'textPrimaryLight dark:text-textPrimaryDark',
  isDivided = true,
  centerTitle,
  ...props
}: ModalProps) => {
  const handleCloseModal = () => {
    onCancel && onCancel();
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClickClose(modalRef, handleCloseModal);

  return (
    open && (
      <Transition appear show={open}>
        <Dialog onClose={handleCloseModal} onClick={(e) => e.stopPropagation()}>
          <DialogPanel>
            <div
              className={`fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.5)] z-50 overflow-auto h-full
                    ${centered ? 'flex flex-col justify-center items-center' : 'flex flex-col items-center pt-20'}`}
            >
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <div
                  className={`w-1/2 h-fit px-8 py-3 mb-12 rounded-xl relative bg-primaryColorLight dark:bg-primaryColorDark ${className}`}
                  style={{ width, height }}
                  {...(!disableInteractOutside ? { ref: modalRef } : null)}
                  {...props}
                >
                  <div className="flex flex-col h-full">
                    {/* Title */}
                    <div
                      className={` ${title ? 'mb-4' : 'mb-12'} ${centerTitle && 'flex justify-center'}`}
                    >
                      {title && (
                        <DialogTitle
                          as="h3"
                          className={`text-base font-medium text-black dark:text-white w-fit uppercase ${styleTitle}`}
                        >
                          {title || 'Dialog Title'}
                        </DialogTitle>
                      )}
                      <button
                        onClick={handleCloseModal}
                        className="absolute top-[23px] right-[20px]"
                      >
                        <CloseIcon className="dark:[&>path]:fill-white" />
                      </button>
                    </div>

                    {/* End Title */}
                    {isDivided && <hr className="-mx-8"></hr>}
                    {children}
                    {footer && (
                      <div className="mt-4 flex flex-col h-full justify-end">
                        {isDivided && <hr className="-mx-8"></hr>}
                        <div className="flex justify-end gap-2 mt-4 ">
                          <Button
                            onClick={handleCloseModal}
                            backgroundColor="white"
                            className="border text-black w-15 "
                          >
                            {cancelText ?? 'Đóng'}
                          </Button>
                          <Button onClick={onOk} className="border bg-[green] text-[#FFFFFF] w-15 ">
                            {okText ?? 'Thêm'}{' '}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TransitionChild>
            </div>
          </DialogPanel>
        </Dialog>
      </Transition>
    )
  );
};
