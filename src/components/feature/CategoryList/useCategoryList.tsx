'use client';

import { queryClient } from '@/components/system';
import { useUserStore } from '@/store/user.store';
import { fetcher } from '@/utils';
import { useMutation } from '@tanstack/react-query';

export default function useCategoryList() {
  const { userId } = useUserStore();

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
