import type { Meta, StoryObj } from '@storybook/react';
import { BorderBeam } from './BorderBeam';
import Image from 'next/image';

const meta = {
  title: 'DesignSystem/Atom/BorderBeam',
  component: BorderBeam,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BorderBeam>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: props => (
    <div className="flex justify-center mt-8 relative rounded-xl">
      <Image src="/assets/imgs/logo.png" width={300} height={200} alt="img" />
      <BorderBeam />
    </div>
  ),
};
