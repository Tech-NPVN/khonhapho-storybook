import { AddIcon, Button, Typography } from '@/components/General';
import { Link } from 'react-router-dom';

export const Warehouse = () => {
  return (
    <>
      <div className="w-full px-6 py-3 h-96 rounded-lg bg-white dark:bg-primaryColorDark">
        <div className="flex justify-between pb-3">
          <div>
            <Typography variant="h2" className="uppercase text-sm font-medium dark:text-white">
              Kho Tài Nguyên
            </Typography>
            <div className="text-blue-400 text-sm">Lý do không lọc Diện tích/Mặt tiền/Hướng </div>
          </div>
          <Link to={'/warehouse/add'}>
            <Button className="w-28 h-10">
              <AddIcon className="me-2" width="30" color="white" />
              <span>Đăng tin</span>
            </Button>
          </Link>
        </div>
        <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
      </div>
    </>
  );
};
