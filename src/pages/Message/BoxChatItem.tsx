import { Typography, UserIcon } from '@/components/General';

type TChatItem = {
  src: string;
  name: string;
  timeOperation: string;
};

type TBoxChatItem = {
  item: TChatItem;
  onOpenChat?: () => void;
  active?: boolean;
};

export const BoxChatItem = ({ item, onOpenChat, active = false }: TBoxChatItem) => {
  return (
    <div
      className={`flex justify-between p-2 transition-colors cursor-pointer hover:bg-dividerLight rounded-xl ${active ? 'bg-dividerLight' : ''}`}
      onClick={onOpenChat}
    >
      <div className="flex items-center flex-1 gap-2">
        <div className="relative w-10 h-10 overflow-hidden rounded-full shrink-0">
          <img alt={item.name} src={item.src} className="object-cover" />
        </div>
        <div>
          <Typography
            variant="h3"
            className="text-base font-semibold line-clamp-1 text-secondaryColorDarkD2"
          >
            {item.name}
          </Typography>
          <div className="text-sm">
            <p>Chưa có tin nhắn!</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-xs whitespace-nowrap">2 tháng</div>
        <Typography
          variant="span"
          className="flex items-center justify-center w-4 h-4 mt-2 rounded-full bg-dividerLight"
        >
          <UserIcon color="white" width="8" height="8" />
        </Typography>
      </div>
    </div>
  );
};
