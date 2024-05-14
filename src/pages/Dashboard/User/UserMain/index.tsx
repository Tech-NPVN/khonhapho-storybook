import { Button, MessageIcon, Typography } from '@/components/General';

const UserMain = () => {
  return (
    <div className="relative w-full">
      <img src="/nhapho-wallpaper.png" alt="nhapho-wallpaper" />
      <div className="flex bg-white dark:bg-primaryColorDark p-5 gap-5 relative rounded-bl-md rounded-br-md">
        <div className="shrink-0 -top-6 w-40 h-40 rounded-full ring-4 ring-white overflow-hidden absolute">
          <img
            src="https://assets-cdn.khonhapho.com/test/2024_02_28/1d1ulc6-1709190533264.jpg?width=300&height=300"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-52 grow-0"></div>
        <div className="flex w-full justify-between items-end">
          <div>
            <Typography className="font-semibold">Nhà Phố Việt Nam</Typography>
            <Typography variant="h4">Thư ký · Nhà phố Việt Nam</Typography>
            <Typography variant="h4">Khối · Trụ sở Hà Nội</Typography>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.304688" width="20" height="20" rx="4" fill="#0D7490" />
                <path
                  d="M8.22601 16.7497H10.8576V10.4697H12.6944L12.8944 8.36969H10.8576V7.17469C10.8576 6.67469 10.9576 6.48469 11.4628 6.48469H12.8944V4.30469H11.0629C9.09969 4.30469 8.21548 5.12469 8.21548 6.69469V8.37469H6.8418V10.4997H8.21548L8.22601 16.7497Z"
                  fill="white"
                />
              </svg>

              <Typography variant="h4" className="text-[#0D7490]">
                Nhà Phố Việt Nam
              </Typography>
            </div>
          </div>

          <div className="flex gap-[10px]">
            <Button
              startIcon={
                <MessageIcon className="[&>path]:fill-white [&>path[data-path-2]]:fill-black" />
              }
            >
              Nhắn tin
            </Button>

            <Button
              startIcon={
                <MessageIcon className="[&>path]:fill-white [&>path[data-path-2]]:fill-black" />
              }
              variant="defaultBlue"
            >
              Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMain;
