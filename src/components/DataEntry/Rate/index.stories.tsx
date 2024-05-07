import type { Meta, StoryObj } from '@storybook/react';
import { Rate } from './index';

const meta: Meta<typeof Rate> = {
    title: 'Data Entry/Rate',
    component: Rate,
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
        width:{
            table:{
                defaultValue: { summary: '50' },
                type: {
                    summary: 'number',
                }
            }
        },
        height:{
            table:{
                defaultValue: { summary: '50' },
                type: {
                    summary: 'number',
                }
            }
        },
        alt:{
            table:{
                defaultValue: { summary: 'avatar' },
                type: {
                    summary:'string',
                }
            }
        }
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        shape: 'circle',
        src: 'https://img.docnhanh.vn/images/uploads/2022/11/17/the-thao/messi-khoc.jpg',
        width: 50,
        height: 50
    },
};