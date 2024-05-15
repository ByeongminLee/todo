import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './Table';

const meta = {
  title: 'DesignSystem/Atom/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: () => (
    <Table>
      <TableCaption>Table Caption</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Head1</TableHead>
          <TableHead>Head2</TableHead>
          <TableHead>Head3</TableHead>
          <TableHead>Head4</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>React</TableCell>
          <TableCell>Next</TableCell>
          <TableCell>Vue</TableCell>
          <TableCell>Svelte</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>React</TableCell>
          <TableCell>Next</TableCell>
          <TableCell>Vue</TableCell>
          <TableCell>Svelte</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
