import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

const meta: Meta<typeof Typography> = {
  title: 'General/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    color: '',
  },
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'],
      table: {
        defaultValue: { summary: 'h1' },
        type: {
          summary: 'h1 | h2 | h3 | h4 | h5 | h6 | span | p',
        },
      },
      control: { type: 'select' },
      description: 'Type Variant',
    },
    children: {
      table: {
        type: {
          summary: 'String | ReactNode',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'h1',
    children: 'Button Default',
  },
};
