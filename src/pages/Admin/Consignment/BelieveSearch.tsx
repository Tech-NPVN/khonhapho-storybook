import { Input } from '@/components/DataEntry';
import { SearchIcon } from '@/components/General';

export const BelieveSearch = () => {
  return (
    <div className="mt-5">
      <div className="flex">
        <Input
          className="w-[calc(100%-40px)] rounded-e-none rounded-s-lg dark:bg-[rgba(58,59,60,1)] dark:text-textPrimaryDark"
          placeholder="Nội dung tìm kiếm..."
        />
        <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
          <SearchIcon color="white" />
        </button>
      </div>
    </div>
  );
};
