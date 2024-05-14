import { useParams } from 'react-router-dom';
import UserElement from './UserElement';
import UserMain from './UserMain';

export const User = () => {
  const { id } = useParams();

  return (
    <section className="max-w-[950px]">
      <UserMain />
      <div className="grid grid-cols-11 gap-4 mt-5">
        <div className="col-span-5 flex flex-col gap-5">
          <UserElement title="Giới thiệu">
            <></>
          </UserElement>
          <UserElement title="Đánh giá">
            <></>
          </UserElement>
          <UserElement title="Thành tích">
            <></>
          </UserElement>
        </div>
        <div className="col-span-6"></div>
      </div>
    </section>
  );
};
