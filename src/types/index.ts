export interface TodoDTO {
  id: string;
  status: boolean;
  title: string;
  category: string;
  priority: PriorityType;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoWithCategory {
  id: string;
  status: boolean;
  title: string;
  priority: PriorityType;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  category?: {
    title: string;
    color: string;
  };
}

export type PriorityType = 'low' | 'medium' | 'high';

export interface CategoryDTO {
  id: string;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryWithCount extends CategoryDTO {
  count: number;
}
