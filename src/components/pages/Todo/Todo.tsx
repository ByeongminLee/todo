'use client';
import { Container } from '@/atom';
import { TodoList, AddTodo, AddCategory, CategoryList } from '@/feature';
import { Session } from 'next-auth';
import useTodo from './useTodo';
import { StatusCard } from '@/widget';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

export interface TodoProps {
  session?: Session | null;
}

export const Todo = ({ session }: TodoProps) => {
  if (!session) return null;
  const {
    todoList,
    categoryList,
    categoryLabel,
    isTodoLoading,
    isCategoryLoading,
    count,
  } = useTodo({ userId: session.id });

  if (isTodoLoading && isCategoryLoading) return null;

  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <p className="flex gap-2 typography-muted items-center mb-2">
        <Calendar className="w-4 h-4" />
        {format(new Date(), 'yyyy-MM-dd')}
      </p>
      <div className="flex sm:flex-row gap-4 flex-col">
        <StatusCard title="오늘 할일" value={count?.today ?? 0} />
        <StatusCard title="남은 할일" value={count?.after ?? 0} />
        <StatusCard title="완료된 할일" value={count?.complete ?? 0} />
      </div>
      <div className="mt-20">
        <h2 className="typography-h2">할 일</h2>
        <TodoList userId={session.id} list={todoList} />
      </div>
      <div className="mt-20">
        <div className="flex justify-between typography-h2">
          <h2>나의 카테고리</h2>
          <AddCategory userId={session.id} />
        </div>
        <div>
          <CategoryList userId={session.id} list={categoryList} />
        </div>
      </div>
      <AddTodo userId={session.id} categoryLists={categoryLabel} />
    </Container>
  );
};
