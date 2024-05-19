import { Header, NotSession, Todo } from '@/components';
import { authOptions } from '@/utils/server';
import { getServerSession } from 'next-auth';
import { Report } from '@/pages';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return <NotSession />;
  }

  return (
    <>
      <Header session={session} />
      <Report />
    </>
  );
}
