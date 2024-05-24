import { TItemMenu } from '@/components/Layout';

export const ADMIN_ROUTE = '/admin';

export const ADMIN_MENU: TItemMenu[] = [
  {
    id: 'admin',
    href: ADMIN_ROUTE,
    name: 'Trang quản trị',
  },
  {
    id: 'news-feed',
    href: '/',
    name: 'Bảng tin',
  },
  {
    id: 'manage-feed',
    href: ADMIN_ROUTE + '/feeds',
    name: 'Quản lý Feeds',
    subMenu: [
      {
        id: 'manage-feed-deal',
        href: ADMIN_ROUTE + '/feeds/deal',
        name: 'Vụ chốt',
      },
      {
        id: 'manage-feed-urgently',
        href: ADMIN_ROUTE + 'feeds/urgently',
        name: 'Khách cần mua gấp',
      },
      {
        id: 'manage-feed-categories',
        href: ADMIN_ROUTE + 'feeds/categories',
        name: 'Danh mục',
      },
    ],
  },
  {
    id: 'admin-warehouse',
    href: ADMIN_ROUTE + '/warehouse',
    name: 'Kho hàng',
  },
  {
    id: 'admin-consignment',
    href: ADMIN_ROUTE + '/consignment',
    name: 'Tin chính chủ',
  },
  {
    id: 'admin-users',
    href: ADMIN_ROUTE + '/users',
    name: 'Thành viên',
  },
  {
    id: 'admin-candidate',
    href: ADMIN_ROUTE + '/candidate',
    name: 'Quản lý ứng viên vòng 0',
  },
  {
    id: 'admin-refferal',
    href: ADMIN_ROUTE + '/referral',
    name: 'Mã giới thiệu',
  },
  // Dữ liệu kho hàng
  {
    id: 'admin-data',
    href: ADMIN_ROUTE + '/data',
    name: 'Dữ liệu kho hàng',
    subMenu: [
      {
        id: 'admin-data-legal-status',
        href: ADMIN_ROUTE + '/data/legal-status',
        name: 'Tình trạng pháp lý',
      },
      {
        id: 'admin-data-price-range',
        href: ADMIN_ROUTE + '/data/price-range',
        name: 'Khoảng giá',
      },
      {
        id: 'admin-data-area-range',
        href: ADMIN_ROUTE + '/data/area-range',
        name: 'Khoảng diện tích',
      },
      {
        id: 'admin-data-sale-status',
        href: ADMIN_ROUTE + '/data/sale-status',
        name: 'Trạng thái mua bán',
      },
      {
        id: 'admin-data-contract-type',
        href: ADMIN_ROUTE + '/data/contract-type',
        name: 'Loại hợp đồng',
      },
      {
        id: 'admin-data-property-type',
        href: ADMIN_ROUTE + '/data/property-type',
        name: 'Loại hình BĐS',
      },
      {
        id: 'admin-data-purposes',
        href: ADMIN_ROUTE + '/data/purposes',
        name: 'Mục đích sử dụng',
      },
      {
        id: 'admin-data-property-feature',
        href: ADMIN_ROUTE + '/data/property-feature',
        name: 'Đặc điểm BĐS',
      },
      {
        id: 'admin-data-project',
        href: ADMIN_ROUTE + '/data/project',
        name: 'Dự án',
      },
      {
        id: 'admin-data-cities',
        href: ADMIN_ROUTE + '/data/cities',
        name: 'Tỉnh/Thành phố',
      },
      {
        id: 'admin-data-districts',
        href: ADMIN_ROUTE + '/data/districts',
        name: 'Quận/huyện',
      },
      {
        id: 'admin-data-streets',
        href: ADMIN_ROUTE + '/data/streets',
        name: 'Đường',
      },
      {
        id: 'admin-data-consignment',
        href: ADMIN_ROUTE + '/data/consignment',
        name: 'Phản hồi Tin chính chủ',
      },
    ],
  },
  // Dữ liệu thành viên
  {
    id: 'admin-member',
    href: ADMIN_ROUTE + '/member',
    name: 'Dữ liệu thành viên',
    subMenu: [
      {
        id: 'admin-member-branch',
        href: ADMIN_ROUTE + '/member/branch',
        name: 'Chi nhánh',
      },
      {
        id: 'admin-member-block',
        href: ADMIN_ROUTE + '/member/block',
        name: 'Khối',
      },
      {
        id: 'admin-member-department',
        href: ADMIN_ROUTE + '/member/department',
        name: 'Phòng ban',
      },
      {
        id: 'admin-member-group',
        href: ADMIN_ROUTE + '/member/group',
        name: 'Nhóm',
      },
      {
        id: 'admin-member-Medal',
        href: ADMIN_ROUTE + '/member/Medal',
        name: 'Huy hiệu',
      },
    ],
  },
  {
    id: 'admin-company-setting',
    href: ADMIN_ROUTE + '/company-setting',
    name: 'Cài đặt công ty',
  },
  {
    id: 'admin-stickers',
    href: ADMIN_ROUTE + '/stickers',
    name: 'Sticker',
  },
];
