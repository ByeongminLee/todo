import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

const meta = {
  title: 'DesignSystem/Atom/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: () => {
    return (
      <Avatar>
        <AvatarImage src="https://github.com/ByeongminLee.png" />
        <AvatarFallback>BM</AvatarFallback>
      </Avatar>
    );
  },
};
