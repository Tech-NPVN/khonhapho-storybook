import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, ItemBreadcrumb } from '.';

const breadcrumbs: ItemBreadcrumb[] = [
  { label: 'Home', href: '/' },
  { label: 'Docs', href: '/docs' },
  { label: 'Breadcrumbs', href: '/breadcrumbs' },
];

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumbs: breadcrumbs,
  },
};
