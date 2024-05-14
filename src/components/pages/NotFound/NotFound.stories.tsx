import type { Meta, StoryObj } from '@storybook/react';
import { NotFound } from './NotFound';

const meta = {
  title: 'DesignSystem/Pages/NotFound',
  component: NotFound,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
