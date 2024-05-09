import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '.';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Tag> = {
    title: 'Data Display/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            table: {
                defaultValue: { summary: '#000000' },
            }
        },
        backgroundColor: {
            table: {
                defaultValue: { summary: '#e7e7e7' }
            }
        }
    },
    args: {
        // 👇 Create an action that appears when the onClick event is fired
        onClick: action('on-click'),
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: '#000000',
        children: 'tag label',
        backgroundColor: '#e7e7e7',
        closeable: true,
    },
};