import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { StoryFrame } from '@/components/system';

const meta = {
  title: 'DesignSystem/Feature/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: () => (
    <StoryFrame className="w-[500px]">
      <Footer />
    </StoryFrame>
  ),
};
