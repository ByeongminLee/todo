import type { Meta, StoryObj } from '@storybook/react';
import { TodoList } from './TodoList';

const meta = {
  title: 'DesignSystem/Feature/TodoList',
  component: TodoList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
