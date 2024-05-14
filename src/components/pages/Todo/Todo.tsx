'use client';
import { Container } from '@/atom';
import { TodoList, AddTodo, AddCategory } from '@/feature';
import { useState } from 'react';

export interface TodoProps {}

export const Todo = ({}: TodoProps) => {
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <div>
        <h2 className="typography-h2">할 일</h2>
        <TodoList />
      </div>
      <div>
        <div className="flex justify-between typography-h2">
          <h2>나의 카테고리</h2>
          <AddCategory />
        </div>
        <div>카테고리 리스트 영역</div>
      </div>
      <AddTodo
        categoryLists={[
          { label: '안녕', value: '안녕' },
          { label: '세계', value: '세계' },
        ]}
        category={category}
        setCategory={setCategory}
        priority={priority}
        setPriority={setPriority}
      />
    </Container>
  );
};
