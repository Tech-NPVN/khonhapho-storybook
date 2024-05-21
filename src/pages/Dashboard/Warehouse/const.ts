import { IOption } from '@/components/DataEntry';

export interface ITableHeader {
  [key: string]: {
    title: string;
    show?: boolean;
    min_width?: number;
    text_align?: 'center' | 'left' | 'right';
  };
}
export const TABLE_HEADER = {
  save: {
    title: 'Lưu',
    show: true,
    text_align: 'center',
  },
  book: {
    title: 'Đ.Lịch',
    show: true,
    text_align: 'center',
  },
  time: {
    title: 'T.Gian',
    show: true,
    text_align: 'center',
  },
  status: {
    title: 'Hiện Trạng',
    show: true,
    text_align: 'center',
  },
  address: {
    title: 'Địa chỉ',
    show: true,
    min_width: 170,
  },
  streets: {
    title: 'Phố',
    show: true,
    min_width: 120,
  },
  district: {
    title: 'Quận',
    show: true,
    min_width: 120,
  },
  spec: {
    title: 'Thông số',
    show: true,
    min_width: 120,
  },
  price: {
    title: 'Giá',
    show: true,
  },
  unit: {
    title: 'TR/M²',
    show: true,
  },
  owner: {
    title: 'Đầu chủ',
    show: true,
    min_width: 120,
  },
  contact: {
    title: 'Liên hệ',
    show: true,
    text_align: 'center',
  },

  property_feature: {
    title: 'Đặc điểm',
    show: true,
    min_width: 150,
  },
  report: {
    title: 'B.Cáo',
    show: true,
    text_align: 'center',
  },
  view: {
    title: 'Xem',
    show: true,
    text_align: 'center',
  },
} as ITableHeader;
// Tất cả
// Bán mạnh
// Hạ chào
// Tăng chào
// Tạm dừng
// Dừng bán
// Đã bán
// Đã chốt

