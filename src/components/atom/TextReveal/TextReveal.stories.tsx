import type { Meta, StoryObj } from '@storybook/react';
import { TextReveal } from './TextReveal';

const meta = {
  title: 'DesignSystem/Atom/TextReveal',
  component: TextReveal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof TextReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    text: 'Text Reveal Component',
  },
  render: ({ ...args }) => {
    return (
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-white">
        <TextReveal text={args.text} />
      </div>
    );
  },
};
