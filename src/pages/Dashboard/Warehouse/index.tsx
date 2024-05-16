import { Switch } from '@/components/DataEntry';
import { ModalHelp } from '@/components/Feedback';
import {
  AddIcon,
  Button,
  ClockIcon,
  DeleteIcon,
  EyeOffIcon,
  MessageIcon,
  NotificationIcon,
  PinIcon,
  ReportIcon,
  Typography,
} from '@/components/General';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TABLE_HEADER = {
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
} as {
  [key: string]: {
    title: string;
    show?: boolean;
    min_width?: number;
    text_align?: 'center' | 'left' | 'right';
  };
};
const STATUS_LABEL = {
  0: {
    label: 'Tạm dừng',
  },
  1: {
    label: 'Bán mạnh',
  },
  2: {
    label: 'Hạ trào',
  },
  3: {
    label: 'Tăng trào',
  },
  4: {
    label: 'Đã Chốt',
  },
};
const TABLE_DATA = [
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
    status: 4,
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
] as {
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
}[];

export const Warehouse = () => {
  const [tableHeader, setTableHeader] = useState(TABLE_HEADER);
  const [showModalCustomViewRow, setShowModalCustomViewRow] = useState<boolean>(false);
  useEffect(() => {}, []);
  return (
    <>
      <div className="w-full px-6 py-3 bg-white rounded-lg h-96 dark:bg-primaryColorDark">
        <div className="flex justify-between pb-3">
          <div>
            <Typography variant="h2" className="text-sm font-medium uppercase dark:text-white">
              Kho Tài Nguyên
            </Typography>
            <ModalHelp
              label="Lý do không lọc Diện tích/Mặt tiền/Hướng"
              title="Lý do không lọc Diện tích/Mặt tiền/Hướng"
            >
              <div className="pt-4 text-justify">
                <p>
                  <strong>Bản năng</strong> của người <strong>Môi giới</strong> thường hay chạy theo
                  <strong>Khách hàng</strong>. Đặc biệt những <strong>Môi giới</strong> mới vào nghề
                  hay bị <strong>khách hàng chi phối</strong>.
                </p>
                <ol className="pl-3 space-y-2">
                  <li>
                    Không lọc <strong>diện tích</strong> vì:
                    <ul className="pl-0 space-y-1.5">
                      <li className="list-disc">
                        Khách hàng thường yêu cầu tìm <strong>nhà rẻ đẹp</strong> hoặc phù hợp với
                        tài chính của khách nhưng <strong>diện tích</strong> phải{' '}
                        <strong>rộng</strong> hơn so với nhu cầu thực, do khách hàng chưa hiểu thị
                        thường hoặc Khách hàng muốn Môi giới phải <strong>giải bài toán khó</strong>{' '}
                        cho Khách. Nhưng trên <strong>thị trường thực tế</strong> thường khó đáp ứng
                        với yêu cầu của Khách. Nếu có thì là nhà cũ xác định bán đất, lỗi phong thủy
                        hoặc chưa sổ… Vì vậy nếu Anh chị em lọc <strong>diện tích</strong> theo yêu
                        cầu Khách sẽ mất cơ hội tiếp cận những căn nhà có <strong>diện tích</strong>{' '}
                        nhỏ hơn nhưng lại rất phù hợp với các <strong>tiêu chí chính</strong> của
                        Khách. <strong>→ Mất cơ hội</strong> và nhường lại cơ hội cho{' '}
                        <strong>Đối thủ</strong>.
                      </li>
                      <li className="list-disc">
                        <strong>Nguy cơ tiềm ẩn</strong>: Đối Đầu chủ khi đăng bài vì muốn Đầu khách
                        tiếp cận tin đăng của mình nhiều hơn khi lọc Diện tích nên sẽ phải{' '}
                        <strong>tăng khống diện tích</strong> lên để cạnh tranh. Cũng giống như việc
                        Đầu khách đăng tin bao giờ cũng tăng diện tích lên để có Khách hàng gọi đến.
                        Nếu thông tin không còn chính xác nữa thì sẽ tiềm ẩn rủi ro rất lớn.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Không lọc <strong>mặt tiền</strong> vì: cũng giống như diện tích sẽ bị bỏ qua
                    rất nhiều căn nhà phù hợp thực sự với khách. Vì ngoài diện tích và mặt tiền còn
                    có những tiêu chí quan trọng như <strong>Vị trí</strong> đắc địa,{' '}
                    <strong>Kiến trúc</strong> căn nhà, <strong>Phong thủy</strong> tốt,{' '}
                    <strong>Cư dân</strong> văn hóa, <strong>Kinh doanh</strong> tốt…
                  </li>
                  <li>
                    Không lọc <strong>Hướng</strong> vì:
                    <ul className="pl-0 space-y-1.5">
                      <li className="list-disc">
                        <strong>Nếu lọc Hướng</strong> sẽ dẫn đến tình trạng{' '}
                        <strong>không đi Khảo sát</strong> chỉ vì căn đó Hướng không phù hợp với
                        Khách. Cũng giống như việc tại sao Đầu Khách không đăng Hướng lên tin đăng
                        vì chỉ tiếp cận được <strong>50% Khách hàng</strong> có hướng phù hợp với
                        tin đăng đó. Nếu lọc Hướng cũng vậy cũng sẽ <strong>giảm 50%</strong> tiếp
                        cận với những căn nhà đẹp phù hợp với khách chỉ vì Hướng.
                        <strong>→ Mất cơ hội</strong>
                      </li>
                      <li className="list-disc">
                        <strong>Đầu chủ khi ký nhà</strong> có người đo Hướng có người không đo, vì
                        vậy khi đăng bài có người đăng hướng, có người không đăng dẫn đến không đồng
                        nhất được Hướng. Hoặc có Đầu chủ dựa vào sổ để xem hướng đăng bài, nhưng
                        Hướng trên sổ chưa chắc đã chính xác (VD trên sổ là hướng Bắc - ĐTT nhưng
                        khi khảo sát đo thực tế lại là Đông Bắc - TTT). Nên khi lọc sẽ không còn
                        chính xác nữa.
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  <strong>Kho hàng</strong> thông minh nhưng phải có <strong>chọn lọc</strong>. Càng
                  chính xác quá sẽ càng làm giảm cơ hội.
                </p>
              </div>
            </ModalHelp>
          </div>
          <Link to={'/warehouse/add'}>
            <Button className="h-10 w-28">
              <AddIcon className="me-2" width="30" color="white" />
              <span>Đăng tin</span>
            </Button>
          </Link>
        </div>
        <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
        <div className="mt-5">
          <div className="relative">
            <Button
              variant={'outline'}
              startIcon={<EyeOffIcon />}
              className="border-secondaryColorDark text-secondaryColorDark"
              onClick={() => {
                setShowModalCustomViewRow(true);
              }}
            >
              Ẩn cột
            </Button>
            <div
              className={clsx(
                'absolute min-h-[200px] w-[400px] p-4 bg-white border-[1px] border-black/20 z-20 rounded-lg',
              )}
            >
              <div className="w-full flex flex-wrap">
                {Object.entries(tableHeader).map((val) => (
                  <div className="w-[50%]">
                    <Switch
                      isChecked={val[1].show ?? false}
                      onChange={() => {
                        setTableHeader((prev) => ({
                          ...prev,
                          [val[0]]: { ...val[1], show: !val[1]?.show },
                        }));
                      }}
                    />
                    <label className="inline-block ms-2" htmlFor="">
                      {val[1].title}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mt-5 ">
            <div className="overflow-x-scroll w-[calc(100%_-_40px)]">
              <table className="w-full table-auto pr-[40px]">
                <thead>
                  <tr className="bg-[#E5E6E8]">
                    {Object.entries(tableHeader).map((header) =>
                      header[1]?.show && header[0] != 'view' ? (
                        <td
                          className={clsx(
                            'uppercase font-medium text-nowrap text-[0.75rem] py-2 px-2',
                            header[1].text_align === 'center' ? 'text-center ' : '',
                            header[1]?.show ? '' : 'hidden',
                          )}
                          style={{
                            minWidth: header[1].min_width ? header[1].min_width + 'px' : 'auto',
                          }}
                          key={header[1].title}
                        >
                          {header[1].title}
                        </td>
                      ) : null,
                    )}
                    {tableHeader.view?.show && (
                      <td
                        className={clsx(
                          'absolute w-[45px] bg-[#E5E6E8] right-[0]',
                          'uppercase font-medium text-nowrap text-[0.75rem] py-2 px-2',
                          tableHeader.view.text_align === 'center' ? 'text-center ' : '',
                        )}
                      >
                        {tableHeader.view.title}
                      </td>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((data) => (
                    <tr key={data.id} className={'text-sm h-9 [&>td]:even:bg-[#E5E6E8]'}>
                      {tableHeader.save?.show ? (
                        <td>
                          <div className="flex justify-center">
                            <PinIcon />
                          </div>
                        </td>
                      ) : null}
                      {tableHeader.book?.show ? (
                        <td>
                          <div className="flex justify-center">
                            <ClockIcon />
                          </div>
                        </td>
                      ) : null}
                      {tableHeader.time?.show ? <td className="text-center">{data.time}</td> : null}

                      {tableHeader.status?.show && (
                        <td className="flex justify-center items-center h-9 px-2">
                          <div
                            className={clsx(
                              'border-[1px] border-dividerDark bg-black/20 text-center rounded-md text-[12px] px-1',
                              data.status == 0
                                ? 'border-[#FF4D4F] bg-[#FF4D4F]/10 text-[#FF4D4F]'
                                : '',
                              data.status == 2 ? 'border-[green] bg-[#197d16] text-white' : '',
                              data.status == 3
                                ? 'border-[#DD761C] bg-[#FEB941]/10 text-[#DD761C]'
                                : '',
                              data.status == 4 ? 'border-[#FF4D4F] bg-[#FF4D4F] text-white' : '',
                            )}
                          >
                            {STATUS_LABEL[data.status]?.label}
                          </div>
                        </td>
                      )}
                      {tableHeader.address?.show ? (
                        <td className="px-2">
                          <span className="line-clamp-1">{data.address}</span>
                        </td>
                      ) : null}

                      {tableHeader.streets?.show ? (
                        <td className="px-2">
                          <span className="line-clamp-1">{data.streets}</span>
                        </td>
                      ) : null}
                      {tableHeader.district?.show ? (
                        <td className="px-2">
                          <span className="line-clamp-1">{data.district}</span>
                        </td>
                      ) : null}
                      {tableHeader.spec?.show ? (
                        <td className="px-2">
                          <span className="line-clamp-1">{data.spec}</span>
                        </td>
                      ) : null}
                      {tableHeader.price?.show ? (
                        <td className="px-2">
                          <span className="text-nowrap">{data.price}</span>
                        </td>
                      ) : null}
                      {tableHeader.unit?.show ? (
                        <td className="px-2">
                          <span className="text-nowrap">{data.unit}</span>
                        </td>
                      ) : null}
                      {tableHeader.owner?.show ? (
                        <td className="px-2">
                          <span className="text-nowrap">{data.owner}</span>
                        </td>
                      ) : null}
                      {tableHeader.contact?.show ? (
                        <td className="px-2">
                          <span className="text-nowrap flex">
                            <a className="text-linkLight" href={'tel:' + data.contact.phone}>
                              {data.contact.phone}
                            </a>
                            <div className="w-4 text-center mx-2">
                              {data.contact?.zalo ? (
                                <a
                                  className="text-linkLight"
                                  href={data.contact.zalo}
                                  target="_blank"
                                >
                                  <NotificationIcon />
                                </a>
                              ) : (
                                <span>-</span>
                              )}
                            </div>
                            <div className="w-4 text-center mx-2">
                              {data.contact?.message ? (
                                <a
                                  className="text-linkLight"
                                  href={data.contact.message}
                                  target="_blank"
                                >
                                  <MessageIcon />
                                </a>
                              ) : (
                                <span>-</span>
                              )}
                            </div>
                          </span>
                        </td>
                      ) : null}
                      {tableHeader.property_feature?.show ? (
                        <td className="px-2">
                          <span className="line-clamp-1">{data.property_feature}</span>
                        </td>
                      ) : null}
                      {tableHeader.report?.show ? (
                        <td className="px-2">
                          <div className="flex justify-center">
                            <ReportIcon />
                          </div>
                        </td>
                      ) : null}
                      {tableHeader.view?.show ? (
                        <td className="absolute right-0 w-[40px] h-9 flex justify-center items-center px-2">
                          <DeleteIcon />
                        </td>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
