import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './index';

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    textDirection: {
      table: {
        type: {
          summary: 'before | after ',
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
