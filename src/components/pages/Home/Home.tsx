'use client';

import { Container } from '@/atom';
import { loginHandler } from '@/utils';
import { signOut, useSession } from 'next-auth/react';

export interface HomeProps {}

export const Home = ({}: HomeProps) => {
  const { data: session, status } = useSession();

  console.log('status: ', session, status);

  return (
    <Container as="main" className="max-w-4xl p-4 mx-auto">
      <button onClick={() => loginHandler('google')}>구글 로그인</button>

      <button onClick={() => loginHandler('kakao')}>카카오 로그인</button>

      <button onClick={() => signOut()}>로그아웃</button>

      <div className="border h-[500px]" />
      <div className="border h-[500px]" />
      <div className="border h-[500px]" />
    </Container>
  );
};
