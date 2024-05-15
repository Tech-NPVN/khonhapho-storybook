import { TabRenderProps, Tabs } from '@/components/DataDisplay';
import { Input } from '@/components/DataEntry';
import { AddIcon } from '@/components/General';
import { useState } from 'react';
import { BoxChatItem } from './BoxChatItem';
import { Chat, TChat } from './Chat';

export const MessagePage = () => {
  const [idChat, setIdChat] = useState<string>('');

  const ListBoxChat = [
    {
      id: '1',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'TK Trần Thị Hà My .',
      timeOperation: '2 tháng',
    },
    {
      id: '2',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'TK Trần Thị Hà My .',
      timeOperation: '2 tháng',
    },
    {
      id: '13',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Nhà Phố Việt Nam',
      timeOperation: '2 tháng',
    },
    {
      id: '14',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Hà Nội regional announcement',
      timeOperation: '1 năm',
    },
    {
      id: '3',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Hồ Chí Minh regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '4',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Gia Lai regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '5',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Thanh Hóa regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '6',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Hà Nội regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '7',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Nhà Phố Việt Nam',
      timeOperation: '2 tháng',
    },
    {
      id: '8',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Hà Nội regional announcement',
      timeOperation: '1 năm',
    },
    {
      id: '9',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Hồ Chí Minh regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '10',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Gia Lai regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '11',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Thanh Hóa regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '12',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Hà Nội regional director and manager',
      timeOperation: '1 năm',
    },
  ];

  const ListGroupBoxChat = [
    {
      id: '11',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Nhà Phố Việt Nam',
      timeOperation: '2 tháng',
    },
    {
      id: '2',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Hà Nội regional announcement',
      timeOperation: '1 năm',
    },
    {
      id: '3',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Hồ Chí Minh regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '4',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Gia Lai regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '5',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Thanh Hóa regional director and manager',
      timeOperation: '1 năm',
    },
    {
      id: '6',
      src: 'https://assets-cdn.khonhapho.com/351743406-632154005272439-274740519316691425-n-1687250514950.jpg?height=100&width=100',
      name: 'Hà Nội regional director and manager',
      timeOperation: '1 năm',
    },
  ];

  const HOME_TABS: TabRenderProps[] = [
    {
      name: 'Nhóm chat',
      key: 'tab-1',
      children: (
        <div className="h-[calc(100vh_-_185px)] my-3 overflow-y-auto">
          {ListBoxChat.map((boxChat) => (
            <BoxChatItem
              item={boxChat}
              key={boxChat.id}
              onOpenChat={() => setIdChat(boxChat.id)}
              active={boxChat.id === idChat}
            />
          ))}
        </div>
      ),
    },
    {
      name: 'Nhóm mặc định',
      key: 'tab-2',
      children: (
        <div className="h-[calc(100vh_-_185px)] my-3 overflow-y-auto">
          {ListGroupBoxChat.map((groupBoxChat) => (
            <BoxChatItem
              item={groupBoxChat}
              key={groupBoxChat.id}
              active={groupBoxChat.id === idChat}
              onOpenChat={() => setIdChat(groupBoxChat.id)}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="flex min-h-[calc(100vh_-_63px)] relative">
      <div className="w-full h-[calc(100vh_-_63px)] lg:border-r border-r-0 basis-full md:basis-1/3 xl:basis-1/4 p-3">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer hover:bg-dividerLight">
            <AddIcon />
          </div>
          <Input
            className="flex-1 px-3 py-2 text-base font-normal border rounded-full border-dividerLight bg-secondaryColorLightD2"
            placeholder="Tìm kiếm"
            disabled
          />
        </div>
        <div className="w-full">
          <Tabs tabs={HOME_TABS} variantTab="fillGreen" className="flex-1 px-5" />
        </div>
      </div>
      <div className="w-full h-[calc(100vh_-_63px)] ">
        {idChat ? (
          <Chat user={ListBoxChat.find((boxChat) => boxChat.id == idChat) as TChat} />
        ) : (
          <div className="flex-col items-center justify-center hidden h-full transition-all md:basis-2/3 xl:basis-3/4 duration-0 lg:flex">
            Hãy bắt đầu cuộc trò chuyện!'
          </div>
        )}
      </div>
    </div>
  );
};
