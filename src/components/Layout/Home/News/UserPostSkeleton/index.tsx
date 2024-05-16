import { Skeleton } from '@/components/Feedback';

const UserPostSkeleton = () => {
  return (
    <div className="p-3 mt-6 bg-[#FFFFFF] dark:bg-primaryColorDark rounded-md">
      <div className="flex flex-col gap-10">
        <div className="flex justify-start items-center gap-4">
          <Skeleton width={60} height={60} className="rounded-full" />
          <div className="flex flex-col gap-3">
            <Skeleton width={150} height={25} />
            <Skeleton width={250} height={15} />
          </div>
        </div>
      </div>
      <Skeleton width={250} height={20} className="mt-4"></Skeleton>
      <div className="flex flex-col gap-4 my-4 ">
        <Skeleton className="!w-full md:w-[890px]"></Skeleton>
        <Skeleton className="!w-full md:w-[890px]"></Skeleton>
        <Skeleton className="!w-full md:w-[890px]"></Skeleton>
        <Skeleton className="!w-full md:w-[890px]"></Skeleton>
      </div>
      <Skeleton className="!w-full md:w-[400px]"></Skeleton>
    </div>
  );
};

export default UserPostSkeleton;
