'use client';
import { queryClient } from '@/components/system';
import { fetcher } from '@/utils';
import { useMutation } from '@tanstack/react-query';

export default function useTodoList({ userId }: { userId: string }) {
  const { mutate } = useMutation({
    mutationKey: ['/todo/updates'],
    mutationFn: ({ todoId, status }: { todoId: string; status: boolean }) =>
      fetcher({
        method: 'POST',
        url: '/todo/updates',
        body: { userId, todoId, status },
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      }).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/todo/find-all'] });
    },
  });

  const updateTodo = ({ todoId, status }: { todoId: string; status: boolean }): void => {
    mutate({ todoId, status });
  };

  return { updateTodo };
}
