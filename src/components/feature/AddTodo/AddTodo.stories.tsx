import type { Meta, StoryObj } from '@storybook/react';
import { AddTodo } from './AddTodo';

const meta = {
  title: 'DesignSystem/Feature/AddTodo',
  component: AddTodo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
