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
  args: {
    label: 'Default',
    value: '',
    checked: false,
    disabled: false,
    className: '',
    defaultChecked: false,
    name: '',
  },
  argTypes: {
    checked: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    defaultChecked: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
};
