import { ITabList, ITabPanel, TabList, TabPanel } from '@/components/DataDisplay/TabsV2';
import DepartmentStats from './DepartmentStats';
import OnlineAccount from './OnlineAccount';

const TABS_MANAGEMENT: ITabList = {
  items: ['Tài khoản online', 'Thống kê phòng'],
  name: 'admin-management',
  defaultIndex: 0,
};

const TABS_MANAGEMENT_PANEL: ITabPanel[] = [
  {
    name: TABS_MANAGEMENT.name,
    tabIndex: 0,
    children: <OnlineAccount />,
  },
  {
    name: TABS_MANAGEMENT.name,
    tabIndex: 1,
    children: <DepartmentStats />,
  },
];

export const Management = () => {
  return (
    <section>
      <div className="max-w-[400px] mb-4">
        <TabList className="py-2" {...TABS_MANAGEMENT} />
      </div>
      {TABS_MANAGEMENT_PANEL.map((tab) => (
        <TabPanel {...tab} />
      ))}
    </section>
  );
};
