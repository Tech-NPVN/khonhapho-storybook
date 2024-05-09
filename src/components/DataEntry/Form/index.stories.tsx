import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '.';

const meta: Meta<typeof Form> = {
  title: 'Data Entry/Form',
  component: Form,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
