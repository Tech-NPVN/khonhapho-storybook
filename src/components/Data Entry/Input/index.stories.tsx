import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';
import { Description } from 'node_modules/@headlessui/react/dist/components/description/description';

const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '<div><h1>Through mouse or keyboard input content, it is the most basic form field wrapper.</h1></div>'
      },
      
      toc: {
        // disable: true, // 👈 Disables the table of contents
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {

  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    // variant: "solid",
    type: 'text',
    placeholder: 'Input Testing',
    onError: () => console.log('123'),
    name: 'firstname'
  },
  parameters: {
    docs: {
      description: {
        story: 'Another description on the story, overriding the comments'
      },
    },
  },
  
};
