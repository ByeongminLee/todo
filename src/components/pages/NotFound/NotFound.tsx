import { Button, Container, Logo } from '@/components/atom';
import Link from 'next/link';

export interface NotFoundProps {}

export const NotFound = ({}: NotFoundProps) => {
  return (
    <Container as="main" className="flex justify-center items-center h-[80dvh]">
      <div className="min-w-[280px]">
        <Logo width={30} height={30} />
        <p className="typography-lead mt-2">잘못된 페이지 입니다.</p>
        <Link href={'/'}>
          <Button className="w-full mt-10">홈으로 가기</Button>
        </Link>
      </div>
    </Container>
  );
};
