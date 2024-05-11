import type { Meta, StoryObj } from '@storybook/react';
import { PrivacyPolicy } from './PrivacyPolicy';

const meta = {
  title: 'DesignSystem/Pages/PrivacyPolicy',
  component: PrivacyPolicy,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PrivacyPolicy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
