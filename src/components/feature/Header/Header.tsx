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
} from '@/atom';
import { LoginForm } from '../LoginForm';

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <Container
      as="header"
      className="h-[70px] flex items-center sticky top-0 left-0 w-full"
    >
      <nav className="w-full max-w-6xl mx-auto p-4 flex justify-between">
        <Logo />
        <GetStarted />
      </nav>
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
