import { IOption } from '@/components/DataEntry';
const USER_NAMES = [
  'Trọng Sa Đoạ',
  'Nhà Phố Net',
  'Nhà Phố Việt Nam',
  'Bệnh viện Tâm thần',
  'Lương Quang Trọng',
  'Ngân hàng Thịnh Vượng',
];
const COMMENTS = [
  'Nhà này bị ma ám 20 năm chưa hết',
  'Căn nhà này vị đẹp',
  'Khách hàng muốn bán gấp, để chuyển nhà về quê',
  'Nhà này khá cũ anh chị em cẩn thận',
  'Chủ hơi hãm',
  'Căn này khách từ chối vài lần khó bán',
];
const TIMES = ['2021-06-01', '2022-11-20', '2022-05-11', '2024-02-05', '2024-01-30', '2024-05-20'];
export const IMAGE_URLS: string[] = [
  'https://i.ibb.co/G71tsmT/nha-pho-dep-1.png',
  'https://i.ibb.co/rMwM4Xy/nha-pho-35-tang-anh-tinh-nghi-xuan-00005.jpg',
  'https://i.ibb.co/M6q82yt/50271371-759755064399890-6462199697548247040-n5.webp',
  'https://i.ibb.co/rpWYLdK/Thuc-te-mau-thiet-ke-nha-pho-2-5-tang-dep-hoan-thien-di-vao-su-dung-tai-tpvinh-00005-min.jpg',
  'https://i.ibb.co/TghCvZB/thiet-ke-biet-thu-2-tang-mai-thai.jpg',
  'https://i.ibb.co/z6j0Rnj/images.jpg',
];
const CATEGORIES = ['Quy định', 'Quy định và hướng dẫn', 'Cần mua', 'Cần bán', 'Bắt buộc'];

