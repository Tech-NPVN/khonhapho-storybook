<<<<<<< HEAD
import { NoResult } from '@/common/components';
=======
>>>>>>> 522d27545bf9bc0e891a9b384c27d32245ad6345
import { HouseViewHistory } from './HouseViewHistory';

export type TLichXemNha = {
  id?: string;
  avatar?: string;
  name?: string;
  time?: string;
  address?: string;
  desc?: string[];
  note?: string;
};

export const UserAppointment = () => {
  const ListLichXemNha: TLichXemNha[] = [
    {
      id: '1',
      avatar:
        'https://assets-cdn.khonhapho.com/test/2024_05_02/ngokhong-toy-1714731801769.jpeg?height=100&width=100',
      name: 'TK Hoàng Văn Anh',
      time: '20:23 - 16/05/2024',
      address:
        '250.12.25 Khương Trung 50 3 3.5 6.3 tỷ Thanh Xuân HĐ ĐC Trần Thành Lâm NPHN-6268, 0927749999, X3, nguồn ĐC Trần Thành Lâm, 6 đến 9, #ĐC2',
      desc: ['khuongtrung', 'thanhxuan6den9', 'dctranthanhlam6268', 'nphn6268', 'thocu'],
      note: ' kkaaakakakaka',
    },
    {
      id: '2',
      avatar:
        'https://assets-cdn.khonhapho.com/test/2024_05_02/ngokhong-toy-1714731801769.jpeg?height=100&width=100',
      time: '15:23 - 16/05/2024',
      name: 'TK Hoàng Văn Anh',

      address:
        '250.12.25 Khương Trung 50 3 3.5 6.3 tỷ Thanh Xuân HĐ ĐC Trần Thành Lâm NPHN-6268, 0927749999, X3, nguồn ĐC Trần Thành Lâm, 6 đến 9, #ĐC2',
      desc: ['khuongtrung', 'thanhxuan6den9', 'dctranthanhlam6268', 'nphn6268', 'thocu'],
      note: ' kkaaakakakaka',
    },
  ];

  return (
    <div className="h-[calc(100vh_-_120px)] max-w-xl mx-auto bg-white lg:rounded-lg">
      <div className="px-5 py-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Lịch sử đặt lịch xem nhà</div>
        </div>
        <div className="mt-3 border-b border-dividerLight/20"></div>
      </div>
      <div className="">
        <div className="flex flex-col gap-1 p-5">
          {ListLichXemNha.length > 0 ? (
            ListLichXemNha?.map((lichXemNha) => (
              <div key={lichXemNha.id}>
                <HouseViewHistory items={lichXemNha} />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-5">
              <NoResult title="Không có kết quả nào trên hệ thống!" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
