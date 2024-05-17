import { Tabs } from '@/components/DataDisplay';
import { ModalHelp } from '@/components/Feedback';
import { AddIcon, Button, Typography } from '@/components/General';
import WarehouseList from '@/pages/Dashboard/Warehouse/List';
import { Link } from 'react-router-dom';

export const Warehouse = () => {
  return (
    <>
      <div className="w-full px-6 py-3 bg-white rounded-lg dark:bg-primaryColorDark">
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
        <div className="mt-5 w-full">
          <Tabs
            variantTab="fillGray"
            widthTabList={500}
            tabs={[
              { name: 'Danh Sách', key: 'ware-list', children: <WarehouseList /> },
              {
                name: 'Chi Tiết',
                key: 'ware-details',
                children: <></>,
              },
              { name: 'Đã lưu', key: 'ware-saved', children: <></> },
            ]}
          ></Tabs>
        </div>
      </div>
    </>
  );
};
