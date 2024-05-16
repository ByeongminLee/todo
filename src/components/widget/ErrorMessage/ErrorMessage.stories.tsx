import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';
import { StoryFrame } from '@/components/system';

const meta = {
  title: 'DesignSystem/Widget/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const True: Story = {
  args: {
    error: true,
    message: 'This is an error message',
  },
  render: ({ error, message }) => (
    <StoryFrame className="p-4 min-h-12">
      <ErrorMessage error={error} message={message} />
    </StoryFrame>
  ),
};

export const False: Story = {
  args: {
    error: false,
    message: 'This is an error message',
  },
  render: ({ error, message }) => (
    <StoryFrame className="p-4 min-h-12">
      <ErrorMessage error={error} message={message} />
    </StoryFrame>
  ),
};
