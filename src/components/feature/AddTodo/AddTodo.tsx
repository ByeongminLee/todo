'use client';
import {
  Button,
  Combobox,
  ComboBoxList,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/atom';
import { PRIORITY_LIST } from '@/constants';
import { DatePicker, ErrorMessage } from '@/widget';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import useAddTodo from './useAddTodo';
import { Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/utils';
import { queryClient } from '@/components/system';
import { useUserStore } from '@/store/user.store';

export interface AddTodoProps {
  categoryLists: ComboBoxList;
}

export const AddTodo = ({ categoryLists }: AddTodoProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const { userId } = useUserStore();

  const { register, handleSubmit, errors, control, reset } = useAddTodo();

  const { mutate } = useMutation({
    mutationKey: ['/todo/create'],
    mutationFn: value =>
      fetcher({
        method: 'POST',
        url: '/todo/create',
        body: value,
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      }).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/todo/find-all'] });
    },
  });

  const addTodo = (data: any) => {
    mutate(data);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-10 right-10 rounded-full p-2 w-14 h-14">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mx-auto sm:mx-0">TODO 리스트 추가</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(addTodo)}>
          <div className="my-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label>할 일</Label>
                <Input
                  {...register('title')}
                  name="title"
                  placeholder="할 일을 입력해주세요"
                />
                <ErrorMessage error={errors.title} message={errors.title?.message} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>기한</Label>
                <Controller
                  name="dueDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker date={field.value} setDate={field.onChange} />
                  )}
                />
                <ErrorMessage error={errors.dueDate} message={errors.dueDate?.message} />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <Label>카테고리</Label>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Combobox
                        placeholder="카테고리를 선택하세요."
                        lists={categoryLists}
                        selected={field.value}
                        setSelected={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>중요도</Label>
                  <Controller
                    name="priority"
                    control={control}
                    render={({ field }) => (
                      <Combobox
                        placeholder="중요도를 선택하세요."
                        lists={PRIORITY_LIST}
                        selected={field.value}
                        setSelected={field.onChange}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <ErrorMessage error={errors.category} message={errors.category?.message} />
              <ErrorMessage error={errors.priority} message={errors.priority?.message} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">추가</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
