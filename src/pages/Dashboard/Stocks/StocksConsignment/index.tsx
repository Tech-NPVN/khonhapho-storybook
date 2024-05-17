import { TabRenderProps, Tabs } from '@/components/DataDisplay';
import { Typography } from '@/components/General';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useState } from 'react';
import { BookConsignment } from './BookConsignment';
import { BookConsignmentSkeleton } from './BookConsignmentSkeleton';
import { StocksFormFilter } from './StocksFormFilter';

export const StocksConsignment = () => {
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
      children: <StocksFormFilter />,
    },
    {
      name: 'Tin nhanh',
      key: 'tab-2',
      children: <StocksFormFilter />,
    },
    {
      name: 'Tin đã lưu',
      key: 'tab-3',
      children: <StocksFormFilter />,
    },
  ];

  return (
    <div className="flex h-[calc(100vh_-_100px)] px-0 lg:px-8 mx-auto max-w-[1400px] gap-5 lg:gap-0 flex-wrap">
      <div className="order-1 w-full h-full overflow-y-auto lg:order-none lg:flex-1">
        {new Array(index).fill(0).map((_, i) => (
          <BookConsignment key={`book_consignment_${i}`} />
        ))}
        <div ref={loaderRef}>{isLoading && <BookConsignmentSkeleton />}</div>
      </div>
      <div className="lg:w-[460px] w-full p-0 lg:p-[0_16px_16px]">
        <div className="bg-white rounded-lg p-4 lg:sticky static top-20 shadow overflow-y-auto max-h-[calc(710px_-_80px)] overscroll-contain">
          <Typography
            variant="h2"
            className="mb-5 text-sm font-semibold uppercase text-secondaryColorDark dark:text-secondaryColorLight"
          >
            KHO TIN CHÍNH CHỦ
          </Typography>

          <div className="w-full">
            <Tabs
              tabs={CONSIGNMENT_TABS}
              variantTab="fillGray"
              className="flex-1 px-3 text-sm !font-normal h-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
