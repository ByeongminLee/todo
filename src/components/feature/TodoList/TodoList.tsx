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

export interface TodoListProps {
  userId: string;
  list: TodoWithCategory[];
}

export const TodoList = ({ userId, list }: TodoListProps) => {
  const { updateTodo } = useTodoList({ userId });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>할 일</TableHead>
          <TableHead className="w-[150px] text-center">카테고리</TableHead>
          <TableHead className="w-[100px] text-center">중요도</TableHead>
          <TableHead className="w-[150px] text-center">만료일</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map(item => (
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
  );
};

const PriorityBadge = ({ priority }: { priority: PriorityType }) => {
  switch (priority) {
    case 'low':
      return (
        <Badge className="">
          <MoveDown className="w-3 h-2.5 mr-1" /> 낮음
        </Badge>
      );
    case 'medium':
      return (
        <Badge className="bg-green-500">
          <MoveRight className="w-3 h-2.5 mr-1" />
          중간
        </Badge>
      );
    case 'high':
      return (
        <Badge className="bg-red-500">
          <MoveUp className="w-3 h-2.5 mr-1" /> 높음
        </Badge>
      );
  }
};
