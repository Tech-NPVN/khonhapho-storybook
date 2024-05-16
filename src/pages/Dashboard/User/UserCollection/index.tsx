import { UserSearchBox } from './UserSearchBox';
import { UserViewBox } from './UserViewBox';

export const UserCollection = () => {
  return (
    <section className="grid grid-cols-12 gap-5 md:h-[900px]">
      <div className="col-span-3 max-md:col-span-12">
        <UserSearchBox />
      </div>
      <div className="col-span-9 max-md:col-span-12">
        <UserViewBox />
      </div>
    </section>
  );
};
