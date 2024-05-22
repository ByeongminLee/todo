'use client';

import { useDataStore } from '@/store/data.store';
import { fetcher } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export default function useTodo({ userId }: { userId: string }) {
  const setTodoData = useDataStore(state => state.actions.setTodoData);
  const setCategoryData = useDataStore(state => state.actions.setCategoryData);
  const actions = useDataStore(state => state.actions);

  const { data: todoData, isLoading: isTodoLoading } = useQuery({
    queryKey: ['/todo/find-all'],
    queryFn: () =>
      fetcher({
        method: 'POST',
        url: '/todo/find-all',
        headers: { Authorization: `Bearer ${userId}` },
      }),
  });

  const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
    queryKey: ['/category/find-all'],
    queryFn: () =>
      fetcher({
        method: 'POST',
        url: '/category/find-all',
        headers: { Authorization: `Bearer ${userId}` },
      }),
  });

  if (!todoData || !categoryData) {
    return {
      todoList: [],
      categoryList: [],
      categoryLabel: [],
    };
  }

  setTodoData(todoData);
  setCategoryData(categoryData);

  const todoList = actions.getTodoListSorted();
  const categoryList = actions.getCategoryList();
  const categoryLabel = actions.getCategoryLabel();

  return {
    isTodoLoading,
    isCategoryLoading,
    todoList,
    categoryList,
    categoryLabel,
  };
}
