import { Skeleton } from '@/components/Feedback';

export const BookConsignmentSkeleton = () => {
  return (
    <div className="px-4 py-3 mb-5 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <Skeleton width={60} height={60} className="rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton width={150} height={25} />
            <Skeleton width={250} height={15} />
          </div>
        </div>
        <Skeleton width={170} height={22} />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <Skeleton className="!w-full" height={24} />

        <div className="flex">
          <div className="flex items-center flex-1 space-x-1">
            <Skeleton width={50} height={20} />
            <Skeleton width={50} height={20} />
          </div>
          <div className="flex items-center flex-1 space-x-1">
            <Skeleton width={50} height={20} />
            <Skeleton width={50} height={20} />
          </div>
        </div>
        <div className="flex items-center flex-1 space-x-1">
          <Skeleton width={50} height={20} />
          <Skeleton width={200} height={20} />
        </div>
        <div className="flex items-center flex-1 space-x-1">
          <Skeleton width={50} height={20} />
          <Skeleton className="!w-full" height={20} />
        </div>
        <div className="mt-3 text-sm text-primaryColorDark dark:text-primaryColorLight">
          <Skeleton className="!w-full" height={50} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <Skeleton width={70} height={24} />
        <div className="flex items-center gap-3">
          <Skeleton width={90} height={32} />
          <Skeleton width={60} height={32} />
        </div>
      </div>
    </div>
  );
};
