import { NoResult } from '@/common/components';
import { Input, Rate } from '@/components/DataEntry';
import { Progress } from '@/components/Feedback';
import {
  BirthdayIcon,
  BuildingIcon,
  EmailIcon,
  GitBranchIcon,
  PhoneIcon,
  SearchIcon,
  Typography,
} from '@/components/General';
import { useParams } from 'react-router-dom';
import UserElement from './UserElement';
import UserMain from './UserMain';

const USER_INTRODUCE_DEMO = [
  {
    icon: <GitBranchIcon />,
    content: 'Nhà phố Việt Nam - Hà Nội',
  },
  {
    icon: <BuildingIcon />,
    content: 'HANOICODE',
  },
  {
    icon: <PhoneIcon />,
    content: '0912468689',
  },
  {
    icon: <EmailIcon />,
    content: 'nhaphovietnam@gmail.com',
  },
  {
    icon: <BirthdayIcon />,
    content: 'Sinh năm 2000',
  },
];

const USER_EVALUATION_DEMO = {
  rate: 3.4,
  rateCount: 2,
  rateTop: [1, 0, 0, 0, 1],
};

export const UserProfile = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-center">
      <section className="max-w-[950px]">
        <UserMain id={id} />
        <div className="grid grid-cols-11 gap-4 mt-5 max-md:flex max-md:flex-col max-md:items-center">
          <div className="col-span-5 flex flex-col gap-5 w-full">
            <UserElement title="Giới thiệu">
              {USER_INTRODUCE_DEMO.map((item) => (
                <div className="flex items-center gap-3 mb-[6px]" key={item.content}>
                  {item.icon}
                  <Typography variant="span" className="max-md:text-sm">
                    {item.content}
                  </Typography>
                </div>
              ))}
            </UserElement>

            <UserElement title="Đánh giá">
              <Rate
                rating={USER_EVALUATION_DEMO.rate}
                size="large"
                className="flex justify-center gap-2 mb-5"
              />
              <hr className="w-full h-[0.5px] bg-textSecondaryDark dark:opacity-20" />
              <div className="grid grid-cols-11 gap-4 mt-6 items-center">
                <div className="col-span-6">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="flex items-center justify-start gap-2">
                        <Typography variant="span">{index + 1}</Typography>
                        <Progress width={160} percent={USER_EVALUATION_DEMO.rateTop[index] * 50} />
                      </div>
                    ))
                    .reverse()}
                </div>

                <div className="col-span-5 flex flex-col justify-center items-center gap-3">
                  <Typography className="text-5xl max-md:text-3xl font-semibold mb-2">
                    {USER_EVALUATION_DEMO.rate}
                  </Typography>
                  <Rate rating={USER_EVALUATION_DEMO.rate} className="flex gap-1" />
                  <Typography variant="p" className="max-md:text-sm">
                    {USER_EVALUATION_DEMO.rateCount} đánh giá
                  </Typography>
                </div>
              </div>
            </UserElement>

            <UserElement title="Thành tích">
              <div className="flex items-center gap-3 rounded-sm">
                <img src="/images/avatar.png" alt="avatar" />
                <Typography variant="span" className="max-md:text-sm">
                  Tester đỉnh nhất Việt Nam
                </Typography>
              </div>
            </UserElement>
          </div>
          <div className="col-span-6 w-full">
            <div className="flex gap-4 max-md:flex-col">
              <Input
                sizeInput="large"
                className="bg-white dark:bg-primaryColorDark border-none"
                placeholder="khách cần mua gấp"
              />
              <Input
                sizeInput="large"
                className="bg-white dark:bg-primaryColorDark border-none"
                placeholder="Tìm kiếm"
                suffixIcon={
                  <button className="relative flex left-3 items-center justify-center w-14 h-12 rounded-s-none bg-primaryButtonLight rounded-e-lg">
                    <SearchIcon color="white" />
                  </button>
                }
              />
            </div>

            <NoResult />
          </div>
        </div>
      </section>
    </div>
  );
};
