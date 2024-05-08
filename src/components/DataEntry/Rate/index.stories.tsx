import type { Meta, StoryObj } from '@storybook/react';
import { Rate } from './index';

const meta: Meta<typeof Rate> = {
    title: 'Data Entry/Rate',
    component: Rate,
    parameters: {
        layout: 'centered',
    },
    argTypes:{
        rating: {
            table: {
                defaultValue: { summary: '3.6' },
            }
        }

    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args:{
    rating:3.6
   }
};