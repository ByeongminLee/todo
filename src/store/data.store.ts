import { CategoryDTO, CategoryWithCount, TodoDTO, TodoWithCategory } from '@/types';
import { create } from 'zustand';

interface State {
  todoData: TodoDTO[] | [];
  categoryData: CategoryDTO[] | [];
}

interface Actions {
  actions: {
    setTodoData: (todoData: TodoDTO[]) => void;
    setCategoryData: (categoryData: CategoryDTO[]) => void;
    getTodoList: () => TodoWithCategory[];
    getTodoListSorted: () => TodoWithCategory[];
    getCategoryList: () => CategoryWithCount[];
    getCategoryLabel: () => { label: string; value: string }[];
    count: () => { today: number; after: number; complete: number };
    getMonthTodo: () => { name: string; value: number }[];
    getMonthComplete: () => { name: string; value: number }[];
    getCategoryCount: () => { name: string; value: number }[];
  };
}

const initialState: State = { todoData: [], categoryData: [] };

export const useDataStore = create<State & Actions>((set, get) => ({
  ...initialState,
  actions: {
    setTodoData: (todoData: TodoDTO[]) => set({ todoData }),
    setCategoryData: (categoryData: CategoryDTO[]) => set({ categoryData }),
    getTodoList: () => {
      const { todoData, categoryData } = get();
      return todoData.map((todo: any) => {
        const category =
          categoryData.find((category: any) => category.title === todo.category) || '';
        return { ...todo, category };
      });
    },
    getTodoListSorted: () => {
      const todoList = get().actions.getTodoList();
      return todoList.sort((a: TodoWithCategory, b: TodoWithCategory) => {
        if (a.status === b.status) {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        }
        return a.status ? 1 : -1;
      });
    },
    getCategoryList: () => {
      const { todoData, categoryData } = get();
      return categoryData.map((category: any) => {
        const count = todoData.filter(
          (todo: any) => todo.category === category.title,
        ).length;
        return { ...category, count };
      });
    },
    getCategoryLabel: () => {
      const { categoryData } = get();
      return categoryData.map((category: any) => ({
        label: category.title,
        value: category.title,
      }));
    },
    count: () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const todoListSorted = get().actions.getTodoListSorted();

      const todayDueDateCount = todoListSorted.filter(
        (item: TodoWithCategory) =>
          today.getTime() === new Date(item.dueDate).getTime() && item.status === false,
      ).length;
      const afterDueDateCount = todoListSorted.filter(
        (item: TodoWithCategory) => item.status === false,
      ).length;
      const expiredDueDateCount = todoListSorted.filter(
        (item: TodoWithCategory) => item.status === true,
      ).length;

      return {
        today: todayDueDateCount ?? 0,
        after: afterDueDateCount ?? 0,
        complete: expiredDueDateCount ?? 0,
      };
    },
    getMonthTodo: () => {
      const { todoData } = get();

      const today = new Date();
      const year = today.getFullYear();

      const monthTodo = Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        const count = todoData.filter((todo: TodoDTO) => {
          if (!todo.createdAt) return false;
          const date = new Date(todo.createdAt);
          return date.getMonth() === i && date.getFullYear() === year;
        }).length;
        return { name: `${month}`, value: count };
      });

      return monthTodo;
    },
    getMonthComplete: () => {
      const { todoData } = get();

      const today = new Date();
      const year = today.getFullYear();

      const monthComplete = Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        const count = todoData.filter((todo: TodoDTO) => {
          if (!todo.updatedAt) return false;
          const date = new Date(todo.updatedAt);
          return (
            date.getMonth() === i && date.getFullYear() === year && todo.status === true
          );
        }).length;

        return { name: `${month}`, value: count };
      });
      return monthComplete;
    },
    getCategoryCount: () => {
      const { todoData, categoryData } = get();

      const today = new Date();
      const year = today.getFullYear();

      const monthCategory = categoryData.map((category: CategoryDTO) => {
        const count = todoData.filter((todo: TodoDTO) => {
          if (!todo.createdAt) return false;
          const date = new Date(todo.createdAt);
          return (
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === year &&
            todo.category === category.title
          );
        }).length;

        return { name: category.title, value: count };
      });

      return monthCategory;
    },
  },
}));
