import { Avatar } from '@/components/DataDisplay';
import { Input } from '@/components/DataEntry';
import {
  AlarmClock,
  Button,
  CheckIcon,
  ClockIcon,
  CloseIcon,
  CommentIcon,
  CopyIcon,
  EyeSolidIcon,
  LikeIcon,
  NoteIcon,
  PhoneEnabledIcon,
  PinSolidIcon,
  ReportIcon,
  SendIcon,
  ShareIcon,
  Typography,
} from '@/components/General';
import { useCopyToClipboard } from '@/hooks/useCopyToClipBoard';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { NoResult } from '../no-result';

type PostModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
};

export const PostModal = ({ open, setOpen, className }: PostModalProps) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Transition appear show={open}>
      <Dialog onClose={() => setOpen(false)}>
        <DialogPanel className="fixed inset-0 w-full bg-[rgba(0,0,0,0.5)] z-50 overflow-scroll h-full flex flex-col justify-center items-center">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 transform-[scale(95%)]"
            enterTo="opacity-100 transform-[scale(100%)]"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 transform-[scale(100%)]"
            leaveTo="opacity-0 transform-[scale(95%)]"
          >
            <div
              className={`w-11/12 min-h-[350px] h-fit rounded-2xl grid lg:grid-cols-11 grid-cols-1 relative overflow-x-hidden bg-primaryColorLight dark:bg-primaryColorDark ${className}`}
            >
              <button onClick={() => setOpen(false)} className="absolute left-5 top-5">
                <CloseIcon className="[&>path]:fill-white" width="15" height="15" />
              </button>

              <div className="col-span-6 min-h-[850px] max-lg:min-h-[650px] flex items-center bg-secondaryColorDarkD2">
                <img src="/background.png" alt="post" className="w-full h-full object-contain" />
              </div>

              <div className="col-span-5 flex flex-col relative">
                <div className="px-3 py-2 flex items-center justify-between border-b-[1px] border-dividerLight/50 dark:border-dividerDark/40">
                  <Typography
                    variant="p"
                    className="text-sm text-textSecondaryLight flex items-center gap-2"
                  >
                    <ClockIcon color="rgba(0, 0, 0, 0.5)" width="16" height="16" />
                    03/01/2024 12:33:54
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-sm text-textSecondaryLight flex items-center gap-2 font-semibold"
                  >
                    Mã số: <span className="text-linkLight dark:text-linkDark">#28463</span>
                  </Typography>
                </div>

                <div className="px-3 py-4 flex items-center justify-between">
                  <div className="flex gap-3">
                    <Avatar
                      alt="avatar"
                      height={40}
                      width={40}
                      src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
                    />
                    <div>
                      <Typography variant="h5" className="text-base font-semibold">
                        Nhà Phố Việt Nam
                      </Typography>
                      <Typography className="text-sm text-textSecondaryLight flex items-center gap-2 font-semibold">
                        8 giờ trước · Quy định và Hướng dẫn
                      </Typography>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <div className="flex items-center gap-2">
                      <Button variant="outlineRed" className="text-[12px] h-[26px] px-2 py-1">
                        Sổ đỏ/sổ hồng
                      </Button>
                      <Button variant="outlineWhite" className="text-[12px] h-[26px] px-2 py-1">
                        Hạ chào
                      </Button>
                    </div>
                    <Typography className="text-[12px] text-textSecondaryLight font-normal">
                      2 giờ trước
                    </Typography>
                  </div>
                </div>

                <div className="px-3 py-4">
                  <Typography
                    variant="span"
                    className="text-base rounded dark:bg-secondaryColorDark py-1 px-3 font-semibold"
                  >
                    5.75 tỷ - <span className="text-errorLight dark:text-errorDark">79tr/m²</span> -
                    Mặt phố, Thuê ở, Dòng tiền
                  </Typography>
                  <Typography variant="p" className="text-base mt-4">
                    Coffin Dance...
                    <Button variant="ghostBlue" className="h-[28px] px-1">
                      Xem thêm
                    </Button>
                  </Typography>

                  <div className="flex items-center gap-2">
                    <Button variant="ghostBlue" className="p-0 font-normal">
                      #ctnnguyenphuongnam
                    </Button>
                    <Button variant="ghostBlue" className="p-0 font-normal">
                      #nphn
                    </Button>
                    <Button variant="ghostBlue" className="p-0 font-normal">
                      #nphn
                    </Button>
                    <Button variant="ghostBlue" className="p-0 font-normal">
                      #khoi
                    </Button>
                    <Button variant="ghostBlue" className="p-0 font-normal">
                      #khoi
                    </Button>
                    <Button variant="ghostBlue" className="p-0 font-normal">
                      #khoi
                    </Button>
                  </div>

                  <div className="flex items-start justify-between">
                    <Button
                      variant="outlineWhite"
                      className="py-1 px-2 h-[28px]"
                      onClick={() => copyToClipboard('Coffin Dance')}
                      startIcon={
                        isCopied ? (
                          <CheckIcon width="16" height="16" />
                        ) : (
                          <CopyIcon width="16" height="16" />
                        )
                      }
                    >
                      {isCopied ? 'Đã sao chép' : 'Chép'}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-6 px-3 mb-2">
                  <Button
                    variant="ghostWhite"
                    className="h-[30px] p-0 w-full"
                    startIcon={
                      <EyeSolidIcon className="[&>path]:!fill-linkLight dark:[&>path]:!fill-linkDark" />
                    }
                  >
                    200
                  </Button>
                  <Button
                    variant="ghostWhite"
                    className="h-[30px] p-0 w-full"
                    startIcon={
                      <PinSolidIcon className="[&>path]:!fill-errorLight dark:[&>path]:!fill-errorDark" />
                    }
                  >
                    200
                  </Button>
                  <Button
                    variant="ghostWhite"
                    className="h-[30px] p-0 w-full"
                    startIcon={
                      <PhoneEnabledIcon className="[&>path]:!fill-primaryButtonLight dark:[&>path]:!fill-primaryButtonDark" />
                    }
                  >
                    Điện thoại
                  </Button>
                  <Button
                    variant="ghostWhite"
                    className="h-[30px] p-0 w-full"
                    startIcon={<AlarmClock />}
                  >
                    Đặt lịch
                  </Button>
                  <Button
                    variant="ghostWhite"
                    className="h-[30px] p-0 w-full"
                    startIcon={<NoteIcon />}
                  >
                    Ghi chú
                  </Button>
                  <Button
                    variant="ghostWhite"
                    className="h-[30px] p-0 w-full"
                    startIcon={<ReportIcon />}
                  >
                    Báo cáo dẫn khách
                  </Button>
                </div>

                <div className="flex py-1 px-3 items-center justify-between border-b-[1px] border-t-[1px] border-dividerLight/50 dark:border-dividerDark/40">
                  <Button variant="ghostWhite" className="flex-1" startIcon={<LikeIcon />}>
                    Thích
                  </Button>
                  <Button variant="ghostWhite" className="flex-1" startIcon={<CommentIcon />}>
                    Bình luận
                  </Button>
                  <Button variant="ghostWhite" className="flex-1" startIcon={<ShareIcon />}>
                    Chia sẻ
                  </Button>
                </div>

                <div className="mt-6 min-h-[250px]">
                  <NoResult />
                </div>

                <div className="flex gap-2 mt-4 px-3 py-3 absolute bottom-0 left-0 right-0 bg-primaryColorLight dark:bg-primaryColorDark">
                  <Avatar
                    alt="avatar"
                    height={40}
                    width={40}
                    src="https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ddKWmEtLX2W-UyEi6HzRg~HaaYN6KsDFuEAOu7Vl4brlTWYIttWq4LSRBkJTkmn6GALE0V2Fhik2kdPjAo~aAnLugu0zjNHEWrKHKTwCH3XaUjYGk4rX3o~xS8eiFrRUxSxklglUV3nUfLMTs0TGwt4OP8mOH9Q7jgTnHTTwsN2RRBOEHLIIm0T4PR25hWEh7WOGnLPnRTb~2ivohTt~IM3I4NunbrvT~nUKG1PYZGvPigJDRn2G4JkaRt4oEHjdEYjFC1UFnLEq59bnvOzgfumKkwGEv4pioqeL6lofZc2hbudFf8aV1VHmBXaLIb9Q42~a~dOO5SrSk3L9XfIUeg__"
                  />

                  <Input
                    suffixIcon={<SendIcon />}
                    placeholder="Viết bình luận..."
                    className="rounded-full bg-secondaryColorLightD2"
                  />
                </div>
              </div>
            </div>
          </TransitionChild>
        </DialogPanel>
      </Dialog>
    </Transition>
  );
};
