'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, LucideIcon } from 'lucide-react';

import { cn } from '@/utils';
import { Button } from '../Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../Command';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

export interface ComboboxProps {
  lists: ComboBoxList;
  placeholder?: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
export type ComboBoxList = { icon?: LucideIcon; label: string; value: string }[];

export function Combobox({
  lists,
  placeholder = 'Search...',
  selected,
  setSelected,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selected ? lists.find(list => list.value === selected)?.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {lists.map(list => (
                <CommandItem
                  className="typography-muted"
                  key={list.value}
                  value={list.value}
                  onSelect={currentValue => {
                    setSelected(currentValue === selected ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selected === list.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {list?.icon ? <list.icon className="mr-2 h-4 w-4" /> : null}
                  {list.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
