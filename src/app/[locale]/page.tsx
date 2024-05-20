import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/server';
import { Header } from '@/components/feature/Header';
import { Home } from '@/components/pages/Home';

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Header session={session} />
      <Home />
    </>
  );
}
