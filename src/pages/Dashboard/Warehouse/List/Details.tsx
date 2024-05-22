import { Avatar } from '@/components/DataDisplay';
import { Input } from '@/components/DataEntry';
import {
  AngleNextIcon,
  AnglePrevIcon,
  CameraIcon,
  CloseIcon,
  SendIcon,
} from '@/components/General';
import { useOutsideClickClose } from '@/hooks/useOutsideClickClose';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { WarehousePosting } from '../Details/WarehousePosting';
import { Comment_Demo, IPosting } from '../const';
import { getTimeAgo } from '../helpers';
export const PostingDetails = ({
  show = true,
  onClose,
  data,
}: {
  show?: boolean;
  onClose?: () => void;
  data: IPosting;
}) => {
  const [index, setIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const [showAllComments, setShowAllComments] = useState(false);
  const handleCloseModal = () => {
    showAllComments ? setShowAllComments(false) : onClose?.();
  };
  useOutsideClickClose(modalRef, handleCloseModal);

  return (
    <>
      <Transition appear show={show}>
        <Dialog
          onClose={handleCloseModal}
          onClick={(e) => {
            e.stopPropagation();
            handleCloseModal();
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
                          {data.owner.position} {data.owner.fullName} • {data.owner.groups}
                        </span>
                      </div>
                    </div>
                    <div className=" w-full lg:w-1/2 h-[100%] relative overflow-hidden">
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
                      <WarehousePosting
                        type="modal"
                        data={data}
                        setShowAllComments={setShowAllComments}
                      />
                    </div>
                  </div>
                  <div
                    className={clsx(
                      ' absolute left-0 right-0 top-0 bottom-0 justify-center items-center z-[101]',
                      showAllComments ? 'flex' : 'hidden',
                    )}
                  >
                    <div className="relative bg-white dark:bg-primaryColorDark w-full h-full">
                      <div className="w-full h-12 flex items-center justify-between bg-white dark:bg-secondaryColorDark">
                        <span className="text-xl font-medium px-3 dark:text-white">
                          Bình luận tin của {data.owner.position} {data.owner.fullName} •{' '}
                          {data.owner.groups}
                        </span>
                        <button
                          className="me-5"
                          onClick={() => {
                            setShowAllComments(false);
                          }}
                        >
                          <CloseIcon
                            width="20"
                            color="#"
                            className="fill-black dark:fill-white"
                            height="20"
                          />
                        </button>
                      </div>
                      <hr className="dark:border-white/30" />
                      <div className="h-[calc(95vh_-_150px)] overflow-x-hidden overflow-y-auto px-3">
                        <div>
                          {Comment_Demo.map((cmt, i) => {
                            return (
                              <div className="flex gap-2 mt-4 " key={`avatar_${i}`}>
                                <Avatar alt="avatar" height={40} width={40} src={cmt.user.avatar} />
                                <div className="flex flex-col ">
                                  <div className="px-2 py-2 bg-[#F3F4F6] dark:bg-secondaryColorDark rounded-md">
                                    <div>
                                      <div className="flex gap-2 items-center text-black text-[14px] font-semibold dark:text-[#74CF5A]">
                                        <h3 className="text-[14px]">{cmt.user.fullName}</h3>
                                        <span className="hidden md:block">·</span>
                                        <span className="hidden md:block">
                                          Quy định và Hướng dẫn
                                        </span>
                                      </div>
                                      <p className="dark:text-textPrimaryDark text-textPrimaryLight">
                                        {cmt.content}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-4 mt-2 dark:text-textSecondaryDark text-[12px]">
                                    <button>Thích</button>
                                    <button>Trả lời</button>
                                    <p>{getTimeAgo(new Date(cmt.created_at))}</p>
                                    <p>Đã chỉnh sửa</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="px-3 pt-3">
                        <div className="flex w-full gap-2">
                          <Avatar
                            alt="avatar"
                            height={40}
                            width={40}
                            src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
                          />
                          <div className="relative w-full border rounded-md bg-primaryColorLight dark:bg-secondaryColorDark">
                            <Input
                              placeholder="Viết bình luận"
                              className="bg-transparent border-none dark:bg-transparent"
                            />
                            <div className="flex items-center justify-between gap-1 p-2">
                              <div className="flex items-center gap-1">
                                <CameraIcon className="cursor-pointer" />
                                <CameraIcon className="cursor-pointer" />
                                <CameraIcon className="cursor-pointer" />
                                <CameraIcon className="cursor-pointer" />
                              </div>
                              <SendIcon className="cursor-pointer" />
                            </div>
                          </div>
                        </div>
                      </div>
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
