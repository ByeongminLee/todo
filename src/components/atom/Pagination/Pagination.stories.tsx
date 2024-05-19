import type { Meta, StoryObj } from '@storybook/react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './Pagination';
import { usePagination } from './usePagination';
import { StoryFrame } from '@/components/system';

const meta = {
  title: 'DesignSystem/Atom/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>7</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const PaginationHook: Story = {
  args: {},
  render: () => {
    const list = Array.from({ length: 65 }, (_, index) => index + 1);
    const limit = 10;

    const { paginationList, render } = usePagination({ list, limit });

    return (
      <StoryFrame>
        <ul className="typography-list">
          {paginationList.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {render()}
      </StoryFrame>
    );
  },
};
