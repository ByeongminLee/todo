import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

const meta = {
  title: 'DesignSystem/Atom/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: () => {
    return (
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );
  },
};
