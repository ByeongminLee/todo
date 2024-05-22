'use client';
import { Container, TodoStatus } from '@/atom';
import { TodoList, AddTodo, AddCategory, CategoryList } from '@/feature';
import useTodo from './useTodo';
import { useTranslations } from 'next-intl';

export interface TodoProps {
  userId: string;
}

export const Todo = ({ userId }: TodoProps) => {
  const t = useTranslations('todo');

  const { todoList, categoryList, categoryLabel, isTodoLoading, isCategoryLoading } =
    useTodo({ userId });

  if (isTodoLoading && isCategoryLoading) return null;

  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <TodoStatus />
      <div className="mt-20">
        <h2 className="typography-h2">{t('header1')}</h2>
        <TodoList list={todoList} />
      </div>
      <div className="mt-20">
        <div className="flex justify-between typography-h2">
          <h2>{t('header2')}</h2>
          <AddCategory />
        </div>
        <div>
          <CategoryList list={categoryList} />
        </div>
      </div>
      <AddTodo categoryLists={categoryLabel} />
    </Container>
  );
};
