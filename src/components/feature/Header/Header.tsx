'use client';

import Link from 'next/link';
import {
  Container,
  Logo,
  Avatar,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverButton,
} from '@/atom';
import { Session } from 'next-auth';
import { PopoverTrigger } from '@radix-ui/react-popover';
import { BarChart3, LogOut, NotebookPen } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useUserStore } from '@/store/user.store';
import { GetStarted } from '../../widget/GetStarted';
import { LocaleButton } from '../../widget/LocaleButton';

export interface HeaderProps {
  session?: Session | null;
}

export const Header = ({ session }: HeaderProps) => {
  const { actions, userId } = useUserStore();

  if (session && !userId) {
    actions.setUser({ userId: session.id });
  }

  if (!session && userId) {
    actions.logoutState();
  }

  return (
    <Container
      as="header"
      className="h-[70px] flex items-center sticky top-0 left-0 w-full z-50"
    >
      <nav className="w-full max-w-6xl mx-auto p-4 flex justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-4">
          <LocaleButton />
          {!session && (
            <GetStarted className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-4 py-2 rounded-full hover:from-pink-500 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-95" />
          )}
          {session && <Users session={session} logoutState={actions.logoutState} />}
        </div>
      </nav>
    </Container>
  );
};

const Users = ({
  session,
  logoutState,
}: {
  session: Session;
  logoutState: () => void;
}) => {
  return (
    <Container>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center cursor-pointer hover:bg-gray-100 py-1.5 px-2 rounded-lg">
            <p className="typography-sm">{session.email}</p>
            {session.user?.image && (
              <Avatar className="w-8 h-8 ml-4">
                <AvatarImage src={session.user?.image} />
              </Avatar>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <Link href={'/todo'}>
            <PopoverButton>
              <p className="typography-sm flex gap-2 items-center">
                <NotebookPen className="w-4" />
                Todo
              </p>
            </PopoverButton>
          </Link>
          <Link href={'/report'}>
            <PopoverButton>
              <p className="typography-sm flex gap-2 items-center">
                <BarChart3 className="w-4" />
                Report
              </p>
            </PopoverButton>
          </Link>
          <PopoverButton
            className={'mt-2 hover:bg-red-50'}
            onClick={() => {
              signOut();
              logoutState();
            }}
          >
            <p className="typography-sm text-red-500 flex gap-2 items-center">
              <LogOut className="w-4" /> Logout
            </p>
          </PopoverButton>
        </PopoverContent>
      </Popover>
    </Container>
  );
};
