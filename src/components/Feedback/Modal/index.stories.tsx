import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';

const meta: Meta<typeof Modal> = {
    title: 'Feedback/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        closedIcon:{
            table:{
                
            }
        }
           
        
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        cancelText:'Đóng',
        okText:'Thêm',
    },
};