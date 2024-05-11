import { Calendar } from '../../atom/Calendar/Calendar';
import { useScheduler } from './useScheduler';
import { Matcher } from 'react-day-picker';

export interface SchedulerProps {
  marking?: Matcher[];
}

export const Scheduler = ({ marking }: SchedulerProps) => {
  const { selected, modifiers } = useScheduler({
    marking: marking ?? [],
  });

  return (
    <Calendar
      mode="range"
      selected={selected}
      modifiers={modifiers}
      modifiersClassNames={{
        marking:
          "after:flex after:flex-col after:items-center after:justify-end after:absolute after:bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:h-full after:content-['•'] after:text-red-500 after:font-bold after:text-xl after:z-[50]",
      }}
      classNames={{
        months: 'w-full',
        caption: 'flex justify-center py-2 mb-4 relative items-center w-full',
        caption_label: 'text-sm font-medium text-gray-900',
        nav: 'flex items-center ',
        table: 'w-full border-collapse',
        head_cell: 'text-muted-foreground rounded-md w-full font-normal text-[0.8rem]',
        cell: 'w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day_selected: 'w-full',
      }}
    />
  );
};
