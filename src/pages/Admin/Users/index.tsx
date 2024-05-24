import { ITabList, ITabPanel, TabList, TabPanel } from '@/components/DataDisplay/TabsV2';
import { AddIcon, Button } from '@/components/General';
import { useState } from 'react';
import Member from './Member';
import { CreateOrUpdate } from './Member/Form';
import TrainingDepartment from './TrainingDepartment';

const TABS_USERS: ITabList = {
  items: ['Thành viên', 'Ban đào tạo'],
  name: 'admin-users',
  defaultIndex: 0,
};

const TABS_USERS_PANEL: ITabPanel[] = [
  {
    name: TABS_USERS.name,
    tabIndex: 0,
    children: <Member />,
  },
  {
    name: TABS_USERS.name,
    tabIndex: 1,
    children: <TrainingDepartment />,
  },
];

export const Users = () => {
  const [openCreate, setOpenCreate] = useState<boolean>(false);

  return (
    <>
      <section className="w-full rounded-lg bg-white dark:bg-primaryColorDark">
        <div className="flex justify-between items-start p-4 border-b-[1px] border-b-dividerLight/60 dark:border-b-dividerDark/60">
          <div className="w-[300px]">
            <TabList className="py-[6px] uppercase" {...TABS_USERS} />
          </div>
          <Button
            type="button"
            variant="default"
            startIcon={<AddIcon color="white" width="18" height="18" />}
            className="text-base rounded-lg"
            onClick={() => setOpenCreate(true)}
          >
            Thêm
          </Button>
        </div>
        <div className="p-4">
          {TABS_USERS_PANEL.map((tab) => (
            <TabPanel {...tab} />
          ))}
        </div>
      </section>

      <CreateOrUpdate open={openCreate} setOpen={setOpenCreate} />
    </>
  );
};
