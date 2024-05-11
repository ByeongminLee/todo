import { endOfWeek, startOfWeek } from 'date-fns';
import { useState } from 'react';
import { DateRange, Matcher } from 'react-day-picker';

export interface SchedulerHookProps {
  marking: Matcher[];
}

export const useScheduler = ({ marking }: SchedulerHookProps) => {
  const [selected, setSelected] = useState<DateRange>();

  const [marked, setMarked] = useState(marking);

  return { selected, modifiers: { marking: marked } };
};
