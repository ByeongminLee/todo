import type { Meta, StoryObj } from '@storybook/react';
import { SocialButton } from './SocialButton';

const meta = {
  title: 'DesignSystem/Widget/SocialButton',
  component: SocialButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Google: Story = {
  args: {
    variant: 'google',
    onClick: () => {},
  },
};

export const KaKao: Story = {
  args: {
    variant: 'kakao',
    onClick: () => {},
  },
};
