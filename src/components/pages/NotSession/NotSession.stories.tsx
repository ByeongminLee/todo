import type { Meta, StoryObj } from '@storybook/react';
import { NotSession } from './NotSession';

const meta = {
  title: 'DesignSystem/Pages/NotSession',
  component: NotSession,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof NotSession>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
