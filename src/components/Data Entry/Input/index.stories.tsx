import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';


const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '<div><h1>Through mouse or keyboard input content, it is the most basic form field wrapper.</h1></div>'
      },
      controls: { exclude: ['style'] },
      toc: {
        // disable: true, // 👈 Disables the table of contents
      },
    },
  },
  args: {
    color: 'red'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['123', '456', '7854'],
      description: '123',
      table: {
        summary: 'primary | secondary',
      },
      control:{
        type:'select'
      }
    },
    placeholder: {
      table:{
        type:{
          summary:'primary | secondary'
        }
      }
    }
  },

};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    // variant: "solid",
    type: 'datetime-local',
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
  argTypes: {

  }
};
