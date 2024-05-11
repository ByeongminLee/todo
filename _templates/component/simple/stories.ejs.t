---
to: src/components/<%= category %>/<%= name %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';
import { <%= name %> } from './<%= name %>';

const meta = {
  title: 'DesignSystem/<%= category_upper %>/<%= name %>',
  component: <%= name %>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof <%= name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
