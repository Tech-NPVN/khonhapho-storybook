import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Data Entry/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
    defaultChecked: false,
  },
  argTypes: {
    isChecked: {
      type: {
        name: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    defaultChecked: {
      type: {
        name: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      type: {
        name: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'false',
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
