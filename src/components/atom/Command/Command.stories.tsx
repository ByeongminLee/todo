import type { Meta, StoryObj } from '@storybook/react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './Command';

const meta = {
  title: 'DesignSystem/Atom/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: () => (
    <Command>
      <CommandInput placeholder="Search Framework..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Front-end">
          <CommandItem>React</CommandItem>
          <CommandItem>Next</CommandItem>
          <CommandItem>Vue</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Back-end">
          <CommandItem>Nest</CommandItem>
          <CommandItem>Spring</CommandItem>
          <CommandItem>Django</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
