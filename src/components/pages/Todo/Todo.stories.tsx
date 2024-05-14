import type { Meta, StoryObj } from '@storybook/react';
import { Todo } from './Todo';

const meta = {
  title: 'DesignSystem/Pages/Todo',
  component: Todo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Todo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
