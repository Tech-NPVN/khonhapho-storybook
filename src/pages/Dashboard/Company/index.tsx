import { Avatar } from '@/components/DataDisplay';
import { Form, Input, Rate, SelectForm } from '@/components/DataEntry';
import {
  Button,
  FacebookIcon,
  MessageIcon,
  ResetIcon,
  SearchIcon,
  Typography,
} from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formOption = {
  value: z.string(),
  label: z.string(),
  disable: z.boolean().optional(),
};

const CompanySchema = z.object({
  chinhanh: z.object(formOption),
  phongban: z.object(formOption),
  chucvu: z.object(formOption),
});

const OPTIONS_CHI_NHANH = [
  { value: 'Tất cả', label: 'Tất cả' },
  { value: 'Tên nhóm', label: 'Tên nhóm' },
  { value: 'NPVN - Hà Nội', label: 'NPVN - Hà Nội' },
  { value: 'NPVN - Hà Nam', label: 'NPVN - Hà Nam' },
  { value: 'NPVN - Thanh Hoá', label: 'NPVN - Thanh Hoá' },
  { value: 'NPVN - Huế', label: 'NPVN - Huế' },
  { value: 'NPVN - TP.Hồ Chí Minh', label: 'NPVN - TP.Hồ Chí Minh' },
  { value: 'NPVN - Thái Bình', label: 'NPVN - Thái Bình' },
];

const OPTIONS_PHONG_BAN = [
  { value: 'Tất cả', label: 'Tất cả' },
  { value: 'Tên nhóm', label: 'Tên nhóm' },
];

const OPTIONS_CHUC_DANH = [
  { value: 'Chủ tịch', label: 'Chủ tịch' },
  { value: 'Đầu chủ', label: 'Đầu chủ' },
  { value: 'Giám đốc khu vực', label: 'Giám đốc khu vực' },
  { value: 'Giám đốc kinh doanh', label: 'Giám đốc kinh doanh' },
  { value: 'Phó giám đốc kinh doanh', label: 'Phó giám đốc kinh doanh' },
];

const columms = [
  { label: 'star', value: 'Đánh giá', status: true },
  { label: 'fullName', value: 'Họ tên', status: true },
  { label: 'avatar', value: '', status: true },
  { label: 'chucdanh', value: 'Chức danh', status: true },
  { label: 'thanhtich', value: 'Thành tích', status: true },
  { label: 'birthday', value: 'Năm sinh', status: true },
  { label: 'phone', value: 'Điện thoại', status: true },
  { label: 'chat', value: 'Chat', status: true },
  { label: 'phongban', value: 'Phòng Ban', status: true },
  { label: 'chinhanh', value: 'Chi nhánh', status: true },
];

type TListUsers = {
  id?: string;
  star?: number;
  avatar?: string;
  fullName?: string;
  chucdanh?: string;
  thanhtich?: [] | string;
  birthday?: string;
  phone?: string;
  chat?: { zalo?: string; fb?: string; message?: string };
  phongban?: string;
  chinhanh?: string;
};

const listUsers: TListUsers[] = [
  {
    id: '1',
    star: 5,
    avatar:
      'https://assets-cdn.khonhapho.com/test/2024_04_9/sbv-1712762320794.png?height=100&width=100',
    fullName: 'Tuấn Anh',
    chucdanh: 'Chủ tịch',
    thanhtich: '',
    birthday: '2000',
    phone: '0922678922',
    chat: { zalo: '', fb: '', message: '' },
    phongban: 'HĐQT',
    chinhanh: 'NPVN-HÀ NỘI',
  },
  {
    id: '2',
    star: 3,
    avatar:
      'https://assets-cdn.khonhapho.com/test/2024_04_9/sbv-1712762320794.png?height=100&width=100',
    fullName: 'Tuấn Anh 1',
    chucdanh: 'Chủ tịch',
    thanhtich: [],
    birthday: '2000',
    phone: '0922678922',
    chat: { zalo: '', fb: 'https://www.facebook.com/', message: 'https://www.facebook.com/' },
    phongban: 'HĐQT',
    chinhanh: 'NPVN-HÀ NỘI',
  },
];

