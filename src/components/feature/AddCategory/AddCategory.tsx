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
import { SetStateAction, useState } from 'react';
import { CirclePicker } from 'react-color';

export interface AddCategoryProps {}

export const AddCategory = ({}: AddCategoryProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const addTodoHandler = () => {
    onClose();
  };

  const [color, setColor] = useState('#000');

  const handleChangeComplete = (color: { hex: SetStateAction<string> }) => {
    setColor(color.hex);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={'outline'}>카테고리 추가</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mx-auto sm:mx-0">TODO 리스트 추가</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6 my-8">
          <div className="flex flex-col gap-2">
            <Label>카테고리명</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <Label>색상</Label>
            <CirclePicker color={color} onChangeComplete={handleChangeComplete} />
          </div>
          <Badge style={{ background: color ?? '' }}>category</Badge>
        </div>

        <DialogFooter>
          <Button onClick={() => addTodoHandler()} type="submit">
            추가
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
