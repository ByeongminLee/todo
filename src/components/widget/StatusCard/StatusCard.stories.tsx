import type { Meta, StoryObj } from '@storybook/react';
import { StatusCard } from './StatusCard';
import { StoryFrame } from '@/components/system';

const meta = {
  title: 'DesignSystem/Widget/StatusCard',
  component: StatusCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StatusCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: '',
    value: 0,
  },
  render: () => (
    <StoryFrame className="flex gap-4 p-4 w-[900px]">
      <StatusCard title="오늘 할일" value={129} />
      <StatusCard title="남은 할일" value={1112} />
      <StatusCard title="완료된 할일" value={1139} />
    </StoryFrame>
  ),
};
