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
import { DatePicker } from '@/widget';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export interface AddTodoProps {
  categoryLists: ComboBoxList;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
}

export const AddTodo = ({
  categoryLists,
  category,
  setCategory,
  priority,
  setPriority,
}: AddTodoProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const addTodoHandler = () => {
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
        <div className="flex flex-col gap-6 my-8">
          <div className="flex flex-col gap-2">
            <Label>할 일</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <Label>기한</Label>
            <DatePicker />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <Label>카테고리</Label>
              <Combobox
                placeholder="카테고리를 선택하세요."
                lists={categoryLists}
                selected={category}
                setSelected={setCategory}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>중요도</Label>
              <Combobox
                placeholder="중요도를 선택하세요."
                lists={PRIORITY_LIST}
                selected={priority}
                setSelected={setPriority}
              />
            </div>
          </div>
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
