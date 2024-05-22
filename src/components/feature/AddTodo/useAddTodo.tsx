'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  title: z
    .string()
    .min(2, '2글자 이상 입력해주세요')
    .max(50, '50글자 이하로 입력해주세요'),
  category: z.string({ required_error: '카테고리를 선택해주세요' }),
  priority: z.string({ required_error: '우선순위를 선택해주세요' }),
  dueDate: z.date({ required_error: '기한을 선택해주세요' }),
});

type AddTodoType = z.infer<typeof schema>;

export default function useAddTodo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<AddTodoType>({
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    errors,
    control,
    reset,
  };
}
