import type { Meta, StoryObj } from '@storybook/react';
import Radio from '.';

const meta: Meta<typeof Radio> = {
  title: 'Data Entry/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
