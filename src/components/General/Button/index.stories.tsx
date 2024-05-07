import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    color: '',
    backgroundColor: '',
    size: 'sm',
    isLoading: false,
  },
  argTypes: {
    variant: {
      options: ['default', 'outline', 'ghost', 'link'],
      table: {
        defaultValue: { summary: 'default' },
        type: {
          summary: 'default | outline | ghost | link',
        },
      },
      control: { type: 'select' },
      description: 'Enum Type Variant',
    },
    children: {
      type: { name: 'string', required: true },
    },
    size: {
      options: ['sm', 'lg'],
      table: {
        defaultValue: { summary: 'sm' },
        type: {
          summary: 'sm | lg',
        },
      },
      control: { type: 'radio' },
      description: 'Size Of Element',
    },
    color: {
      description: 'Text Color',
    },
    backgroundColor: {
      description: 'Background Color',
    },
    isLoading: {
      description: 'Loading progress',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Button Default',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'sm',
    children: 'Button Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'sm',
    children: 'Button Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'sm',
    children: 'Button Link',
  },
};
