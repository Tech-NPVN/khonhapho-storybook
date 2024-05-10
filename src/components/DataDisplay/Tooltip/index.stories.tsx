import { Button } from '@/components/General';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '.';

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  args: {
    placement: 'bottom',
    trigger: 'mouseenter',
    children: <Button>Tooltip</Button>,
    title: 'Hello Pro',
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
          summary: '[]',
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
