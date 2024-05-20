import { PostModal } from '@/common/components';
import { Popover } from '@/components/DataDisplay';
import { IOption, Select } from '@/components/DataEntry';
import { Button, ThreeDotsIcon, Typography } from '@/components/General';
import { useState } from 'react';
import { UserCollectionNoteForm, UserSaveToCollection } from '../UserCollectionDialog';

const NEWS_OPTIONS: IOption[] = [
  {
    label: 'Tin mới nhất',
    value: 'last-news',
  },
  {
    label: 'Tin cũ nhất',
    value: 'oldest-news',
  },
  {
    label: 'Giá cao nhất',
    value: 'highest-price',
  },
  {
    label: 'Giá thấp nhất',
    value: 'lowest-price',
  },
];

export const UserViewBox = () => {
  const [openSaveToCollection, setOpenSaveToCollection] = useState<boolean>(false);
  const [openNoteCollection, setOpenNoteCollection] = useState<boolean>(false);
  const [openPostDetails, setOpenPostDetails] = useState<boolean>(false);

  return (
    <div className="w-full lg:px-24">
      <Typography variant="h3">Mặc định</Typography>

      <div className="w-52 mt-5 ml-auto">
        <Select options={NEWS_OPTIONS} value={NEWS_OPTIONS[0]} />
      </div>

      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            className="bg-white dark:bg-primaryColorDark rounded-lg flex items-start gap-5 mb-4 p-3 mt-5"
            key={index}
          >
            <div
              className="relative w-[122px] h-[122px] rounded overflow-hidden shrink-0 cursor-pointer"
              onClick={() => setOpenPostDetails(true)}
            >
              <img src="/background.png" alt="" className="object-cover w-full h-full" />
              <p className="absolute bottom-0 left-0 right-0 py-1 rounded bg-primaryButtonLight text-white text-center">
                Hạ chào
              </p>
            </div>
            <div className="flex-1">
              <Typography
                variant="p"
                className="line-clamp-2 cursor-pointer"
                onClick={() => setOpenPostDetails(true)}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, fugiat error iusto
                voluptatem mollitia, libero provident laboriosam possimus officia totam ad. Aut,
                distinctio debitis quasi exercitationem nostrum possimus magnam obcaecati!
              </Typography>
              <Typography variant="span" className="flex items-center gap-2">
                Mô tả:
                <Button variant="ghostBlue" className="p-0">
                  #ctnnguyenphuongnam
                </Button>
                <Button variant="ghostBlue" className="p-0">
                  #nphn
                </Button>
                <Button variant="ghostBlue" className="p-0">
                  #khoi
                </Button>
              </Typography>

              <div className="flex items-center gap-3">
                <button
                  className="border border-dividerLight rounded dark:border-dividerDark dark:text-white px-4 py-1"
                  onClick={() => setOpenNoteCollection(true)}
                >
                  Ghi chú
                </button>
                <button
                  className="border border-dividerLight rounded dark:border-dividerDark dark:text-white px-4 py-1"
                  onClick={() => setOpenSaveToCollection(true)}
                >
                  Thêm vào bộ sưu tập
                </button>
              </div>
            </div>

            <div className="self-end pl-4">
              <Popover
                trigger={
                  <ThreeDotsIcon className="hover:bg-secondaryColorLightD2 dark:hover:bg-secondaryColorDark transition-all rounded-full w-6 h-6 p-1" />
                }
                anchor="bottom end"
                itemsPanel={[
                  {
                    content: 'Sửa bộ sưu tập',
                    key: 'update-action',
                  },
                  {
                    content: 'Xoá bộ sưu tập',
                    key: 'remove-action',
                    className:
                      'text-errorLight hover:!text-white hover:!bg-errorLight dark:hover:!text-white dark:hover:!bg-errorDark dark:!text-errorDark',
                  },
                ]}
              />
            </div>
          </div>
        ))}

      {/* <div className="bg-white dark:bg-primaryColorDark rounded-lg py-10 mt-5">
        <NoResult />
      </div> */}
      <UserCollectionNoteForm open={openNoteCollection} setOpen={setOpenNoteCollection} />
      <UserSaveToCollection open={openSaveToCollection} setOpen={setOpenSaveToCollection} />

      <PostModal open={openPostDetails} setOpen={setOpenPostDetails} />
    </div>
  );
};
