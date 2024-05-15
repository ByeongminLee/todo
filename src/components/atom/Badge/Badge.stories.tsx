import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'DesignSystem/Atom/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
