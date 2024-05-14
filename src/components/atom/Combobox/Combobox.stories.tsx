import type { Meta, StoryObj } from '@storybook/react';
import { Combobox, ComboBoxList } from './Combobox';
import { useState } from 'react';
import { StoryFrame } from '@/components/system';

const meta = {
  title: 'DesignSystem/Atom/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummy: ComboBoxList = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export const Example: Story = {
  args: {
    lists: dummy,
    placeholder: 'Select a framework',
    selected: '',
    setSelected: () => {},
  },
  render: ({ ...props }) => {
    const [selected, setSelected] = useState('');

    return (
      <StoryFrame className="p-4 flex flex-col gap-4">
        <Combobox {...props} selected={selected} setSelected={setSelected} />

        <p>선택한 값 : {selected}</p>
      </StoryFrame>
    );
  },
};
