import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '.';

const meta: Meta<typeof Tag> = {
    title: 'Data Display/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            table: {
                defaultValue: { summary: '#FFFFFF' },
            }
        },
        backgroundColor:{
            table:{
                defaultValue:{summary:'#197D16'}
            }
        }
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color:'#FFFFFF',
        children:'tag tag tag',
        backgroundColor:'#197D16',
        closeIcon:true,
    },
};