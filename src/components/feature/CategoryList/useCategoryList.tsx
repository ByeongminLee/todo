'use client';

import { queryClient } from '@/components/system';
import { fetcher } from '@/utils';
import { useMutation } from '@tanstack/react-query';

export default function useCategoryList({ userId }: { userId: string }) {
  const { mutate: deleteCategory } = useMutation({
    mutationKey: ['/category/delete'],
    mutationFn: ({ categoryId }: { categoryId: string }) =>
      fetcher({
        method: 'POST',
        url: '/category/delete',
        body: { userId, categoryId },
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      }).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/category/find-all'] });
    },
  });
  return { deleteCategory };
}
