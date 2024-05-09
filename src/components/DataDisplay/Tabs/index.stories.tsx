import type { Meta, StoryObj } from '@storybook/react';
import { TabRenderProps, Tabs } from '.';

const TABS_DEMO: TabRenderProps[] = [
  {
    name: 'Tab 1',
    key: 'tab-1',
    children: <>Tab Panel 1</>,
  },
  {
    name: 'Tab 2',
    key: 'tab-2',
    children: <>Tab Panel 2</>,
  },
  {
    name: 'Tab 3',
    key: 'tab-3',
    children: <>Tab Panel 3</>,
  },
];

const meta: Meta<typeof Tabs> = {
  title: 'Data Display/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    tabs: TABS_DEMO,
    variantTab: 'underline',
  },
  argTypes: {
    tabs: {
      control: {
        step: 1,
      },
      table: {
        type: {
          detail: `interface TabRenderProps {
            name: string | ReactNode;
            key: string;
            children: ReactNode;
            disabled?: boolean;
          }`,
        },
      },
    },
    variantTab: {
      table: {
        type: {
          summary: 'underline | fillGray | fillGreen',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
