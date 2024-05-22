import { IOption } from '@/components/DataEntry';

export interface ITableHeader {
  [key: string]: {
    title: string;
    hidden?: boolean;
    min_width?: number;
    text_align?: 'center' | 'left' | 'right';
  };
}
export const TABLE_HEADER_LIST = {
  save: {
    title: 'Lưu',
    text_align: 'center',
  },
  book: {
    title: 'Đ.Lịch',
    text_align: 'center',
  },
  time: {
    title: 'T.Gian',
    text_align: 'center',
  },
  status: {
    title: 'Hiện Trạng',
    text_align: 'center',
  },
  address: {
    title: 'Địa chỉ',
    min_width: 170,
  },
  streets: {
    title: 'Phố',
    min_width: 120,
  },
  district: {
    title: 'Quận',
    min_width: 120,
  },
  spec: {
    title: 'Thông số',
    min_width: 120,
  },
  price: {
    title: 'Giá',
  },
  unit: {
    title: 'TR/M²',
  },
  owner: {
    title: 'Đầu chủ',
    min_width: 120,
  },
  contact: {
    title: 'Liên hệ',
    text_align: 'center',
  },

  property_feature: {
    title: 'Đặc điểm',
    min_width: 150,
  },
  report: {
    title: 'B.Cáo',
    text_align: 'center',
  },
  view: {
    title: 'Xem',
    show: true,
    text_align: 'center',
  },
} as ITableHeader;
export const TABLE_HEADER_SAVED = {
  save: {
    title: 'Lưu',
    text_align: 'center',
  },
  book: {
    title: 'Đ.Lịch',
    text_align: 'center',
  },
  note: {
    title: 'Ghi chú',
    text_align: 'center',
  },
  time: {
    title: 'T.Gian',
    text_align: 'center',
  },
  status: {
    title: 'Hiện Trạng',
    text_align: 'center',
  },
  address: {
    title: 'Địa chỉ',
    min_width: 170,
  },
  streets: {
    title: 'Phố',
    min_width: 120,
  },
  district: {
    title: 'Quận',
    min_width: 120,
  },
  spec: {
    title: 'Thông số',
    min_width: 120,
  },
  price: {
    title: 'Giá',
  },
  unit: {
    title: 'TR/M²',
  },
  owner: {
    title: 'Đầu chủ',
    min_width: 120,
  },
  contact: {
    title: 'Liên hệ',
    text_align: 'center',
  },

  property_feature: {
    title: 'Đặc điểm',
    min_width: 150,
  },
  report: {
    title: 'B.Cáo',
    text_align: 'center',
  },
  view: {
    title: 'Xem',
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

export interface IDataTableSaved {
  id: string | number;
  time: string;
  note: string;
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
  'https://i.ibb.co/TghCvZB/thiet-ke-biet-thu-2-tang-mai-thai.jpg',
  'https://i.ibb.co/z6j0Rnj/images.jpg',
];
export const WAREHOUSE_DETAILS = [1, 2, 3, 4, 5, 6, 7];

//
// Tin nổi bật
// Tin mới nhất
// Tin cũ nhất
// Giá cao nhất
// Giá thấp nhất

export const SORT_OPTIONS = [
  {
    value: '0',
    label: 'Tin nổi bật',
  },
  {
    value: '1',
    label: 'Tin mới nhất',
  },
  {
    value: '2',
    label: 'Tin cũ nhất',
  },
  {
    value: '3',
    label: 'Giá cao nhất',
  },
  {
    value: '4',
    label: 'Giá thấp nhất',
  },
] as IOption[];

export interface IPosting {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  categories: string;
  updated_ad: string;
  created_ad: string;
  status: keyof typeof STATUS_LABEL;
  legal_status: IOption;
  content: string;
  tags: string[];
  spec: {
    price: string;
    price_unit: string;
    area: number;
    area_unit: string;
  };
  property_feature: string;
  images: string[];
  view_count: number;
  save_count: number;
  comment_count: number;
  address: {
    city: string;
    district: string;
    street: string;
    apartment_number: string;
    details: string;
  };
  owner: {
    fullName: string;
    phone: string;
    email?: string;
    zalo?: string;
    message?: string;
  };
  note?: string;
  last_online: string;
}
const PostDemo: IPosting = {
  id: new Date().getTime().toString(),
  categories: 'Quy định và Hướng dẫn',
  comment_count: 1,
  content:
    'Lorem ipsum dolor sit amet, consectetur adip occurence velit vel aug tellus et justo e upon er suscip vit erat vol consequat et',
  created_ad: new Date('2022-02-23').toString(),
  updated_ad: new Date('2024-01-28').toString(),
  images: IMAGE_URLS,
  legal_status: {
    label: 'Sổ đỏ/Sổ hồng',
    value: 'da-ban',
  },
  property_feature: 'Nhà mặt phố bố làm to',
  save_count: 129,
  spec: {
    area: 100,
    area_unit: 'm²',
    price: '13tỷ',
    price_unit: '40tr/m²',
  },
  status: 0,
  tags: ['quangtrong', 'nhapho', 'abc', 'test'],
  user: {
    avatar: IMAGE_URLS[0],
    id: '123',
    name: 'TrongNhaPho',
  },
  view_count: 8182,
  address: {
    apartment_number: 'Đường số 1',
    city: 'Hồ Chí Minh',
    district: 'Quận 1',
    details: 'Số nhà 12, đường số 1, Quốc lộ 1A, Quận 1, Thành phố Hồ Chí Minh',
    street: 'Quốc lộ 1A',
  },
  owner: {
    fullName: 'Lương Quang Trọng',
    phone: '0389619050',
  },
  last_online: new Date('2024-05-20').toString(),
};

export const LIST_POST_DEMO: IPosting[] = [
  { ...PostDemo, id: Math.random().toString() },
  { ...PostDemo, id: Math.random().toString() },
  { ...PostDemo, id: Math.random().toString() },
  { ...PostDemo, id: Math.random().toString() },
  { ...PostDemo, id: Math.random().toString() },
  { ...PostDemo, id: Math.random().toString() },
  { ...PostDemo, id: Math.random().toString() },
];
interface IComment {
  user: {
    fullName: string;
    avatar: string;
  };
  content: string;
  created_at: string;
}
export const Comment_Demo: IComment[] = [
  {
    user: {
      fullName: 'TrongNhaPho',
      avatar: IMAGE_URLS[0],
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: new Date('2024-05-20').toString(),
  },
  {
    user: {
      fullName: 'Lương Quang Trọng',
      avatar: IMAGE_URLS[1],
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: new Date('2024-05-21').toString(),
  },
  {
    user: {
      fullName: 'TrongNhaPho',
      avatar: IMAGE_URLS[0],
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: new Date('2024-05-21').toString(),
  },
  {
    user: {
      fullName: 'Lương Quang Trọng',
      avatar: IMAGE_URLS[1],
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: new Date('2024-05-11').toString(),
  },
  {
    user: {
      fullName: 'TrongNhaPho',
      avatar: IMAGE_URLS[0],
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: new Date('2024-05-02').toString(),
  },
  {
    user: {
      fullName: 'Lương Quang Trọng',
      avatar: IMAGE_URLS[1],
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: new Date('2024-05-12').toString(),
  },
];
