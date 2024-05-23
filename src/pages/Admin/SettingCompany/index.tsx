import { Input } from '@/components/DataEntry';

export const SettingCompany = () => {
  return (
    <div className="w-full bg-white rounded-lg dark:bg-secondaryColorDark">
      <h2 className="p-3 text-sm font-medium text-textPrimaryLight dark:text-textPrimaryDark">
        Cài đặt công ty
      </h2>
      <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
      <div className="p-3">
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="avatar"
            className="text-sm text-textPrimaryLight dark:text-textPrimaryDark"
          >
            Avatar công ty:
          </label>
          <div className="w-[100px] h-[100px] border rounded-lg border-dotted">
            <img
              src="https://assets-cdn.khonhapho.com/test/2024_04_22/ta%C2%BA%C2%A3i-xua%C2%BB%C2%91ng-1713854004387.png"
              alt="áddjkasdhkasdj"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-textPrimaryLight dark:text-textPrimaryDark">
            Tên công ty:
          </label>
          <Input id="name" placeholder="Mời nhập tên công ty" value="Nhà phố Việt Nam" />
        </div>
      </div>
    </div>
  );
};
