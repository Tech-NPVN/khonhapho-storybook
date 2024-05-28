import useCustomPagination from '@/hooks/UsePagination';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom'; // or BrowserRouter if you prefer
import Pagination from '.';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {
    current: {
      control: 'number',
      description: 'Current active page number',
    },
    itemPerPage: {
      control: 'number',
      description: 'Number of items per page',
    },
    onChangePage: {
      action: 'changed',
      description: 'Function to change the page',
    },
    totalCount: {
      control: 'number',
      description: 'Total number of items',
    },
    onChangePageSize: {
      action: 'changed',
      description: 'Function to change the number of items per page',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => (
    <MemoryRouter>
      <PaginationWrapper />
    </MemoryRouter>
  ),
};

const PaginationWrapper = () => {
  const {
    pagination: { activePage, itemsPerPage },
    setPage,
    setPageSize,
  } = useCustomPagination('0', 20);

  return (
    <Pagination
      current={Number(activePage)}
      itemPerPage={itemsPerPage}
      onChangePage={(e) => setPage(String(e))}
      totalCount={100}
      onChangePageSize={(e) => setPageSize(Number(e))}
    />
  );
};
