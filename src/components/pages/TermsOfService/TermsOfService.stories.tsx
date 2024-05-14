import type { Meta, StoryObj } from '@storybook/react';
import { TermsOfService } from './TermsOfService';

const meta = {
  title: 'DesignSystem/Pages/TermsOfService',
  component: TermsOfService,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof TermsOfService>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
