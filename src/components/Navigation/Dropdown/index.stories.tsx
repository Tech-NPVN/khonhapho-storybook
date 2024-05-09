import { AlarmClock, Button } from '@/components/General';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownRenderProps } from '.';

const Items: DropdownRenderProps[] = [
  { key: '1', label: <a href="/">Xem/Sửa tài khoản</a> },
  { key: '2', label: 'Cấp lại mật khẩu', icon: <AlarmClock /> },
  { key: '3', label: 'Thay đổi chức danh', icon: <AlarmClock />, disabled: true },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  args: {
    items: Items,
    placement: 'bottom',
    trigger: 'mouseenter',
    children: <Button>Dropdouwn</Button>,
    delay: [0, 400],
  },
  argTypes: {
    placement: {
      table: {
        type: {
          summary:
            'top | top-start | top-end| right | right-start| right-end | bottom| bottom-start | bottom-end | left | left-start | left-end | auto | auto-end | auto-start',
        },
      },
    },
    trigger: {
      table: {
        type: {
          summary: 'mouseenter | click',
        },
      },
    },
    delay: {
      table: {
        type: {
          summary: '[0, 400]',
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
