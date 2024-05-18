'use client';
import { Container } from '@/atom';
import { TodoList, AddTodo, AddCategory, CategoryList } from '@/feature';



  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <div>
        <h2 className="typography-h2">할 일</h2>
        <TodoList
          list={[
            {
              id: 'QWER123',
              title: '안녕',
              category: '안녕',
              priority: 'low',
              dueDate: '2021-10-10',
              status: false,
              createdAt: '2021-10-10',
              updatedAt: '2021-10-10',
            },
            {
              id: 'QWER456',
              title: '안녕',
              category: '안녕',
              priority: 'low',
              dueDate: '2021-10-10',
              status: false,
              createdAt: '2021-10-10',
              updatedAt: '2021-10-10',
            },
          ]}
        />
      </div>
      <div className="mt-20">
        <div className="flex justify-between typography-h2">
          <h2>나의 카테고리</h2>
          <AddCategory />
        </div>
        <div>
          <CategoryList
            list={[
              {
                id: 'QWER123',
                title: '안녕',
                count: 2,
                color: '#102FFc',
                createdAt: '2021-10-10',
                updatedAt: '2021-10-10',
              },
              {
                id: 'QWER456',
                title: '세계',
                count: 1,
                color: '#Fd4f4d',
                createdAt: '2021-10-10',
                updatedAt: '2021-10-10',
              },
            ]}
          />
        </div>
      </div>
      <AddTodo
        categoryLists={[
          { label: '안녕', value: '안녕' },
          { label: '세계', value: '세계' },
        ]}
      />
    </Container>
  );
};
