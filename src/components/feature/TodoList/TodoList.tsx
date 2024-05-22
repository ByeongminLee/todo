'use client';
import {
  Badge,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/atom';
import { PriorityType, TodoWithCategory } from '@/types';
import { format } from 'date-fns';
import { MoveDown, MoveRight, MoveUp } from 'lucide-react';
import useTodoList from './useTodoList';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import { usePagination } from '@/components/atom/Pagination/usePagination';

export interface TodoListProps {
  list: TodoWithCategory[];
}

export const TodoList = ({ list }: TodoListProps) => {
  const t = useTranslations('todoList');
  const { updateTodo } = useTodoList();
  const { paginationList, render } = usePagination({ list, limit: 5 });

  return (
    <div>
      <div className="min-h-[390px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('header1')}</TableHead>
              <TableHead className="w-[150px] text-center">{t('header2')}</TableHead>
              <TableHead className="w-[100px] text-center">{t('header3')}</TableHead>
              <TableHead className="w-[150px] text-center">{t('header4')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginationList.map(item => (
              <TableRow key={item.id}>
                <TableCell
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() =>
                    updateTodo({
                      todoId: item.id,
                      status: !item.status,
                    })
                  }
                >
                  <Checkbox checked={item.status} className="rounded-full w-5 h-5" />
                  <label
                    htmlFor={item.id}
                    className={cn(
                      'cursor-pointer',
                      item.status ? 'line-through typography-muted' : '',
                    )}
                  >
                    {item.title}
                  </label>
                </TableCell>
                <TableCell className="text-center">
                  {item.category && (
                    <Badge style={{ backgroundColor: item.category.color }}>
                      {item.category.title}
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <PriorityBadge priority={item.priority} />
                </TableCell>
                <TableCell
                  className={cn('text-center', item.status ? 'typography-muted' : '')}
                >
                  {format(item.dueDate, 'yyyy-MM-dd')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {render()}
    </div>
  );
};

const PriorityBadge = ({ priority }: { priority: PriorityType }) => {
  const t = useTranslations('todoList');
  switch (priority) {
    case 'low':
      return (
        <Badge className="">
          <MoveDown className="w-3 h-2.5 mr-1" />
          {t('low')}
        </Badge>
      );
    case 'medium':
      return (
        <Badge className="bg-green-500">
          <MoveRight className="w-3 h-2.5 mr-1" />
          {t('medium')}
        </Badge>
      );
    case 'high':
      return (
        <Badge className="bg-red-500">
          <MoveUp className="w-3 h-2.5 mr-1" />
          {t('high')}
        </Badge>
      );
  }
};