export const STATUS_LABEL = {
  0: {
    label: 'Bán mạnh',
  },
  1: {
    label: 'Hạ chào',
  },
  2: {
    label: 'Tăng chào',
  },
  3: {
    label: 'Tạm dừng',
  },
  4: {
    label: 'Dừng bán',
  },
  5: {
    label: 'Đã bán',
  },
  6: {
    label: 'Đã chốt',
  },
};
export interface IDataTable {
  id: string | number;
  time: string;
  status: keyof typeof STATUS_LABEL;
  address: string;
  streets: string;
  district: string;
  spec: string;
  price: string;
  unit: string;
  owner: string;
  contact: {
    phone: string;
    zalo?: string;
    message?: string;
  };
  property_feature: string;
}
export const TABLE_DATA = [
  {
    id: 0,
    time: '20/02/2024',
    status: 0,
    address: 'Opera House Suites, Ngõ Tràng Tiền, Tràng Tiền, Hoàn Kiếm, Hà Nội ',
    streets: 'Tràng Tiền',
    district: 'Hoàn Kiếm',
    spec: '34 93 883 723',
    price: '1000 tỷ',
    unit: 'TR/M²',
    owner: 'Nguyễn Văn A',
    contact: {
      phone: '0123456789',
      message: 'https://www.facebook.com/',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 1,
    time: '01/11/2023',
    status: 1,
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
      zalo: 'https://www.facebook.com/',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 2,
    time: '01/11/2023',
    status: 2,
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
      message: 'https://www.facebook.com/',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 3,
    time: '01/11/2023',
    status: 3,
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
      message: 'https://www.facebook.com/',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 4,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 5,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 6,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 7,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 8,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 9,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 10,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 11,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 12,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 13,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 14,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 15,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 16,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 17,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 18,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 19,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 20,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 21,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 22,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
  {
    id: 23,
    time: '01/11/2023',
    status: Math.floor(Math.random() * 7),
    address: 'Tràng An, Tân Thành, Ninh Bình',
    streets: 'Tân Thành',
    district: 'Tràng An',
    spec: '707 123 9099',
    price: '10 tỷ',
    unit: '30 TR/M²',
    owner: 'Lê Thị B',
    contact: {
      phone: '0126789345',
    },
    property_feature: 'Nhà Mặt phố, Bố làm to',
  },
] as IDataTable[];

export const PROPERTY_TYPE = [
  { label: 'Thổ cư', value: 'tho-cu' },
  { label: 'Chung cư', value: 'chung-cu' },
  { label: 'Dự án', value: 'dự án' },
] as IOption[];

export const PROPERTY_FEATURE = [
  { label: 'Mặt Phố', value: '1' },
  { label: 'Kinh Doanh', value: '2' },
  { label: 'Thời Trang', value: '3' },
] as IOption[];

export const CITY = [
  { label: 'Hà Nội', value: '1' },
  { label: 'Đà Nẵng', value: '2' },
  { label: 'Hồ Chí Minh', value: '3' },
] as IOption[];

export const DISTRICT = [
  { label: 'Bắc Từ Liêm', value: '1' },
  { label: 'Cầu Giấy', value: '2' },
  { label: 'Hồ Hoàn Kiếm', value: '3' },
] as IOption[];

export const STREET = [
  { label: 'Đường số 1', value: '1' },
  { label: 'Đường số 2', value: '2' },
  { label: 'Đường số 3', value: '3' },
] as IOption[];

export const BONUS = [
  { label: '%', value: '1' },
  { label: 'Triệu', value: '2' },
  { label: 'Tỷ', value: '3' },
] as IOption[];

export const LEGAL_STATUS = [
  { label: 'Sổ đỏ/Sổ hồng', value: '1' },
  { label: 'Chưa sổ/Chờ cấp sổ', value: '2' },
  { label: 'Có sổ - Thiếu seri sổ', value: '3' },
] as IOption[];

export const ITEM_STATUS = [
  { label: 'Bán mạnh', value: 'ban-manh' },
  { label: 'Hạ chào', value: 'ha-chao' },
  { label: 'Tăng chào', value: 'tang-chao' },
  { label: 'Tạm dừng', value: 'tam-dung' },
  { label: 'Dừng bán', value: 'dung-ban' },
  { label: 'Đã bán', value: 'da-ban' },
  { label: 'Đã chốt', value: 'da-chot' },
] as IOption[];

export const UNIT = [
  { label: 'Triệu', value: 'trieu' },
  { label: 'Tỷ', value: 'ty' },
] as IOption[];
export const PRICE_ABOUT = [
  { label: 'Dưới 3 tỷ', value: 'duoi-3-ty' },
  {
    label: 'Từ 3 tỷ đến 6 tỷ',
    value: 'tu-3-ty-den-6-ty',
  },
  {
    label: 'Từ 6 tỷ đến 9 tỷ',
    value: 'tu-6-ty-den-9-ty',
  },
  {
    label: 'Từ 9 tỷ đến 15 tỷ',
    value: 'tu-9-ty-den-15-ty',
  },
  {
    label: 'Từ 15 tỷ đến 25 tỷ',
    value: 'tu-15-ty-den-25-ty',
  },
  {
    label: 'Từ 25 tỷ đến 35 tỷ',
    value: 'tu-25-ty-den-35-ty',
  },
  {
    label: 'Từ 35 tỷ đến 50 tỷ',
    value: 'tu-35-ty-den-50-ty',
  },
  {
    label: 'Từ 50 tỷ đến 75 tỷ',
    value: 'tu-50-ty-den-75-ty',
  },
  {
    label: 'Từ 75 tỷ đến 100 tỷ',
    value: 'tu-75-ty-den-100-ty',
  },
  {
    label: 'Từ 100 tỷ đến 150 tỷ',
    value: 'tu-100-ty-den-150-ty',
  },
  {
    label: 'Từ 150 tỷ đến 200 tỷ',
    value: 'tu-150-ty-den-200-ty',
  },
  {
    label: 'Từ 200 tỷ đến 300 tỷ',
    value: 'tu-200-ty-den-300-ty',
  },
  {
    label: 'Trên 300 tỷ',
    value: 'tren-300-ty',
  },
] as IOption[];

export const GROUPS = [
  { value: 'code-000', label: 'Code 000' },
  { value: 'code-001', label: 'Test' },
  { value: 'code-002', label: 'DEV' },
] as IOption[];

export const IMAGE_URLS: string[] = [
  'https://i.ibb.co/G71tsmT/nha-pho-dep-1.png',
  'https://i.ibb.co/rMwM4Xy/nha-pho-35-tang-anh-tinh-nghi-xuan-00005.jpg',
  'https://i.ibb.co/M6q82yt/50271371-759755064399890-6462199697548247040-n5.webp',
  'https://i.ibb.co/rpWYLdK/Thuc-te-mau-thiet-ke-nha-pho-2-5-tang-dep-hoan-thien-di-vao-su-dung-tai-tpvinh-00005-min.jpg',
  'https://i.ibb.co/rpWYLdK/Thuc-te-mau-thiet-ke-nha-pho-2-5-tang-dep-hoan-thien-di-vao-su-dung-tai-tpvinh-00005-min.jpg',
  'https://i.ibb.co/TghCvZB/thiet-ke-biet-thu-2-tang-mai-thai.jpg',
  'https://i.ibb.co/z6j0Rnj/images.jpg',
  'https://i.ibb.co/z6j0Rnj/images.jpg',
  'https://i.ibb.co/z6j0Rnj/images.jpg',
  'https://i.ibb.co/z6j0Rnj/images.jpg',
  'https://i.ibb.co/z6j0Rnj/images.jpg',
  'https://i.ibb.co/z6j0Rnj/images.jpg',
];
export const WAREHOUSE_DETAILS = [1, 2, 3, 4, 5, 6, 7];
