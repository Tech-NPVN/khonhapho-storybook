import { ExpandableText } from '@/common/components';
import { Avatar } from '@/components/DataDisplay';
import { Tag } from '@/components/DataDisplay/Tag';
import { Button, ClockIcon, CopyIcon, PinIcon, Typography } from '@/components/General';

export const BookConsignment = () => {
  return (
    <div className="px-4 py-3 mb-5 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <Avatar
            width={32}
            height={32}
            alt="avatar-book"
            src="https://test.khonhapho.vn/images/logo/logo-background.jpg?height=100&width=100"
            shape="circle"
          />
          <div>
            <Typography variant="h4" className="text-base font-semibold">
              Nhà Phố Việt Nam
            </Typography>
            <Typography variant="p" className="flex items-center gap-1 text-secondaryColorDark/50">
              <ClockIcon width="12" height="12" />
              <Typography variant="span" className="text-xs">
                12/03/2024 10:39:45
              </Typography>
            </Typography>
          </div>
        </div>
        <Tag className="h-[22px] px-2 py-1 text-xs text-white font-semibold bg-primaryButtonLight">
          Đất thổ cư - Đất ở
        </Tag>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <div className="text-base font-semibold text-infoLight dark:text-infoDark">
          Nhà 5,5 tầng đường Cầu Giấy, Quận Cầu Giấy - Giá 9,2 tỷ
        </div>
        <div className="flex">
          <div className="flex items-center flex-1 space-x-1">
            <Typography
              variant="span"
              className="text-sm text-primaryColorDark dark:text-primaryColorLight "
            >
              Giá:
            </Typography>
            <Typography
              variant="span"
              className="text-sm font-normal text-errorLight dark:text-errorDark"
            >
              9.2 tỷ
            </Typography>
          </div>
          <div className="flex items-center flex-1 space-x-1">
            <Typography
              variant="span"
              className="text-sm text-primaryColorDark dark:text-primaryColorLight "
            >
              Diện tích:
            </Typography>
            <Typography
              variant="span"
              className="text-sm font-normal text-errorLight dark:text-errorDark"
            >
              40 m²
            </Typography>
          </div>
        </div>
        <div className="space-x-1">
          <Typography
            variant="span"
            className="text-sm text-primaryColorDark dark:text-primaryColorLight "
          >
            SĐT:
          </Typography>
          <a
            href="tel:0941319666"
            className="text-sm font-semibold text-infoLight dark:text-infoDark hover:underline"
            target="_blank"
          >
            0941319666
          </a>
        </div>
        <div className="space-x-1">
          <Typography
            variant="span"
            className="text-sm text-primaryColorDark dark:text-primaryColorLight "
          >
            Địa chỉ:
          </Typography>
          <Typography
            variant="span"
            className="text-sm font-semibold text-primaryColorDark dark:text-primaryColorLight"
          >
            SN 29 ngõ 155/43 đường Cầu Giấy, Phường Yên Hoà, Cầu Giấy, Hà Nội
          </Typography>
        </div>
        <div className="mt-3 text-sm text-primaryColorDark dark:text-primaryColorLight">
          <ExpandableText
            text="Nhà diện tích 40 m2, mới xây 5 tầng, 1 tum, mặt tiền 4,3m vuông đẹp, nhà 2 mặt ngõ, có thang máy, các tầng đều có điều hoà, nóng lạnh.
            Tầng 1: phòng khách, bếp; Tầng 2 có thể làm phòng khách hoặc phòng ngủ; Tầng 3, 4, 5: phòng ngủ WC khép kín; tầng 6: phòng thờ, sân phơi. Nhà đẹp, kiến trúc Âu hiện đại
            Sổ đỏ"
            maxLength={130}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <Button
          startIcon={<CopyIcon />}
          className="h-6 gap-1 px-2 py-1 font-normal rounded text-primaryColorDark dark:text-primaryColorLight border-dividerLight dark:border-dividerDark dark:bg-secondaryColorDark"
          variant="outline"
        >
          Chép
        </Button>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            startIcon={<CopyIcon />}
            className="h-8 gap-1 px-2 py-1 font-normal rounded text-primaryColorDark dark:text-primaryColorLight border-dividerLight dark:border-dividerDark dark:bg-secondaryColorDark"
          >
            Phản hồi
          </Button>
          <Button
            variant="outline"
            startIcon={<PinIcon />}
            className="h-8 gap-1 px-2 py-1 font-normal rounded text-primaryColorDark dark:text-primaryColorLight border-dividerLight dark:border-dividerDark dark:bg-secondaryColorDark"
          >
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
};
