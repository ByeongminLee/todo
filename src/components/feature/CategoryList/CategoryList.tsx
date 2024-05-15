import {
  Badge,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/atom';
import { CategoryWithCount } from '@/types';

export interface CategoryListProps {
  list: CategoryWithCount[];
}

export const CategoryList = ({ list }: CategoryListProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>카테고리</TableHead>
          <TableHead>사용횟수</TableHead>
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
            <TableCell>{item.count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
