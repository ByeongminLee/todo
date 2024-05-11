import type { Meta, StoryObj } from '@storybook/react';
import { TermsOfService } from './TermsOfService';

const meta = {
  title: 'DesignSystem/Pages/TermsOfService',
  component: TermsOfService,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TermsOfService>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
