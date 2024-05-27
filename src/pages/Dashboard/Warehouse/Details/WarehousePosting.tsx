import { Avatar } from '@/components/DataDisplay';
import { Tag } from '@/components/DataDisplay/Tag';
import { Input, Rate } from '@/components/DataEntry';
import {
  AlarmClock,
  CameraIcon,
  CheckIcon,
  ClockIcon,
  CloseIcon,
  CommentIcon,
  CopyIcon,
  CounterClockwiseClock,
  EyeIcon,
  HeartIcon,
  MessageIcon,
  PhoneIcon,
  PinSolidIcon,
  SendIcon,
  ShareIcon,
  SuitableIcon,
  Typography,
} from '@/components/General';
import { useCopyToClipboard } from '@/hooks/useCopyToClipBoard';
import { useOutsideClickClose } from '@/hooks/useOutsideClickClose';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { StatusTag } from '../List';
import { ReportsButton } from '../List/ReportsButton';
import { Comment_Demo, IComment, IPosting } from '../const';
import { dateToStringDate, dateToStringTime, getTimeAgo } from '../helpers';
export const WarehousePosting = ({
  data,
  type = 'list',
}: {
  data: IPosting;
  type?: 'list' | 'modal';
}) => {
  const [cmts, setCmts] = useState<IComment[]>(Comment_Demo.slice(0, 3));
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const [showModalComment, setShowModalComment] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputCommentRef = useRef<HTMLInputElement>(null);
  useOutsideClickClose(modalRef, () => {
    setShowModalComment(false);
  });

  return (
    <>
      <div className="flex flex-wrap bg-[#FFFFFF] dark:bg-primaryColorDark dark:text-textPrimaryDark rounded-md relative ">
        <div
          className={clsx(
            'w-full',
            type === 'list'
              ? ' h-full'
              : 'lg:h-[calc(95vh_-_70px)] lg:overflow-x-hidden overflow-y-auto',
          )}
        >
          {/* header */}
          <div className="w-full">
            <div className="flex justify-between px-3 py-2">
              <div className="text-[12px] flex gap-1">
                <span className="mt-[2px]">
                  <ClockIcon />
                </span>
                <span>{dateToStringDate(new Date(data.updated_ad))}</span>
                <span>{dateToStringTime(new Date(data.updated_ad))}</span>
              </div>
              <div className="text-[12px] flex gap-1">
                <span>Mã số:</span>
                <span className="text-blue-600">#1506</span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-black/20"></div>
          </div>

          <div>
            <div>
              {/* Thông tin bài viết */}
              <div className="py-5 px-3">
                <div className="flex justify-between items-center ">
                  <div className="flex items-center gap-2">
                    <Avatar
                      alt="avatar"
                      height={40}
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
                    />
                    <div>
                      <h3 className="text-[14px] font-medium dark:text-[#74CF5A]">
                        {data?.owner.fullName}
                      </h3>
                      <div className="flex md:hidden gap-2 items-center">
                        <Rate rating={5} /> <Typography variant="span">5,0</Typography>
                      </div>
                      <div className="md:flex gap-2 items-center text-textSecondaryLight text-[14px] hidden">
                        <span className="dark:text-textSecondaryDark">
                          {getTimeAgo(new Date(data?.last_online))}
                        </span>
                        <span className="dark:text-linkDark">·</span>
                        <span className="dark:text-linkDark">{data?.categories}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 relative">
                    <div className="absolute w-52 right-0 top-0 flex justify-end flex-wrap">
                      <div className="flex gap-2 items-center w-full justify-end">
                        <div className="rounded text-[12px] px-1 border hidden md:block text-[#FF4D4F] bg-white dark:bg-white/10 border-[#D4390F]">
                          {data?.legal_status.label}
                        </div>
                        <StatusTag status={data.status}></StatusTag>
                      </div>
                      <Typography
                        variant="span"
                        className="text-[12px] text-textSecondaryLight dark:text-textSecondaryDark flex justify-end"
                      >
                        {getTimeAgo(new Date(data?.updated_ad))}
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <Typography variant="p">
                    {data?.spec.price} -{' '}
                    <Typography variant="span" className="text-red-300">
                      {data?.spec.price_unit}
                    </Typography>
                    - {data?.property_feature}
                  </Typography>

                  <p className="mt-4">{data?.content}</p>

                  <div className="flex gap-2 text-linkLight dark:text-linkDark flex-wrap">
                    {data?.tags.map((tag, i) => (
                      <span key={'tag-' + i} className="cursor-pointer hover:underline">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <Tag
                      className={`[&>span]:flex [&>span]:gap-0.5 [&>span]:text-[12px] min-w-[56px]  [&>span]:items-center ${isCopied ? '[&>span]:cursor-not-allowed' : '[&>span]:cursor-pointer'}`}
                      onClick={() => copyToClipboard(data?.content)}
                    >
                      {isCopied ? (
                        <>
                          <CheckIcon width="14" height="14" />
                          <p>Đã sao chép</p>
                        </>
                      ) : (
                        <>
                          <CopyIcon width="14" height="14" />
                          <p>Chép</p>
                        </>
                      )}
                    </Tag>
                    <div className="md:flex items-center gap-4 hidden ">
                      <div className="flex items-center gap-3 cursor-pointer">
                        <SuitableIcon />
                        <Typography variant="p">Khách phù hợp</Typography>
                      </div>
                      <div className="flex items-center gap-3 cursor-pointer">
                        <CounterClockwiseClock />
                        <Typography variant="p">Lịch sử chỉnh sửa</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {type == 'list' && (
                <div className="relative px-3">
                  <div className=" inset-0 ">
                    <div
                      // className="flex flex-wrap justify-between"
                      className="grid md:grid-cols-4 grid-cols-2 gap-1"
                    >
                      {data?.images.map((url: string, index) => {
                        return index < 4 ? (
                          <a href="#!" key={url} className={` ${index === 3 ? 'relative' : ''}`}>
                            <img
                              key={index}
                              src={url}
                              className={`h-[30vw] md:h-[20vw] object-cover w-full`}
                            />
                            {data.images.length > 4 && index === 3 && (
                              <>
                                <div className="absolute inset-0 hover:bg-black/50"></div>
                                <div className="absolute  inset-0 flex justify-center gap-2 items-center text-slate-200 text-[20px] md:text-[30px] lg:text-[40px] font-semibold bg-black/50 cursor-pointer">
                                  +{data.images.length - 4} <span className="md:hidden"> Ảnh</span>
                                </div>
                              </>
                            )}
                          </a>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              )}

              <div className="px-3">
                <div className="flex justify-between flex-wrap mt-3 text-textSecondaryLight dark:textSecondaryDark md:pt-[5px]">
                  <div className="flex items-center gap-1 md:gap-4 text-[14px]">
                    <div className="flex items-center gap-2">
                      <EyeIcon color="#1677FF" />
                      <span className="text-textPrimaryLight dark:text-textPrimaryDark">
                        {data.view_count}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PinSolidIcon color="#FF4D4F" />
                      <span className="text-textPrimaryLight dark:text-textPrimaryDark">
                        {data?.save_count}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[14px]">
                    <div className="flex items-center cursor-pointer">
                      <a
                        className="flex items-center gap-2"
                        href={'tel:' + data.owner.phone}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PhoneIcon color="#197D16" />
                        <span
                          className={clsx(
                            'hidden dark:text-white',
                            type === 'modal' ? 'hidden' : 'lg:block',
                          )}
                        >
                          Điện thoại
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      {data.owner.zalo && (
                        <a
                          className="flex items-center gap-3"
                          href={'https://zalo.me/' + data.owner.phone}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://s3-alpha-sig.figma.com/img/9d24/9f6c/6b53792649a38af984e3a9140d78d33d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ka8nQ-MIIIvVwxd8pBj8Vfokpp11zuN1UAQsY5tPxgDU7GAteKYoDrTIngi-SKU5xprHEe0553Fjwp2cmyWPQGyGc7mYj4x3c-tdnAygGkqDq1QIKsSLqNqrYMlgCyOa6-TJ3KcMLZAr5GhCsi70Hy0y~sSoL0nl7F8g9FBQqO03WrVleXPNOXm9FLOd8zAPZX4OQaJVMzlWkJJZ51GStZ8BPWyuJXgXp5a4THcVzNp5CDYbdHJ~Id5AT0-W7GmRhkX6EIU2TrfZlKWXxLkQph60fLXKYWfgTyQxW9-dtXodIx8nm7-gAsxxc5ou~Nx8uupukzBOFUs6JX2Q1L~yGg__"
                            alt=""
                            width={16}
                            height={16}
                            className="rounded-md"
                          />
                          <span
                            className={clsx(
                              'hidden dark:text-white',
                              type === 'modal' ? 'hidden' : 'lg:block',
                            )}
                          >
                            Zalo
                          </span>
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      {data.owner.message && (
                        <a
                          className="flex items-center gap-3"
                          href={data.owner.message}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageIcon />
                          <span
                            className={clsx(
                              'hidden dark:text-white',
                              type === 'modal' ? 'hidden' : 'lg:block',
                            )}
                          >
                            Messenger
                          </span>
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <AlarmClock />
                      <span
                        className={clsx(
                          'hidden dark:text-white',
                          type === 'modal' ? 'hidden' : 'lg:block',
                        )}
                      >
                        Đặt lịch
                      </span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <PinSolidIcon />
                      <span
                        className={clsx(
                          'hidden dark:text-white',
                          type === 'modal' ? 'hidden' : 'lg:block',
                        )}
                      >
                        Lưu
                      </span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <ReportsButton data={data}>
                        <span
                          className={clsx(
                            'hidden dark:text-white ms-1',
                            type === 'modal' ? 'hidden' : 'lg:block',
                          )}
                        >
                          Báo cáo dẫn khách
                        </span>
                      </ReportsButton>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="mt-2 border flex items-center border-[#D9D9D9] h-[46px] border-r-0 border-l-0	w-full">
                <li style={{ width: '33%' }}>
                  <button className="flex items-center gap-2  justify-center h-[32px] py-2 px-4 w-full">
                    <HeartIcon color="#F95E73" />
                    <p>Thích</p>
                  </button>
                </li>

                <li style={{ width: '33%' }}>
                  <button
                    className="flex items-center gap-2 justify-center h-[32px] w-full"
                    onClick={() => {
                      type === 'modal'
                        ? inputCommentRef.current?.focus()
                        : setShowModalComment(true);
                    }}
                  >
                    <CommentIcon />
                    <p>Bình luận</p>
                  </button>
                </li>

                <li style={{ width: '33%' }}>
                  <Popover className="relative">
                    <PopoverButton className="flex items-center justify-center gap-2 h-[32px] py-2 w-full">
                      <ShareIcon />
                      <p className="text-[14px]">Chia sẻ</p>
                    </PopoverButton>
                    <Transition
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <PopoverPanel anchor="bottom" className="flex flex-col mt-2 shadow-xl">
                        <div
                          className="bg-white py-2 px-4 flex items-center gap-4 rounded-md cursor-pointer w-[300px] shadow-2xl"
                          style={{
                            boxShadow:
                              '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                          }}
                        >
                          <CopyIcon />
                          <p className="text-[14px]">Sao chép liên kết</p>
                        </div>
                      </PopoverPanel>
                    </Transition>
                  </Popover>
                </li>
              </ul>
              <div className={clsx('py-5 px-3 ', type === 'modal' ? 'flex' : 'md:flex hidden')}>
                <div
                  className={clsx('w-full ', type === 'list' ? 'max-h-[500px] overflow-auto' : '')}
                >
                  {cmts.map((comment, i) => (
                    <div key={'comment-' + i} className="flex gap-2 mt-4">
                      <Avatar alt="avatar" height={40} width={40} src={comment?.user?.avatar} />
                      <div className="flex flex-col ">
                        <div className="px-2 py-2 bg-[#F3F4F6] dark:bg-secondaryColorDark rounded-md">
                          <div>
                            <div className="flex gap-2 items-center text-black text-[14px] font-semibold dark:text-[#74CF5A]">
                              <h3 className="text-sm font-bold">{comment?.user?.fullName}</h3>
                              {/* <span>·</span>
                  <span>Quy định và Hướng dẫn</span> */}
                            </div>
                            <p className="text-primaryTextDark">{comment.content}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-2 dark:text-textSecondaryDark text-[12px]">
                          <button>Thích</button>
                          <button>Trả lời</button>
                          <p>{getTimeAgo(new Date(comment?.created_at))}</p>
                          <p>Đã chỉnh sửa</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      type === 'modal' ? setCmts(Comment_Demo) : setShowModalComment(true);
                    }}
                    className="mt-2 text-[#000000] dark:text-[#ffffffbb] hover:underline"
                  >
                    Xem thêm bình luận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Input */}
        <div
          className={clsx(
            'pb-5 px-3 w-full bg-white dark:bg-secondaryColorDark',
            type === 'modal' ? ' bottom-0 left-0 right-0' : 'relative',
          )}
        >
          <div className="flex gap-2 mt-4 ">
            <Avatar
              alt="avatar"
              height={40}
              width={40}
              src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
            />

            <Input
              ref={inputCommentRef}
              name="comment"
              suffixIcon={<SendIcon />}
              placeholder="Viết bình luận..."
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'fixed left-0 right-0 top-0 bottom-0 justify-center items-center z-[101] bg-black/20',
          showModalComment ? 'flex' : 'hidden',
        )}
      >
        <div className="relative bg-white dark:bg-primaryColorDark w-[80vw] h-[95vh] overflow-hidden rounded-lg ">
          <div ref={modalRef} className="h-full w-full ">
            <div className="w-full h-12 flex items-center justify-between bg-white dark:bg-secondaryColorDark">
              <span className="text-sm md:text-lg lg:text-xl font-medium px-3 dark:text-white">
                Bình luận tin của {data.owner.position} {data.owner.fullName} • {data.owner.group}
              </span>
              <button
                className="me-5"
                onClick={() => {
                  setShowModalComment(false);
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
                              <span className="hidden md:block">Quy định và Hướng dẫn</span>
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
    </>
  );
};
