import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
import { Button } from '@/components/General';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    closedIcon: {
      table: {},
    },
    cancelText: {
      table: {
        defaultValue: {
          summary: 'Đóng',
        },
      },
    },
    okText: {
      table: {
        defaultValue: {
          summary: 'Thêm',
          // detail:'123'
        },
      },
    },
    onOk: {
      table: {
        defaultValue: {
          summary: 'function(e)',
          // detail:'123'
        },
      },
    },
    onCancel: {
      table: {
        defaultValue: {
          summary: 'function(e)',
          // detail:'123'
        },
      },
    },

    width: {
      table: {
        defaultValue: {
          summary: '300',
          // detail:'123'
        },
      },
    },
    height: {
      table: {
        defaultValue: {
          summary: '300',
          // detail:'123'
        },
      },
    },
    title: {
      table: {
        defaultValue: {
          summary: 'Dialoggggggg',
          // detail:'123'
        },
      },
    },
    disableInteractOutside: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    children: {
      table: {
        defaultValue: {
          summary: 'Testt',
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cancelText: 'Đóng',
    okText: 'Thêm',
    centered: false,
    width: 300,
    height: 300,
    title: 'Dialog',
    children: `Test`,
    open: false,
    disableInteractOutside: true,
  },
};

export const Example: Story = {
  render: () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    return (
      <div>
        <Button onClick={() => setIsShowModal(true)}>Open Modal</Button>
        <Modal
          open={isShowModal}
          onCancel={() => setIsShowModal(false)}
          footer={true}
          title="Dialog Hay Modal?"
          disableInteractOutside={true}
        >
          <p>Test Modal</p>
          <p>Test Modal</p>
          <p>Test Dialog</p>
          <p>Test Dialog</p>
        </Modal>
      </div>
    );
  },
};