const POSTS = [
  {
    id: 1,
    title: 'His mother had always taught him',
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    userId: 9,
    tags: ['history', 'american', 'crime'],
    reactions: 2,
  },
  {
    id: 2,
    title: 'He was an expert but not in a discipline',
    body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
    userId: 13,
    tags: ['french', 'fiction', 'english'],
    reactions: 2,
  },
  {
    id: 3,
    title: 'Dave watched as the forest burned up on the hill.',
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    userId: 32,
    tags: ['magical', 'history', 'french'],
    reactions: 5,
  },
  {
    id: 4,
    title: 'All he wanted was a candy bar.',
    body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    userId: 12,
    tags: ['mystery', 'english', 'american'],
    reactions: 1,
  },
  {
    id: 5,
    title: 'Hopes and dreams were dashed that day.',
    body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
    userId: 41,
    tags: ['crime', 'mystery', 'love'],
    reactions: 2,
  },
  {
    id: 6,
    title: "Dave wasn't exactly sure how he had ended up",
    body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
    userId: 47,
    tags: ['english', 'classic', 'american'],
    reactions: 3,
  },
  {
    id: 7,
    title: 'This is important to remember.',
    body: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
    userId: 12,
    tags: ['magical', 'crime'],
    reactions: 0,
  },
  {
    id: 8,
    title: 'One can cook on and with an open fire.',
    body: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
    userId: 31,
    tags: ['american', 'english'],
    reactions: 9,
  },
  {
    id: 9,
    title: 'There are different types of secrets.',
    body: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
    userId: 42,
    tags: ['american', 'history', 'magical'],
    reactions: 2,
  },
  {
    id: 10,
    title: 'They rushed out the door.',
    body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
    userId: 1,
    tags: ['fiction', 'magical', 'history'],
    reactions: 4,
  },
  {
    id: 11,
    title: "It wasn't quite yet time to panic.",
    body: "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
    userId: 25,
    tags: ['mystery', 'american', 'history'],
    reactions: 5,
  },
  {
    id: 12,
    title: 'She was aware that things could go wrong.',
    body: 'She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.',
    userId: 26,
    tags: ['love', 'english'],
    reactions: 7,
  },
  {
    id: 13,
    title: 'She wanted rainbow hair.',
    body: "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.",
    userId: 44,
    tags: ['mystery', 'classic', 'french'],
    reactions: 0,
  },
  {
    id: 14,
    title: 'The paper was blank.',
    body: "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",
    userId: 1,
    tags: ['mystery', 'english', 'love'],
    reactions: 0,
  },
  {
    id: 15,
    title: 'The trees, therefore, must be such old',
    body: "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.",
    userId: 15,
    tags: ['fiction', 'history', 'crime'],
    reactions: 1,
  },
  {
    id: 16,
    title: 'There was only one way to do things in the Statton house.',
    body: 'There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.',
    userId: 31,
    tags: ['magical', 'french', 'american'],
    reactions: 5,
  },
  {
    id: 17,
    title: 'She was in a hurry.',
    body: "She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.",
    userId: 5,
    tags: ['french', 'magical', 'english'],
    reactions: 0,
  },
  {
    id: 18,
    title: 'She had a terrible habit o comparing her life to others',
    body: "She had a terrible habit o comparing her life to others. She realized that their life experiences were completely different than her own and that she saw only what they wanted her to see, but that didn't matter. She still compared herself and yearned for what she thought they had and she didn't.",
    userId: 28,
    tags: ['history', 'french', 'love'],
    reactions: 3,
  },
  {
    id: 19,
    title: 'The rain and wind abruptly stopped.',
    body: "The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.",
    userId: 46,
    tags: ['fiction', 'crime', 'magical'],
    reactions: 8,
  },
  {
    id: 20,
    title: "He couldn't remember exactly where he had read it",
    body: "He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.",
    userId: 38,
    tags: ['french', 'classic'],
    reactions: 9,
  },
  {
    id: 21,
    title: 'He wandered down the stairs and into the basement',
    body: 'He wandered down the stairs and into the basement. The damp, musty smell of unuse hung in the air. A single, small window let in a glimmer of light, but this simply made the shadows in the basement deeper. He inhaled deeply and looked around at a mess that had been accumulating for over 25 years. He was positive that this was the place he wanted to live.',
    userId: 37,
    tags: ['french', 'american'],
    reactions: 8,
  },
  {
    id: 22,
    title: 'She has seen this scene before.',
    body: "She has seen this scene before. It had come to her in dreams many times before. She had to pinch herself to make sure it wasn't a dream again. As her fingers squeezed against her arm, she felt the pain. It was this pain that immediately woke her up.",
    userId: 30,
    tags: ['classic', 'love', 'history'],
    reactions: 6,
  },
  {
    id: 23,
    title: "It's an unfortunate reality that we don't teach people how to make money",
    body: "It's an unfortunate reality that we don't teach people how to make money (beyond getting a 9 to 5 job) as part of our education system. The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed, but it does mean that if you're willing to open your mind a bit you don't have to be stuck in an office from 9 to 5 for the next fifty years o your life.",
    userId: 2,
    tags: ['crime', 'english'],
    reactions: 4,
  },
  {
    id: 24,
    title: 'The robot clicked disapprovingly.',
    body: 'The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkard\'s grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.',
    userId: 34,
    tags: ['crime', 'american', 'love'],
    reactions: 2,
  },
  {
    id: 25,
    title: 'It went through such rapid contortions',
    body: 'It went through such rapid contortions that the little bear was forced to change his hold on it so many times he became confused in the darkness, and could not, for the life of him, tell whether he held the sheep right side up, or upside down. But that point was decided for him a moment later by the animal itself, who, with a sudden twist, jabbed its horns so hard into his lowest ribs that he gave a grunt of anger and disgust.',
    userId: 27,
    tags: ['fiction', 'history', 'french'],
    reactions: 3,
  },
  {
    id: 26,
    title: 'She patiently waited for his number to be called.',
    body: "She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.",
    userId: 27,
    tags: ['french', 'mystery', 'crime'],
    reactions: 7,
  },
  {
    id: 27,
    title: 'Ten more steps.',
    body: "If he could take ten more steps it would be over, but his legs wouldn't move. He tried to will them to work, but they wouldn't listen to his brain. Ten more steps and it would be over but it didn't appear he would be able to do it.",
    userId: 17,
    tags: ['mystery', 'classic', 'love'],
    reactions: 4,
  },
  {
    id: 28,
    title: 'He had three simple rules by which he lived.',
    body: 'He had three simple rules by which he lived. The first was to never eat blue food. There was nothing in nature that was edible that was blue. People often asked about blueberries, but everyone knows those are actually purple. He understood it was one of the stranger rules to live by, but it had served him well thus far in the 50+ years of his life.',
    userId: 22,
    tags: ['crime', 'love'],
    reactions: 2,
  },
  {
    id: 29,
    title: 'The chair sat in the corner where it had been',
    body: 'The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.',
    userId: 38,
    tags: ['mystery', 'american'],
    reactions: 6,
  },
];

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
    group: string;
    position: string;
  };
  note?: string;
  last_online: string;
}
const PostDemo: IPosting = {
  id: new Date().getTime().toString(),
  categories: 'Quy định và Hướng dẫn',
  comment_count: 1,
  content: POSTS[Math.floor(Math.random() * POSTS.length)].body,
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
    group: 'Hà nội 888',
    position: 'GĐ',
  },
  last_online: new Date('2024-05-20').toString(),
};

