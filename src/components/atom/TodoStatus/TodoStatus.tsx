'use client';
import { StatusCard } from '@/widget';
import { cn } from '@/utils';
import { useDataStore } from '@/store/data.store';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

export interface TodoStatusProps {
  className?: string;
}

export const TodoStatus = ({ className }: TodoStatusProps) => {
  const t = useTranslations('todoStatus');
  const actions = useDataStore(state => state.actions);
  const { today, after, complete } = actions.count();

  return (
    <>
      <p className="flex gap-2 typography-muted items-center mb-2">
        <Calendar className="w-4 h-4" />
        {format(new Date(), 'yyyy-MM-dd')}
      </p>
      <div className={cn('flex sm:flex-row gap-4 flex-col', className)}>
        <StatusCard title={t('today')} value={today ?? 0} />
        <StatusCard title={t('after')} value={after ?? 0} />
        <StatusCard title={t('complete')} value={complete ?? 0} />
      </div>
    </>
  );
};
