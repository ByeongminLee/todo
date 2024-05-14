import type { Meta, StoryObj } from '@storybook/react';
import { PrivacyPolicy } from './PrivacyPolicy';

const meta = {
  title: 'DesignSystem/Pages/PrivacyPolicy',
  component: PrivacyPolicy,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof PrivacyPolicy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
