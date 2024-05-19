import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/atom';
import { CategoryWithCount } from '@/types';
import { Trash2 } from 'lucide-react';
import useCategoryList from './useCategoryList';

export interface CategoryListProps {
  list: CategoryWithCount[];
  userId: string;
}

export const CategoryList = ({ list, userId }: CategoryListProps) => {
  const { deleteCategory } = useCategoryList({ userId: userId });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50%]">카테고리</TableHead>
          <TableHead className="text-center">사용횟수</TableHead>
          <TableHead className="text-center">삭제</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map(item => (
          <TableRow key={item.id}>
            <TableCell>
              <Badge
                style={{
                  backgroundColor: item.color,
                }}
              >
                {item.title}
              </Badge>
            </TableCell>
            <TableCell className="text-center">{item.count}</TableCell>
            <TableCell className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Trash2 className="h-8 w-8 hover:bg-gray-200 p-2 rounded-full cursor-pointer" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>카테고리 삭제하기</DialogHeader>
                  <DialogDescription>
                    해당 카테고리를 사용하는 ToDo는 삭제 되지 않습니다.
                  </DialogDescription>
                  <DialogFooter>
                    <Button
                      className="bg-red-500"
                      onClick={() => deleteCategory({ categoryId: item.id })}
                    >
                      삭제
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
