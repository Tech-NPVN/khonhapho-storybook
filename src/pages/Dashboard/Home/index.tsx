import { TabRenderProps, Tabs } from '@/components/DataDisplay';
import NewsHome from '@/components/Layout/Home/News';

export const Home = () => {
  const HOME_TABS: TabRenderProps[] = [
    {
      name: 'BẢNG TIN',
      key: 'tab-1',
      children: (
        <>
          <NewsHome />
        </>
      ),
    },
    {
      name: 'BẠN QUAN TÂM',
      key: 'tab-2',
      children: <></>,
    },
  ];

  return (
    <div className="h-full md:w-[920px] " data-mode="dark">
      <div className=" max-w-[400px] relative">
        <Tabs tabs={HOME_TABS} variantTab="fillGreen" />
      </div>
    </div>
  );
};