export const CompanyPage = () => {
  const formCompany = useForm<z.infer<typeof CompanySchema>>({
    resolver: zodResolver(CompanySchema),
    defaultValues: {},
  });

  console.log(formCompany.watch());

  const renderRowValue = (key: keyof TListUsers, row: TListUsers): string | React.ReactElement => {
    switch (key) {
      case 'star':
        return (
          <div className="flex items-center gap-1">
            <Rate rating={Number(row.star)} size="small" />
            <span>{row.star}</span>
          </div>
        );
      case 'avatar':
        return (
          <img src={row.avatar} alt={row.fullName} className="object-cover w-8 h-8 rounded-full" />
        );
      case 'fullName':
        return <span className="text-[#0D7490] font-semibold">{row.fullName}</span>;
      case 'chucdanh':
        return <span>{row.chucdanh}</span>;
      case 'thanhtich':
        return <span>{row.thanhtich || '-'}</span>;
      case 'birthday':
        return <p>{row.birthday || ''}</p>;
      case 'phone':
        return <span>{row.phone || '-'} </span>;
      case 'chat':
        return (
          <div className="flex items-center gap-1">
            {row.chat?.zalo ? (
              <a href={row.chat?.zalo} target="_blank">
                <FacebookIcon color="blue" width="18" height="18" />
              </a>
            ) : (
              <span className="w-4 text-center">-</span>
            )}
            {row.chat?.message ? (
              <a href={row.chat?.message} target="_blank">
                <MessageIcon width="18" height="18" />
              </a>
            ) : (
              <span className="w-4 text-center">-</span>
            )}
            {row.chat?.fb ? (
              <a href={row.chat?.fb} target="_blank">
                <FacebookIcon color="#1877F2" width="18" height="18" />
              </a>
            ) : (
              <span className="w-4 text-center">-</span>
            )}
          </div>
        );
      case 'phongban':
        return <span>{row.phongban}</span>;
      case 'chinhanh':
        return <span>{row.chinhanh}</span>;
      default:
        return typeof row[key];
    }
  };

  return (
    <div className="pb-3 rounded-t-lg bg-primaryColorLight dark:bg-primaryColorDark">
      <div className="p-[12px_20px_20px]">
        <Typography className="mb-3 text-xl uppercase text-textPrimaryLight" variant="h2">
          DANH SÁCH NHÂN SỰ TẬP ĐOÀN NHÀ PHỐ VIỆT NAM
        </Typography>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mb-5 border-t">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {new Array(10).fill(0).map((_, i) => (
                <div
                  className="relative shrink-0 rounded-full overflow-hidden w-[32px] h-[32px] -ml-1"
                  key={i}
                >
                  <Avatar
                    src="https://assets-cdn.khonhapho.com/test/2024_05_02/ngokhong-toy-1714731801769.jpeg?height=100&width=100"
                    width={32}
                    height={32}
                    alt="avatar"
                    shape="circle"
                  />
                </div>
              ))}
            </div>
            <Typography variant="span" className="text-sm font-semibold">
              + 6431 thành viên
            </Typography>
          </div>
          <div className="flex w-full md:w-[294px]">
            <Input
              className="rounded-e-none bg-secondaryColorLight dark:bg-secondaryColorDark md:w-[254px]"
              placeholder="Nhập nội dung tìm kiếm"
            />
            <button className="flex items-center justify-center w-10 h-10 rounded-s-none bg-primaryButtonLight rounded-e-lg">
              <SearchIcon color="white" />
            </button>
          </div>
        </div>
        <Form {...formCompany}>
          <form
            onSubmit={formCompany.handleSubmit((data) => console.log(data))}
            className="flex flex-wrap items-center justify-end w-full gap-1"
          >
            <div className="lg:w-[315px] w-full">
              <SelectForm<z.infer<typeof CompanySchema>>
                name="chinhanh"
                options={OPTIONS_CHI_NHANH}
                className="rounded-lg border-dividerLight"
                placeholder="Chi nhánh"
              />
            </div>
            <div className="lg:w-[315px] w-full">
              <SelectForm<z.infer<typeof CompanySchema>>
                name="phongban"
                placeholder="Phòng ban"
                options={OPTIONS_PHONG_BAN}
                className="rounded-lg border-dividerLight"
                disabled={!formCompany.watch('chinhanh')}
              />
            </div>
            <div className="lg:w-[315px] w-full">
              <SelectForm<z.infer<typeof CompanySchema>>
                placeholder="Chức danh"
                name="chucvu"
                options={OPTIONS_CHUC_DANH}
                className="rounded-lg ring-dividerLight"
              />
            </div>
            <Button
              variant="outline"
              startIcon={<ResetIcon />}
              className="lg:w-[315px] w-full text-primaryColorDark border-dividerLight"
              onClick={() => {
                formCompany.reset();
              }}
              type="button"
            >
              Đặt lại
            </Button>
          </form>
        </Form>
        <div className="flex flex-wrap items-center justify-between"></div>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              {columms.map((columm) => (
                <>
                  {columm.status && (
                    <th
                      key={columm.label}
                      className="px-1 py-2 text-base font-semibold text-left uppercase"
                    >
                      {columm.value}
                    </th>
                  )}
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {listUsers.map((user, index) => (
              <tr
                key={user.id}
                className={clsx('text-sm', {
                  'bg-secondaryColorLightD2 dark:bg-primaryColorDark': index % 2 !== 0,
                  'bg-primaryColorLight dark:bg-secondaryColorDarkD2': index % 2 === 0,
                })}
              >
                {columms.map((col, k) => (
                  <>
                    {col.status && (
                      <td className="px-1.5 py-1 text-left break-words" key={`th_key_${k}`}>
                        {renderRowValue(col.label as keyof TListUsers, user)}
                      </td>
                    )}
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
