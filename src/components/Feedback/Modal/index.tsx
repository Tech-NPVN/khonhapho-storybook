import { Button } from '@/components/General';
import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

const modalStyles = cva(
    '',
    {
        variants: {

        },
        defaultVariants: {
            size: "lg",
            shape: "circle",
        },

    }
);

type ModalProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof modalStyles>
    & {
        closedIcon?: ReactNode;
        cancelText?: ReactNode;
        okText?: ReactNode;
        onOk?: () => void;
        onCancel?: () => void;
        open?: boolean;
        footer?: boolean;
        centered?: boolean;
    }

export const Modal = ({ className, closedIcon, cancelText, okText, onOk, open, children, footer = true, onCancel, centered, ...props }: ModalProps) => {
    // const [isShowModal, setIsShowModal] = useState<boolean>(false);

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
            if (modalRef!.current!.contains(e.target as Node)) {
                handleCloseModal();
                console.log(modalRef!.current)
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
        <>
            {open &&
                <div className='' ref={modalRef}>
                    <div className={`animate-modal fixed top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.5)] z-10 w-full 
                    ${centered ? 'flex flex-col justify-center items-center' : 'flex flex-col items-center pt-20'}`} >
                        <div className='bg-[white] w-1/2 px-12 py-6 rounded-xl'>
                            <div>
                                <div className='flex justify-between mt-4 mb-4'>
                                    <h1 className='font-bold'>Trung</h1>
                                    <button onClick={handleCloseModal}>
                                        <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                {children}
                                <p className='mb-4'>This is a paragraph</p>

                                {footer
                                    &&
                                    <>
                                        <hr></hr>
                                        <div className='flex justify-end gap-2 mt-4'>
                                            <Button onClick={handleCloseModal} backgroundColor='white' className='border text-black'>{cancelText || 'Đóng'}</Button>
                                            <Button onClick={onOk}>{okText || 'Thêm'}</Button>
                                        </div>
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}