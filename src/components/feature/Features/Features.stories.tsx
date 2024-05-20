import type { Meta, StoryObj } from '@storybook/react';
import { Features } from './Features';

const meta = {
  title: 'DesignSystem/Feature/Features',
  component: Features,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
