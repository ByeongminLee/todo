import type { Meta, StoryObj } from '@storybook/react';
import { TodoStatus } from './TodoStatus';

const meta = {
  title: 'DesignSystem/Atom/TodoStatus',
  component: TodoStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TodoStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
