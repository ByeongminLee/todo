'use client';

import Link from 'next/link';
import {
  Container,
  Dialog,
  DialogTrigger,
  Button,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Logo,
  Avatar,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverButton,
} from '@/atom';
import { LoginForm } from '../LoginForm';
import { Session } from 'next-auth';
import { PopoverTrigger } from '@radix-ui/react-popover';
import { BarChart3, LogOut, NotebookPen } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useUserStore } from '@/store/user.store';

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
        <Logo />
        {!session && <GetStarted />}
        {session && <Users session={session} logoutState={actions.logoutState} />}
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

const GetStarted = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-4 py-2 rounded-full hover:from-pink-500 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-95">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mx-auto sm:mx-0">
            <Logo width={20} height={20} />
          </DialogTitle>
          <DialogDescription className="">
            소셜 로그인을 하여 To Do 서비스를 이용하세요
          </DialogDescription>
        </DialogHeader>

        <LoginForm />

        <DialogFooter className="flex justify-center sm:justify-center flex-row sm:flex-row gap-4">
          <Link
            href="privacy-policy"
            className="typography-muted text-xs hover:text-gray-700"
          >
            개인정보처리방침
          </Link>
          <Link
            href="terms-of-service"
            className="typography-muted text-xs hover:text-gray-700"
          >
            서비스이용약관
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
