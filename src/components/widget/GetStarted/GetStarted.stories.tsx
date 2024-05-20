import type { Meta, StoryObj } from '@storybook/react';
import { GetStarted } from './GetStarted';

const meta = {
  title: 'DesignSystem/Widget/GetStarted',
  component: GetStarted,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof GetStarted>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
