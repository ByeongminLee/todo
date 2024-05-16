'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  title: z
    .string()
    .min(2, '2글자 이상 입력해주세요')
    .max(15, '15글자 이하로 입력해주세요'),
  color: z.string({ required_error: '색상을 선택해주세요' }),
});

type AddTodoType = z.infer<typeof schema>;

export default function useAddCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddTodoType>({
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    errors,
    control,
  };
}
