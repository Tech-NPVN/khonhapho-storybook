import { ITabList, ITabPanel, TabList, TabPanel } from '@/components/DataDisplay/TabsV2';
import { Input, Select } from '@/components/DataEntry';
import { SearchIcon, Typography } from '@/components/General';
import MemberBlocked from './MemberBlocked';
import MemberCollab from './MemberCollab';
import MemberExpired from './MemberExpired';
import MemberInactive from './MemberInactive';

const TabsListItem = ({ title, count }: { title: string; count: number }) => {
  return (
    <div className="flex items-center gap-1">
      <span>{title}</span>
      <span className="badge-red">{count}</span>
    </div>
  );
};

const TABS_MEMBER: ITabList = {
  items: [
    <TabsListItem title="Đang hợp tác" count={112} key="dang-hop-tac" />,
    <TabsListItem title="Sắp hết hạn" count={0} key="sap-het-han" />,
    <TabsListItem title="Đã khoá" count={571} key="da-khoa" />,
    <TabsListItem title="Chưa kích hoạt" count={23} key="chua-kich-hoat" />,
  ],
  name: 'admin-users-member',
  defaultIndex: 0,
};

const TABS_MEMBER_PANEL: ITabPanel[] = [
  {
    name: TABS_MEMBER.name,
    tabIndex: 0,
    children: <MemberCollab />,
  },
  {
    name: TABS_MEMBER.name,
    tabIndex: 1,
    children: <MemberExpired />,
  },
  {
    name: TABS_MEMBER.name,
    tabIndex: 2,
    children: <MemberBlocked />,
  },
  {
    name: TABS_MEMBER.name,
    tabIndex: 3,
    children: <MemberInactive />,
  },
];

const Member = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-1">
        <Input
          className="bg-white dark:bg-primaryColorDark w-full rounded-md col-span-1 col-start-3"
          placeholder="Nhập nội dung tìm kiếm"
          suffixIcon={
            <button className="relative flex left-3 items-center justify-center w-12 h-10 rounded-s-none bg-primaryButtonLight rounded-e-md">
              <SearchIcon color="white" />
            </button>
          }
        />
        <Select placeholder="Chức vụ" />
        <Select placeholder="Chi nhánh" />
        <Select placeholder="Phòng ban" disabled />
      </div>

      <div className="py-5">
        <div className="w-full h-auto lg:w-[750px]">
          <TabList className="py-[6px] text-sm" {...TABS_MEMBER} />
        </div>

        <Typography variant="p" className="text-[15px] py-6">
          Tổng số thành viên: <strong className="font-semibold">1769</strong>
        </Typography>

        {TABS_MEMBER_PANEL.map((tab) => (
          <TabPanel {...tab} />
        ))}
      </div>
    </>
  );
};

export default Member;
