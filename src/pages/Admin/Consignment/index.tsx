import { TabRenderProps, Tabs } from '@/components/DataDisplay';
import { Typography } from '@/components/General';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useState } from 'react';
import { BelieveConsignment } from './BelieveConsignment';
import { BelieveConsignmentSkeleton } from './BelieveConsignmentSkeleton';
import { BelieveSearch } from './BelieveSearch';

export const Consignment = () => {
  const [index, setIndex] = useState(3);

  const fetchNextApi = () => {
    setIndex((prevIndex) => prevIndex + 3);
    setIsLoading(false);
  };
  const { isLoading, setIsLoading, loaderRef } = useIntersectionObserver(fetchNextApi);

  const CONSIGNMENT_TABS: TabRenderProps[] = [
    {
      name: 'Tin chính chủ',
      key: 'tab-1',
      children: <BelieveSearch />,
    },
    {
      name: 'Tin nhanh',
      key: 'tab-2',
      children: <BelieveSearch />,
    },
  ];

  return (
    <div className="flex h-[calc(100vh_-_100px)] px-0 lg:px-8 mx-auto max-w-[1400px] gap-5 lg:gap-0 flex-wrap">
      <div className="order-1 w-full h-full overflow-y-auto lg:order-none lg:flex-1">
        {new Array(index).fill(0).map((_, i) => (
          <BelieveConsignment key={`consignment-${i}`} />
        ))}
        <div ref={loaderRef}>{isLoading && <BelieveConsignmentSkeleton />}</div>
      </div>
      <div className="p-0 lg:p-[0_16px_16px]">
        <div className="lg:w-[250px] w-full bg-white dark:bg-primaryColorDark  rounded-lg p-4 lg:sticky static top-20 shadow overflow-y-auto max-h-[calc(710px_-_80px)] overscroll-contain">
          <Typography
            variant="h2"
            className="mb-5 text-base font-semibold uppercase text-secondaryColorDark dark:text-secondaryColorLight"
          >
            Quản lý tin chính chủ
          </Typography>

          <div className="w-full">
            <Tabs
              tabs={CONSIGNMENT_TABS}
              variantTab="fillGray"
              className="text-sm font-normal m-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
