'use client';

import { TodoDTO } from '@/types';
import { fetcher } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export default function useTodo({ userId }: { userId: string }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
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

  const todoList = todoData.map((todo: any) => {
    const category =
      categoryData.find((category: any) => category.title === todo.category) || '';
    return { ...todo, category };
  });

  // status가 false가 앞에 오도록 정렬
  // + 이후dueDate가 오래된 순으로 정렬
  const todoListSorted = todoList.sort((a: any, b: any) => {
    if (a.status === b.status) {
      return a.dueDate - b.dueDate;
    }
    return a.status ? 1 : -1;
  });

  const categoryList = categoryData.map((category: any) => {
    const count = todoData.filter((todo: any) => todo.category === category.title).length;
    return { ...category, count };
  });

  const categoryLabel = categoryData.map((category: any) => ({
    label: category.title,
    value: category.title,
  }));

  const todayDueDateCount = todoListSorted.filter(
    (item: TodoDTO) =>
      today.getTime() === new Date(item.dueDate).getTime() && item.status === false,
  ).length;
  const afterDueDateCount = todoListSorted.filter(
    (item: TodoDTO) => item.status === false,
  ).length;
  const expiredDueDateCount = todoListSorted.filter(
    (item: TodoDTO) => item.status === true,
  ).length;

  return {
    isTodoLoading,
    isCategoryLoading,
    todoList: todoListSorted,
    categoryList,
    categoryLabel,
    count: {
      today: todayDueDateCount ?? 0,
      after: afterDueDateCount ?? 0,
      complete: expiredDueDateCount ?? 0,
    },
  };
}
