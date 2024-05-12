import { Header } from '@/feature';
import { Home } from '@/pages';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/server';

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log('session', session);
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
