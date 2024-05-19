'use client';
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/atom';
import { useState } from 'react';
import { CirclePicker } from 'react-color';
import useAddCategory from './useAddCategory';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@/components';
import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/utils';
import { queryClient } from '@/components/system';
import { useUserStore } from '@/store/user.store';

export interface AddCategoryProps {}

export const AddCategory = ({}: AddCategoryProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const [color, setColor] = useState('#b6b6b6');
  const { userId } = useUserStore();

  const { register, handleSubmit, errors, control, reset } = useAddCategory();

  const { mutate } = useMutation({
    mutationKey: ['/category/create'],
    mutationFn: value =>
      fetcher({
        method: 'POST',
        url: '/category/create',
        body: value,
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      }).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/category/find-all'] });
    },
  });

  const addCategory = (data: any) => {
    mutate(data);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={'outline'}>카테고리 추가</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mx-auto sm:mx-0">카테고리 추가</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(addCategory)}>
          <div className="flex flex-col gap-6 my-8">
            <div className="flex flex-col gap-2">
              <Label>카테고리명</Label>
              <Input
                {...register('title')}
                name="title"
                placeholder="카테고리를 입력해주세요"
              />

              <ErrorMessage error={errors.title} message={errors.title?.message} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>색상</Label>
              <Controller
                name="color"
                control={control}
                render={({ field }) => (
                  <CirclePicker
                    color={field.value}
                    onChangeComplete={v => {
                      setColor(v.hex);
                      field.onChange(v.hex);
                    }}
                  />
                )}
              />
              <ErrorMessage error={errors.color} message={errors.color?.message} />
            </div>
            <Badge style={{ background: color ?? '' }}>category</Badge>
          </div>

          <DialogFooter>
            <Button type="submit">추가</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
