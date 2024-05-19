import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';
import { StoryFrame } from '@/components/system';

const meta = {
  title: 'DesignSystem/Atom/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    name: 'Jan',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Feb',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Mar',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Apr',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'May',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jun',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jul',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Aug',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Sep',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Oct',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Nov',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Dec',
    value: Math.floor(Math.random() * 5000) + 1000,
  },
];

export const Example: Story = {
  args: {
    data,
  },
  render: () => (
    <StoryFrame className="p-4">
      <BarChart data={data} />
    </StoryFrame>
  ),
};
