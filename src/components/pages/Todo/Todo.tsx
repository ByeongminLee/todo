'use client';
import { Container, TodoStatus } from '@/atom';
import { TodoList, AddTodo, AddCategory, CategoryList } from '@/feature';
import useTodo from './useTodo';

export interface TodoProps {}

export const Todo = ({}: TodoProps) => {
  const { todoList, categoryList, categoryLabel, isTodoLoading, isCategoryLoading } =
    useTodo();

  if (isTodoLoading && isCategoryLoading) return null;

  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <TodoStatus />
      <div className="mt-20">
        <h2 className="typography-h2">할 일</h2>
        <TodoList list={todoList} />
      </div>
      <div className="mt-20">
        <div className="flex justify-between typography-h2">
          <h2>나의 카테고리</h2>
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
