import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
    title: 'Data Display/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        shape: {
            options: ['circle', 'square'],
            table: {
                defaultValue: { summary: 'circle' },
                type: {
                    summary: 'circle | square ',
                }
            }
        },
        size: {
            options: ['sm','lg','default'],
            control:{
                type: 'select',
            
            }
        },
        width: {

        }
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'default',
        shape: 'square',
        // children: '123',
        src: 'https://img.docnhanh.vn/images/uploads/2022/11/17/the-thao/messi-khoc.jpg',
        // width: '100px',
        // height: '100px'
    },
};