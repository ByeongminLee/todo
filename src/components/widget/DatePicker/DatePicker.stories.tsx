import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta = {
  title: 'DesignSystem/Widget/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
