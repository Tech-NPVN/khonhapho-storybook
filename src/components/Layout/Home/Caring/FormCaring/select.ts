export interface IPlaceOptions {
    value: string;
    label: string;
    disabled?: boolean;
  }
  
  export const PLACE_OPTIONS = [
    { value: 'Hà Nội', label: 'Hà Nội' },
    { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
    { value: 'An Giang', label: 'An Giang' },
    { value: 'Bắc Kạn', label: 'Bắc Kạn' },
    { value: 'Bạc Liêu', label: 'Bạc Liêu' },
    { value: 'Bà Rịa - Vũng Tàu', label: 'Bà Rịa - Vũng Tàu' },
    { value: 'Vũng Tàu', label: 'Vũng Tàu' },
    { value: 'Bình Định', label: 'Bình Định' },
    { value: 'Bình Dương', label: 'Bình Dương' },
    { value: 'Bình Phước', label: 'Bình Phước' },
    { value: 'Bình Thuận', label: 'Bình Thuận' },
    { value: 'Cà Mau', label: 'Cà Mau' },
    { value: 'Cần Thơ', label: 'Cần Thơ' },
  ] as IPlaceOptions[];
  
  export const DISTRICT_OPTIONS = [
    { value: 'Hoàn Kiếm', label: 'Hoàn Kiếm' },
    { value: 'Tây Hồ', label: 'Tây Hồ' },
    { value: 'Long Biên', label: 'Long Biên' },
    { value: 'Cầu Giấy', label: 'Cầu Giấy' },
    { value: 'Đống Đa', label: 'Đống Đa' },
    { value: 'Hai Bà Trưng', label: 'Hai Bà Trưng' },
    { value: 'Hoàng Mai', label: 'Hoàng Mai' },
    { value: 'Thanh Xuân', label: 'Thanh Xuân' },
    { value: 'Sóc Sơn', label: 'Sóc Sơn' },
    { value: 'Đông Anh', label: 'Đông Anh' },
    { value: 'Nam Từ Liêm', label: 'Nam Từ Liêm' },
    { value: 'Bắc Từ Liêm', label: 'Bắc Từ Liêm' },
    { value: 'Thanh Trì', label: 'Thanh Trì' },
  ] as IPlaceOptions[];
  
  export const RANGE_PRICE_OPTIONS = [
    { value: 'Dưới 3 tỷ', label: 'Dưới 3 tỷ' },
    { value: 'Từ 3 tỷ đến 6 tỷ', label: 'Từ 3 tỷ đến 6 tỷ' },
    { value: 'Từ 6 tỷ đến 9 tỷ', label: 'Từ 6 tỷ đến 9 tỷ' },
    { value: 'Từ 9 tỷ đến 15 tỷ', label: 'Từ 9 tỷ đến 15 tỷ' },
    { value: 'Từ 15 tỷ đến 25 tỷ', label: 'Từ 15 tỷ đến 25 tỷ' },
    { value: 'Từ 25 tỷ đến 35 tỷ', label: 'Từ 25 tỷ đến 35 tỷ' },
    { value: 'Từ 35 tỷ đến 50 tỷ', label: 'Từ 35 tỷ đến 50 tỷ' },
    { value: 'Từ 50 tỷ đến 75 tỷ', label: 'Từ 50 tỷ đến 75 tỷ' },
    { value: 'Từ 75 tỷ đến 100 tỷ', label: 'Từ 75 tỷ đến 100 tỷ' },
    { value: 'Trên 100 tỷ', label: 'Trên 100 tỷ' },
  ] as IPlaceOptions[];
  
  export const FEATURES_OPTIONS = [
    { value: 'Mặt phố', label: 'Mặt phố' },
    { value: 'Ngõ ô tô', label: 'Ngõ ô tô' },
    { value: 'Ngõ 3 gác', label: 'Ngõ 3 gác' },
    { value: 'Ngõ xe máy', label: 'Ngõ xe máy' },
    { value: 'Gara ô tô', label: 'Gara ô tô' },
    { value: 'Kinh doanh', label: 'Kinh doanh' },
    { value: 'Cửa hàng', label: 'Cửa hàng' },
    { value: 'Thuê ở', label: 'Thuê ở' },
    { value: 'Thời trang', label: 'Thời trang' },
    { value: 'Thang máy', label: 'Thang máy' },
  ] as IPlaceOptions[];
  