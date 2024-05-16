import { TabRenderProps, Tabs } from '@/components/DataDisplay';
import Caring from '@/components/Layout/Home/Caring';
import NewsHome from '@/components/Layout/Home/News';
import { useWindowSize } from '@/hooks/useWindowSize';

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
      children: <Caring />,
    },
  ];

  const windowSize = useWindowSize();

  return (
    <div className="mx-auto max-w-[920px]">
      <Tabs
        tabs={HOME_TABS}
        variantTab="fillGreen"
        widthTabList={windowSize.width < 734 ? 338 : 400}
      />
    </div>
  );
};
