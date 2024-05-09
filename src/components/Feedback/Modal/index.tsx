import { Button, CloseIcon } from '@/components/General';
import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'


type ModalProps = HTMLAttributes<HTMLDivElement>
    & {
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
    }

export const Modal = ({ className, children, width, height, closedIcon, cancelText, okText, onOk, open = false, title, footer = false, onCancel, centered, ...props }: ModalProps) => {
    const handleCloseModal = () => {
        onCancel && onCancel();
    }

    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleKeyEscClose = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleCloseModal();
                event.preventDefault();
            }
        };

        const handleClickOutsideClose = (e: MouseEvent) => {
            if (modalRef!.current && !modalRef!.current!.contains(e.target as Node)) {
                handleCloseModal();
            }
        }

        document.addEventListener("mousedown", handleClickOutsideClose);
        document.addEventListener("keydown", handleKeyEscClose);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideClose);
            document.removeEventListener("keydown", handleKeyEscClose);
        };
    }, []);


    return (
        <div >
            {open &&
                <Transition appear show={open} >
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 transform-[scale(95%)]"
                        enterTo="opacity-100 transform-[scale(100%)]"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 transform-[scale(100%)]"
                        leaveTo="opacity-0 transform-[scale(95%)]"
                    >
                        <Dialog onClose={handleCloseModal} className="w-[100px]" onClick={(e: any) => e.stopPropagation()}>
                            <DialogPanel>
                                <div className={` fixed top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.5)] z-10
                    ${centered ? 'flex flex-col justify-center items-center' : 'flex flex-col items-center pt-20'}`} >
                                    <div className='bg-[white] w-1/2 min-h-[150px]  px-8 py-3 rounded-xl relative' style={{ width, height }} ref={modalRef}>
                                        <div className='flex flex-col justify-between h-full'>
                                            <div className={`mt-4 ${title ? 'mb-4' : 'mb-12'}`}>
                                                {title &&
                                                    <DialogTitle as="h3" className="text-base font-medium text-black">
                                                        {title || 'Dialog Title'}
                                                    </DialogTitle>}
                                                <button onClick={handleCloseModal} className='absolute top-8 right-8'>
                                                    <CloseIcon />
                                                </button>
                                            </div>
                                            {children}
                                            {footer
                                                &&
                                                <div className='mt-4'>
                                                    <hr></hr>
                                                    <div className='flex justify-end gap-2 mt-4'>
                                                        <Button onClick={handleCloseModal} backgroundColor='white' className='border text-black'>{cancelText || 'Đóng'}</Button>
                                                        <Button onClick={onOk} className='border bg-[green] text-[#FFFFFF]'>{okText || 'Thêm'} </Button>
                                                    </div>
                                                </div>

                                            }

                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </Dialog>
                    </TransitionChild>
                </Transition>
            }
        </div>
    );
}