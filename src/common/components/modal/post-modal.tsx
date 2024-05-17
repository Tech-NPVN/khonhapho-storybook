import { CloseIcon } from '@/components/General';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

type PostModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
};

export const PostModal = ({ open, setOpen, className }: PostModalProps) => {
  return (
    <Transition appear show={open}>
      <Dialog onClose={() => setOpen(false)}>
        <DialogPanel className="fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.5)] z-50 overflow-scroll h-full flex flex-col justify-center items-center">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 transform-[scale(95%)]"
            enterTo="opacity-100 transform-[scale(100%)]"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 transform-[scale(100%)]"
            leaveTo="opacity-0 transform-[scale(95%)]"
          >
            <div
              className={`w-11/12 min-h-80 h-fit mb-12 rounded-xl grid grid-cols-2 relative overflow-hidden bg-primaryColorLight dark:bg-primaryColorDark ${className}`}
            >
              <button onClick={() => setOpen(false)} className="absolute left-5 top-5">
                <CloseIcon className="dark:[&>path]:fill-white" />
              </button>

              <div className="min-h-[850px] flex items-center bg-secondaryColorDarkD2">
                <img src="/background.png" alt="post" className="w-full h-full object-cover" />
              </div>

              <div className="">h</div>
            </div>
          </TransitionChild>
        </DialogPanel>
      </Dialog>
    </Transition>
  );
};
