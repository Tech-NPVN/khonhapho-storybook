import type { Meta, StoryObj } from '@storybook/react';
import { DatePickerComponent } from './index';

const meta: Meta<typeof DatePickerComponent> = {
  title: 'Data Entry/DatePicker',
  component: DatePickerComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
