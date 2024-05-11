import type { Meta, StoryObj } from '@storybook/react';
import { Scheduler } from './Scheduler';
import { StoryFrame } from '@/components/system';

const meta = {
  title: 'DesignSystem/Widget/Scheduler',
  component: Scheduler,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Scheduler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: () => {
    return (
      <StoryFrame className="w-[480px]">
        <Scheduler marking={[new Date(2024, 4, 10), new Date(2024, 4, 11)]} />
      </StoryFrame>
    );
  },
};
