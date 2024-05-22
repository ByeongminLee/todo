'use client';

import { BarChart, Card, Container, TodoStatus } from '@/atom';
import useReport from './useReport';
import { useTranslations } from 'next-intl';

export interface ReportProps {}

export const Report = ({}: ReportProps) => {
  const t = useTranslations('report');

  const { isTodoLoading, isCategoryLoading, monthTodo, monthComplete, categoryCount } =
    useReport();

  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <TodoStatus />
      <div className="mt-20 flex flex-col gap-4 sm:flex-row">
        <div className="w-full">
          <h2 className="typography-h2">{t('header1')}</h2>
          <Card className="px-4 py-8">{monthTodo && <BarChart data={monthTodo} />}</Card>
        </div>
        <div className="w-full">
          <h2 className="typography-h2">{t('header2')}</h2>
          <Card className="px-4 py-8">
            {monthComplete && <BarChart data={monthComplete} />}
          </Card>
        </div>
      </div>
      <div className="mt-20">
        <div className="w-full">
          <h2 className="typography-h2">{t('header3')}</h2>
          <Card className="px-4 py-8">
            {categoryCount && <BarChart data={categoryCount} />}
          </Card>
        </div>
      </div>
    </Container>
  );
};
