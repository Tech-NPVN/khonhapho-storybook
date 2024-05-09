import { Meta, StoryObj } from '@storybook/react';
import { CheckBoxCustom } from '.';

const meta: Meta<typeof CheckBoxCustom> = {
  title: 'DataEntry/CheckBoxCustom',
  component: CheckBoxCustom,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    label: 'Label',
    checked: false,
  },
  argTypes: {
    variant: {
      options: ['default', 'success', 'error'],
      table: {
        defaultValue: { summary: 'default' },
        type: {
          summary: 'default | success | error',
        },
      },
      control: { type: 'select' },
    },
    label: {
      table: {
        defaultValue: { summary: 'Label' },
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      type: 'function',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};
