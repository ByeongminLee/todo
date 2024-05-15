import type { Meta, StoryObj } from '@storybook/react';
import { AddCategory } from './AddCategory';

const meta = {
  title: 'DesignSystem/Feature/AddCategory',
  component: AddCategory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
