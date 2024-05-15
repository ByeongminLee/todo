import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/atom';
import { TodoDTO } from '@/types';

export interface TodoListProps {
  list: TodoDTO[];
}

export const TodoList = ({ list }: TodoListProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>할 일</TableHead>
          <TableHead>카테고리</TableHead>
          <TableHead>중요도</TableHead>
          <TableHead>만료일</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map(item => (
          <TableRow key={item.id}>
            <TableCell className="flex items-center gap-4 cursor-pointer">
              <Checkbox className="rounded-full w-5 h-5" id={item.id} />
              <label htmlFor={item.id} className="cursor-pointer">
                {item.title}
              </label>
            </TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.priority}</TableCell>
            <TableCell>{item.dueDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
