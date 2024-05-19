import type { Meta, StoryObj } from '@storybook/react';
import { Report } from './Report';

const meta = {
  title: 'DesignSystem/Pages/Report',
  component: Report,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Report>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
