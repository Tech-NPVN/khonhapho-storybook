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

export const Usage: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-5">
        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h2">h2. Heading</Typography>
        <Typography variant="h3">h3. Heading</Typography>
        <Typography variant="h4">h4. Heading</Typography>
        <Typography variant="h5">h5. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>
        <Typography variant="span">span. Heading</Typography>
        <Typography variant="p">p. Heading</Typography>
      </div>
    );
  },
};
