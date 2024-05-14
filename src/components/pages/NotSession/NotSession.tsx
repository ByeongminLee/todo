import { Button, Container, Logo } from '@/components/atom';
import Link from 'next/link';

export interface NotSessionProps {}

export const NotSession = ({}: NotSessionProps) => {
  return (
    <Container as="main" className="flex justify-center items-center h-[80dvh]">
      <div className="min-w-[280px]">
        <Logo width={30} height={30} />
        <p className="typography-lead mt-2">로그인 후 이용해주세요</p>
        <Link href={'/'}>
          <Button className="w-full mt-10">홈으로 가기</Button>
        </Link>
      </div>
    </Container>
  );
};
