import { Header, NotSession, Todo } from '@/components';
import { authOptions } from '@/utils/server';
import { getServerSession } from 'next-auth';

export default async function Page() {
  const session = await getServerSession(authOptions);

  console.log('session', session);

  if (!session) {
    return <NotSession />;
  }

  return (
    <>
      <Header session={session} />
      <Todo />
    </>
  );
}
