export interface ITableHeader {
  [key: string]: {
    title: string;
    min_width?: number;
    text_align?: 'center' | 'left' | 'right';
  };
}

export const TABLE_HEADER_LIST = {
  save: {
    title: 'Mã giới thiệu',
    text_align: 'left',
  },
  book: {
    title: 'Người sử dụng',
    text_align: 'center',
  },
  time: {
    title: 'Chức danh',
    text_align: 'center',
  },
  address: {
    title: 'Chi nhánh',
    text_align: 'center',
  },
  streets: {
    title: 'Phòng ban',
    text_align: 'center',
  },
  district: {
    title: 'Trạng thái',
    text_align: 'center',
  },
  spec: {
    title: 'Ngày tạo',
    text_align: 'center',
  },
} as ITableHeader;

export interface IPostItem {
  id: string;
  referralCode: string;
  user: string;
  position: string;
  branch: string;
  department: string;
  status: boolean;
  created_at: Date;
}

const postDemo: IPostItem = {
  id: Math.random().toString(),
  referralCode: 'zCexY09UHm',
  user: '0931111111',
  position: 'Học viên',
  branch: 'Nhà Phố Việt Nam - Hà Nội',
  department: 'Code',
  status: true,
  created_at: new Date(),
};

export const LIST_POST_DEMO: IPostItem[] = [
  postDemo,
  postDemo,
  postDemo,
  postDemo,
  postDemo,
  postDemo,
];
