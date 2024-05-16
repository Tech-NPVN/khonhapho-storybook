import { Popover } from '@/components/DataDisplay';
import { Input } from '@/components/DataEntry';
import { AddIcon, Button, SearchIcon, ThreeDotsIcon, Typography } from '@/components/General';
import { useState } from 'react';
import { UserCollectionCreateOrUpdate } from '../UserCollectionDialog';

export const UserSearchBox = () => {
  const [openCreateOrUpdate, setOpenCreateOrUpdate] = useState<boolean>(false);
  const [typeAction, setTypeAction] = useState<'create' | 'update'>('create');

  return (
    <div className="rounded-lg bg-white dark:bg-primaryColorDark h-full">
      <div className="py-3 px-4 mb-2 flex gap-2">
        <Input className="rounded-e-none rounded-s-lg" placeholder="Nhập tên tìm kiếm" />
        <button className="w-10 h-10 flex justify-center items-center">
          <SearchIcon />
        </button>
      </div>

      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={`${index === 0 ? 'bg-dividerLight/20' : 'bg-transparent'} py-2 px-5 cursor-pointer flex items-center gap-5 transition-all hover:bg-dividerLight/20`}
          >
            <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-tertiaryColorLight dark:text-white dark:bg-tertiaryColorDark">
              M
            </div>
            <div className="flex justify-between items-center w-full">
              <Typography variant="p" className="text-sm font-semibold">
                Mặc định
              </Typography>
              <Popover
                trigger={
                  <ThreeDotsIcon className="hover:bg-secondaryColorLightD2 dark:hover:bg-secondaryColorDark transition-all rounded-full w-6 h-6 p-1" />
                }
                anchor="bottom end"
                itemsPanel={[
                  {
                    content: 'Sửa bộ sưu tập',
                    key: 'update-action',
                    onClick: () => {
                      setTypeAction('update');
                      setOpenCreateOrUpdate(true);
                    },
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

      <div className="mt-4 flex justify-center pb-3">
        <Button
          onClick={() => {
            setOpenCreateOrUpdate(true);
            setTypeAction('create');
          }}
          startIcon={<AddIcon className="[&>path]:fill-white w-5 h-5" />}
        >
          Tạo bộ sưu tập
        </Button>
      </div>

      <UserCollectionCreateOrUpdate
        open={openCreateOrUpdate}
        setOpen={setOpenCreateOrUpdate}
        type={typeAction}
      />
    </div>
  );
};
