import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';
const OPTIONS = [
  { value: 'Select 1', label: 'Select 1' },
  { value: 'Select 2', label: 'Select 2' },
  { value: 'Disabled', label: 'Disabled', disabled: true },
  { value: 'Select 4', label: 'Select 4' },
];
const meta: Meta<typeof Select> = {
  title: 'DataEntry/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: null,
  },
  argTypes: {
    options: {
      description: '',
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: {
          summary: 'IOption[] | null|',
          detail: `interface IOption {
            value: string;
            label: string;
            disabled?: boolean;
          }`,
        },
      },
    },
    value: {
      table: {
        type: {
          summary: 'IOption | IOption[] | null|',
          detail: `interface IOption {
            value: string;
            label: string;
            disabled?: boolean;
          }`,
        },
        defaultValue: {
          summary: 'null',
        },
      },
      description: '',
    },
    className: {
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    isLoading: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    multiple: {
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
    placeholder: {
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    isLoading: false,
    multiple: false,
    disabled: false,
    options: OPTIONS,
    onChange: () => {
      console.log('onChange');
    },
  },
};
export const Multiple: Story = {
  args: {
    className: '',
    isLoading: false,
    multiple: true,
    disabled: false,
    options: OPTIONS,
    value: [OPTIONS[0], OPTIONS[1]],
    onChange: () => {
      console.log('onChange');
    },
  },
};
