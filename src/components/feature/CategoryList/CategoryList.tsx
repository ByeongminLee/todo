'use client';
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
import { useTranslations } from 'next-intl';
import { usePagination } from '@/components/atom/Pagination/usePagination';

export interface CategoryListProps {
  list: CategoryWithCount[];
}

export const CategoryList = ({ list }: CategoryListProps) => {
  const t = useTranslations('categoryList');
  const { deleteCategory } = useCategoryList();

  const { paginationList, render } = usePagination({ list, limit: 5 });

  return (
    <div>
      <div className="min-h-[390px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">{t('header1')}</TableHead>
              <TableHead className="text-center">{t('header2')}</TableHead>
              <TableHead className="text-center">{t('header3')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginationList.map(item => (
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
                      <DialogHeader>{t('dialog.title')}</DialogHeader>
                      <DialogDescription>{t('dialog.description')}</DialogDescription>
                      <DialogFooter>
                        <Button
                          className="bg-red-500"
                          onClick={() => deleteCategory({ categoryId: item.id })}
                        >
                          {t('dialog.button')}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {render()}
    </div>
  );
};
