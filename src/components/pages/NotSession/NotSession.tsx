import { Button, Container, Logo } from '@/components/atom';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export interface NotSessionProps {}

export const NotSession = ({}: NotSessionProps) => {
  const t = useTranslations('not-session');
  return (
    <Container as="main" className="flex justify-center items-center h-[80dvh]">
      <div className="min-w-[280px]">
        <Logo width={30} height={30} />
        <p className="typography-lead mt-2">{t('title')}</p>
        <Link href={'/'}>
          <Button className="w-full mt-10">{t('button')}</Button>
        </Link>
      </div>
    </Container>
  );
};
