import type { Meta, StoryObj } from '@storybook/react';
import { CategoryList } from './CategoryList';

const meta = {
  title: 'DesignSystem/Feature/CategoryList',
  component: CategoryList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CategoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
