export interface TodoDTO {
  id: string;
  status: boolean;
  title: string;
  category: string;
  priority: PriorityType;
  dueDate: string;
}

export type PriorityType = 'low' | 'medium' | 'high';

export interface CategoryDTO {
  id: string;
  title: string;
  color: string;
}

export interface CategoryWithCount extends CategoryDTO {
  count: number;
}
