import { TabRenderProps, Tabs } from '@/components/DataDisplay';
import NewsHome from '@/components/Layout/Home/News';

export const Home = () => {
  const HOME_TABS: TabRenderProps[] = [
    {
      name: 'BẢNG TIN',
      key: 'tab-1',
      children: <NewsHome />,
    },
    {
      name: 'BẠN QUAN TÂM',
      key: 'tab-2',
      children: <div className="h-full md:w-[920px]"></div>,
    },
  ];

  return (
    <div className="mx-auto max-w-[920px]">
      <Tabs tabs={HOME_TABS} variantTab="fillGreen" />
    </div>
  );
};
