import {
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
import { LoginForm } from '@/feature';
import { cn } from '@/utils';
import Link from 'next/link';

export interface GetStartedProps {
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export const GetStarted = ({ className, variant }: GetStartedProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={cn(className)}>
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