export const LIST_POST_DEMO: IPosting[] = new Array(50).fill(0).map((_, i) => ({
  id: 'id-' + i,
  categories: 'Quy định và Hướng dẫn',
  comment_count: Math.floor(Math.random() * 5000),
  content: POSTS[Math.floor(Math.random() * POSTS.length)].body,
  created_ad: new Date(
    `202${Math.floor(Math.random() * 5)}-${Math.floor(Math.random() * 11) + 1}-${Math.floor(Math.random() * 27) + 1}`,
  ).toString(),
  updated_ad: new Date(
    `202${Math.floor(Math.random() * 5)}-${Math.floor(Math.random() * 11) + 1}-${Math.floor(Math.random() * 27) + 1}`,
  ).toString(),
  images: IMAGE_URLS.splice(0, Math.floor(Math.random() * IMAGE_URLS.length - 1) + 1),
  legal_status: {
    label: 'Sổ đỏ/Sổ hồng',
    value: '0',
  },
  property_feature: COMMENTS[i % COMMENTS.length],
  save_count: Math.floor(Math.random() * 5000),
  spec: {
    area: Math.floor(Math.random() * 300),
    area_unit: 'm²',
    price: `${Math.floor(Math.random() * 300)} ${['Tr', 'Tỷ'][Math.floor(Math.random() * 2)]}`,
    price_unit: '40tr/m²',
  },
  status: 0,
  tags: ['quangtrong', 'nhapho', 'abc', 'test', 'Ha Noi', 'HCM', 'Da Nang', 'Thu Duc'].slice(
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 5) + 2,
  ),
  user: {
    avatar: IMAGE_URLS[i / IMAGE_URLS.length],
    id: Math.floor(Math.random() * 999).toString(),
    name: USER_NAMES[i % USER_NAMES.length],
  },
  view_count: Math.floor(Math.random() * 999),
  address: {
    apartment_number: 'Đường số 1',
    city: 'Hồ Chí Minh',
    district: 'Quận ' + Math.floor(Math.random() * 100),
    details: `Số nhà ${Math.floor(Math.random() * 999)}, đường số ${Math.floor(Math.random() * 100)}, Quốc lộ ${Math.floor(Math.random() * 10)}A, Quận ${Math.floor(Math.random() * 100)}, Thành phố Hồ Chí Minh`,
    street:
      'Quốc lộ ' +
      Math.floor(Math.random() * 100) +
      'ZXCVBNMMMASDFGHJKLQWERTYUIOP'.split('')[Math.floor(Math.random() * 32)],
  },
  owner: {
    fullName: USER_NAMES[i % USER_NAMES.length],
    phone: `0389${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
    group: `${CITY[Math.floor(Math.random() * CITY.length)].label} ${Math.floor(Math.random() * 9999)}`,
    position: 'DC',
    message: Math.floor(Math.random() * 10) > 3 ? '-' : undefined,
    zalo: Math.floor(Math.random() * 10) > 4 ? '-' : undefined,
  },
  last_online: new Date(
    `202${Math.floor(Math.random() * 5)}-${Math.floor(Math.random() * 11) + 1}-${Math.floor(Math.random() * 27) + 1}`,
  ).toString(),
}));

export interface IComment {
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
      fullName: 'Trọng Sa Đoạ',
      avatar: 'https://i.ibb.co/G71tsmT/nha-pho-dep-1.png',
    },
    content: 'Nhà này bị ma ám 20 năm chưa hết',
    created_at: new Date('2021-06-01').toString(),
  },
  {
    user: {
      fullName: 'Nhà Phố Net',
      avatar: 'https://i.ibb.co/rMwM4Xy/nha-pho-35-tang-anh-tinh-nghi-xuan-00005.jpg',
    },
    content: 'Căn nhà này vị đẹp',
    created_at: new Date('2022-11-20').toString(),
  },
  {
    user: {
      fullName: 'Nhà Phố Việt Nam',
      avatar: 'https://i.ibb.co/M6q82yt/50271371-759755064399890-6462199697548247040-n5.webp',
    },
    content: 'Khách hàng muốn bán gấp, để chuyển nhà về quê',
    created_at: new Date('2022-05-11').toString(),
  },
  {
    user: {
      fullName: 'Bệnh viện Tâm thần',
      avatar:
        'https://i.ibb.co/rpWYLdK/Thuc-te-mau-thiet-ke-nha-pho-2-5-tang-dep-hoan-thien-di-vao-su-dung-tai-tpvinh-00005-min.jpg',
    },
    content: 'Nhà này khá cũ anh chị em cẩn thận',
    created_at: new Date('2024-02-05').toString(),
  },
  {
    user: {
      fullName: 'Lương Quang Trọng',
      avatar: 'https://i.ibb.co/TghCvZB/thiet-ke-biet-thu-2-tang-mai-thai.jpg',
    },
    content: 'Chủ hơi hãm',
    created_at: new Date('2024-01-30').toString(),
  },
  {
    user: {
      fullName: 'Ngân hàng Thịnh Vượng',
      avatar: 'https://i.ibb.co/z6j0Rnj/images.jpg',
    },
    content: 'Căn này khách từ chối vài lần khó bán',
    created_at: new Date('2024-05-20').toString(),
  },
];
