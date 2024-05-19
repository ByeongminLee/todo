'use client';
import { Container } from '@/atom';
import { TodoList, AddTodo, AddCategory, CategoryList } from '@/feature';
import { fetcher } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { Session } from 'next-auth';
import useTodo from './useTodo';

export interface TodoProps {
  session?: Session | null;
}

export const Todo = ({ session }: TodoProps) => {
  if (!session) return null;
  const { todoList, categoryList, categoryLabel, isTodoLoading, isCategoryLoading } =
    useTodo({ userId: session.id });

  if (isTodoLoading && isCategoryLoading) return null;

  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <div>
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
