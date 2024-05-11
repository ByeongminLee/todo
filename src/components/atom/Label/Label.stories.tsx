import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from '..';

const meta = {
  title: 'DesignSystem/Atom/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render() {
    return (
      <div>
        <Label htmlFor="name">label</Label>
        <Input id="label" placeholder="placeholder" />
      </div>
    );
  },
};
